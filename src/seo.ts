import { routes } from './routes';

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
}

const pageMetadata: Record<string, PageMetadata> = {
  [routes.home]: {
    title: 'Product Designer Portfolio | Enterprise UX & Human–AI | NivethUX',
    description: 'Nivethitha is a Product Designer shaping enterprise UX, operational workflows, and Human–AI experiences into clear, useful products for complex systems.',
    canonicalPath: routes.home,
  },
  [routes.about]: {
    title: 'About Nivethitha | Product & UX Designer | NivethUX',
    description: 'Meet Nivethitha, a Product Designer working across enterprise UX, financial and operational systems, Human–AI experiences, and constrained workflows.',
    canonicalPath: routes.about,
  },
  [routes.work]: {
    title: 'UX & Product Design Case Studies | NivethUX',
    description: 'Explore UX and product design case studies spanning enterprise banking, warehouse workflows, agricultural field testing, and an AI concierge concept.',
    canonicalPath: routes.work,
  },
  [routes.contact]: {
    title: 'Contact Nivethitha | NivethUX',
    description: 'Get in touch with Nivethitha about product design, enterprise workflows, or a project worth untangling.',
    canonicalPath: routes.contact,
  },
  [routes.contactThankYou]: {
    title: 'Message Sent | NivethUX',
    description: 'Your message has been sent. Nivethitha will get back to you soon.',
    canonicalPath: routes.contactThankYou,
    noindex: true,
  },
  [routes.enterpriseBanking]: {
    title: 'Enterprise Banking UX Case Study | NivethUX',
    description: 'Explore Nivethitha’s enterprise banking UX work: role-based operations, bilingual RTL and LTR architecture, Sharia finance, and workflows across teams.',
    canonicalPath: routes.enterpriseBanking,
  },
  [routes.warehouseOperations]: {
    title: 'Warehouse & Inventory UX Case Study | NivethUX',
    description: 'Explore Nivethitha’s warehouse UX design for material movement: scan-first workflows, error recovery, and rugged Zebra handhelds for factory teams.',
    canonicalPath: routes.warehouseOperations,
  },
  [routes.agtechStripTest]: {
    title: 'Agricultural Field Testing App UX Case Study | NivethUX',
    description: 'A field-testing app UX case study by Nivethitha: plot verification, potato quality samples, offline recovery, and traceable reports for field agents.',
    canonicalPath: routes.agtechStripTest,
  },
  [routes.golfApp]: {
    title: 'AI Golf Concierge App Design Case Study | NivethUX',
    description: 'An AI concierge design concept for golf-day bookings, group coordination, pricing, payments, and check-in, designed by Nivethitha with clear next steps.',
    canonicalPath: routes.golfApp,
  },
  [routes.siteAssets]: {
    title: 'NivethUX Site Assets | Favicon and Social Preview',
    description: 'See the NivethUX favicon at different sizes and the portfolio social preview graphic.',
    canonicalPath: routes.siteAssets,
    noindex: true,
  },
};

export function getPageMetadata(pathname: string): PageMetadata {
  return pageMetadata[pathname] ?? {
    title: 'Page Not Found | NivethUX',
    description: 'The page you are looking for does not exist or the link is out of date.',
    noindex: true,
  };
}
