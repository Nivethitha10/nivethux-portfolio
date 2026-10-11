import { createElement, StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { readFile, mkdir, rmdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, extname, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outputDirectory = resolve(root, 'dist');
const manifestPath = resolve(outputDirectory, '.vite', 'manifest.json');
const manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
const assetModules = new Map();

function getImporterPath(importer) {
  if (importer.startsWith('file:')) return fileURLToPath(importer);
  if (importer.startsWith('\0')) return null;
  return resolve(importer.startsWith(sep) ? root : root, importer.replaceAll('/', sep));
}

const assetPlugin = {
  name: 'prerender-built-assets',
  enforce: 'pre',
  async resolveId(source, importer) {
    if (!importer || !source.startsWith('.')) return null;

    const extension = extname(source.split('?')[0]).toLowerCase();
    if (!['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.webp', '.pdf'].includes(extension)) {
      return null;
    }

    const importerPath = getImporterPath(importer);
    if (!importerPath) return null;

    const sourcePath = resolve(dirname(importerPath), source);
    const manifestKey = relative(root, sourcePath).split(sep).join('/');
    const outputAsset = manifest[manifestKey]?.file;
    let publicUrl;
    if (outputAsset) {
      publicUrl = `/${outputAsset}`;
    } else {
      const sourceContent = await readFile(sourcePath);
      if (sourceContent.byteLength > 4096) {
        throw new Error(`No production asset found in Vite manifest for ${manifestKey}`);
      }

      const mimeTypes = {
        '.avif': 'image/avif',
        '.gif': 'image/gif',
        '.jpeg': 'image/jpeg',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.pdf': 'application/pdf',
      };
      publicUrl = `data:${mimeTypes[extension]};base64,${sourceContent.toString('base64')}`;
    }

    const virtualId = `\0prerender-asset:${manifestKey}`;
    assetModules.set(virtualId, publicUrl);
    return virtualId;
  },
  load(id) {
    const publicUrl = assetModules.get(id);
    return publicUrl ? `export default ${JSON.stringify(publicUrl)};` : null;
  },
};

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function setMeta(html, attribute, key, value) {
  const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const tagPattern = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}\\s*=\\s*["']${escapedKey}["'])[^>]*>`,
    'i',
  );
  const tag = html.match(tagPattern)?.[0];
  if (!tag) throw new Error(`Expected meta tag ${attribute}="${key}" in index.html`);

  const contentPattern = /\bcontent\s*=\s*(["']).*?\1/i;
  const updatedTag = tag.replace(contentPattern, `content="${escapeHtml(value)}"`);
  return html.replace(tagPattern, updatedTag);
}

function setCanonical(html, canonicalUrl) {
  const canonicalPattern = /<link\b(?=[^>]*\brel\s*=\s*["']canonical["'])[^>]*>/i;
  const tag = html.match(canonicalPattern)?.[0];
  if (!tag) throw new Error('Expected canonical link in index.html');
  if (!canonicalUrl) return html.replace(canonicalPattern, '');

  const hrefPattern = /\bhref\s*=\s*(["']).*?\1/i;
  return html.replace(canonicalPattern, tag.replace(hrefPattern, `href="${escapeHtml(canonicalUrl)}"`));
}

function applyRouteMetadata(template, metadata, canonicalUrl) {
  let html = template.replace(/<title\b[^>]*>[\s\S]*?<\/title>/i, `<title>${escapeHtml(metadata.title)}</title>`);
  html = setMeta(html, 'name', 'description', metadata.description);
  html = setCanonical(html, canonicalUrl);
  html = setMeta(html, 'property', 'og:title', metadata.title);
  html = setMeta(html, 'property', 'og:description', metadata.description);
  html = setMeta(html, 'property', 'og:image', 'https://nivethux.com/og-image.png');
  html = setMeta(html, 'name', 'twitter:title', metadata.title);
  html = setMeta(html, 'name', 'twitter:description', metadata.description);
  html = setMeta(html, 'name', 'twitter:image', 'https://nivethux.com/og-image.png');

  const ogUrlPattern = /<meta\b(?=[^>]*\bproperty\s*=\s*["']og:url["'])[^>]*>\s*/i;
  if (canonicalUrl) {
    html = setMeta(html, 'property', 'og:url', canonicalUrl);
  } else {
    html = html.replace(ogUrlPattern, '');
  }

  const robotsPattern = /<meta\b(?=[^>]*\bname\s*=\s*["']robots["'])[^>]*>\s*/i;
  html = html.replace(robotsPattern, '');
  if (metadata.noindex) {
    html = html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>');
  }
  return html;
}

const server = await createServer({
  root,
  configFile: resolve(root, 'vite.config.ts'),
  plugins: [assetPlugin],
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const [{ default: App }, { routes }, { getPageMetadata }] = await Promise.all([
    server.ssrLoadModule('/src/App.tsx'),
    server.ssrLoadModule('/src/routes.ts'),
    server.ssrLoadModule('/src/seo.ts'),
  ]);
  const routePaths = Object.values(routes);
  if (new Set(routePaths).size !== routePaths.length) {
    throw new Error('Duplicate routes found; refusing to generate duplicate prerendered pages');
  }

  const template = await readFile(resolve(outputDirectory, 'index.html'), 'utf8');
  if (!/<div id="root"><\/div>/.test(template)) {
    throw new Error('Expected an empty #root element in the built index.html');
  }

  async function writePrerenderedPage(routePath, metadata, outputPath, canonicalUrl) {
    const appHtml = renderToString(
      createElement(StrictMode, null, createElement(App, { initialPath: routePath })),
    );
    if (!appHtml.trim()) throw new Error(`React rendered empty content for ${routePath}`);

    const appMarkupStart = appHtml.indexOf('<div class="portfolio-app">');
    if (appMarkupStart < 0) throw new Error(`Expected rendered app markup for ${routePath}`);
    const resourceHints = appHtml.slice(0, appMarkupStart);
    if (resourceHints && !/^(?:<link\b[^>]*rel="preload"[^>]*\/>)+$/.test(resourceHints)) {
      throw new Error(`Unexpected server-rendered markup before the app for ${routePath}`);
    }

    const pageHtml = applyRouteMetadata(template, metadata, canonicalUrl)
      .replace('</head>', `${resourceHints}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml.slice(appMarkupStart)}</div>`);

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, pageHtml);
    console.log(`Prerendered ${routePath} -> ${relative(outputDirectory, outputPath)}`);
  }

  for (const routePath of routePaths) {
    const metadata = getPageMetadata(routePath);
    if (!metadata.canonicalPath || metadata.canonicalPath !== routePath) {
      throw new Error(`Missing or invalid canonical metadata for route ${routePath}`);
    }
    const outputPath = routePath === '/'
      ? resolve(outputDirectory, 'index.html')
      : resolve(outputDirectory, routePath.slice(1), 'index.html');
    await writePrerenderedPage(routePath, metadata, outputPath, `https://nivethux.com${routePath}`);
  }

  await writePrerenderedPage(
    '/__not_found__',
    getPageMetadata('/__not_found__'),
    resolve(outputDirectory, '404.html'),
    null,
  );
  await unlink(manifestPath);
  await rmdir(dirname(manifestPath));
} finally {
  await server.close();
}
