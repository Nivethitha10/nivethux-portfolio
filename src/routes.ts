export const routes = {
  home: '/',
  about: '/about',
  work: '/work',
  contact: '/contact',
  contactThankYou: '/contact/thank-you',
  enterpriseBanking: '/enterprise-banking-platform',
  warehouseOperations: '/warehouse-operations-material-movement',
  agtechStripTest: '/agtech-strip-test-field-quality',
  golfApp: '/golf-app-ai-concierge',
  siteAssets: '/site-assets',
} as const;

export function normalizeRoutePath(pathname: string): string {
  if (pathname === '/') return pathname;

  const normalizedPath = pathname.replace(/\/+$/, '');
  return Object.values(routes).some((route) => route === normalizedPath)
    ? normalizedPath
    : pathname;
}
