import { useEffect, useLayoutEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Philosophy } from './components/Philosophy';
import { Process } from './components/Process';
import { About } from './components/About';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { AboutPage } from './components/AboutPage';
import { Project1 } from './components/Project1';
import { Project2 } from './components/Project2';
import { Project3 } from './components/Project3';
import { GolfProject } from './components/GolfProject';
import { WorkPage } from './components/WorkPage';
import { ContactPage } from './components/ContactPage';
import { ContactSentPage } from './components/ContactSentPage';
import { ErrorPage } from './components/ErrorPage';
import { SiteAssetsPage } from './components/SiteAssetsPage';
import { normalizeRoutePath, routes } from './routes';
import { getPageMetadata } from './seo';

const siteOrigin = 'https://nivethux.com';
const socialImage = `${siteOrigin}/og-image.png`;
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }
  element.content = content;
}

export function App({ initialPath }: { initialPath: string }) {
  const [pathname, setPathname] = useState(() => normalizeRoutePath(initialPath));
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      return window.localStorage.getItem('nivethux-theme') === 'dark' ? 'dark' : 'light';
    } catch {
      return 'light';
    }
  });
  const metadata = getPageMetadata(pathname);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      window.localStorage.setItem('nivethux-theme', theme);
    } catch {
      // The theme still works for this session when storage is unavailable.
    }
  }, [theme]);

  useIsomorphicLayoutEffect(() => {
    document.title = metadata.title;
    setMeta('meta[name="description"]', 'name', 'description', metadata.description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', metadata.description);
    setMeta('meta[property="og:image"]', 'property', 'og:image', socialImage);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', socialImage);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (metadata.canonicalPath) {
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.append(canonical);
      }
      canonical.href = `${siteOrigin}${metadata.canonicalPath}`;
      setMeta('meta[property="og:url"]', 'property', 'og:url', canonical.href);
    } else {
      canonical?.remove();
      document.head.querySelector('meta[property="og:url"]')?.remove();
    }

    const robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (metadata.noindex) {
      setMeta('meta[name="robots"]', 'name', 'robots', 'noindex, nofollow');
    } else {
      robots?.remove();
    }
  }, [metadata, pathname]);

  useEffect(() => {
    const knownRoutes = Object.values(routes);
    const handlePopState = () => setPathname(normalizeRoutePath(window.location.pathname));
    const handleClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey ||
        !(event.target instanceof Element)
      ) return;

      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.hasAttribute('download') || (anchor.target && anchor.target !== '_self')) return;

      const destination = new URL(anchor.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname ||
        !knownRoutes.some((route) => route === destination.pathname)
      ) return;

      event.preventDefault();
      window.history.pushState(null, '', destination.href);
      setPathname(destination.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const page = pathname === routes.about ? <AboutPage />
    : pathname === routes.work ? <WorkPage />
    : pathname === routes.contact ? <ContactPage />
    : pathname === routes.contactThankYou ? <ContactSentPage />
    : pathname === routes.enterpriseBanking ? <Project1 />
    : pathname === routes.warehouseOperations ? <Project2 />
    : pathname === routes.agtechStripTest ? <Project3 />
    : pathname === routes.golfApp ? <GolfProject />
    : pathname === routes.siteAssets ? <SiteAssetsPage />
    : pathname === routes.home ? (
      <main>
        <Hero />
        <SelectedWork />
        <Philosophy />
        <Process />
        <About />
        <CtaBanner />
      </main>
    ) : <ErrorPage />;

  return (
    <div className="portfolio-app">
      <Navbar pathname={pathname} theme={theme} onToggleTheme={() => setTheme((current) => current === 'light' ? 'dark' : 'light')} />
      {page}
      <Footer />
    </div>
  );
}

export default App;
