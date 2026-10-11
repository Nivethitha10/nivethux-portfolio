import { routes } from './routes';

export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath?: string;
  noindex?: boolean;
}

const pageMetadata: Record<string, PageMetadata> = {
  [routes.home]: {
    title: 'NivethUX | Product Designer for Enterprise Systems',
    description: 'Nivethitha is a product designer focused on enterprise systems, intelligent workflows, and Human-AI experiences.',
    canonicalPath: routes.home,
  },
  [routes.about]: {
    title: 'About Nivethitha | Product Designer — NivethUX',
    description: 'Meet Nivethitha, a product designer working across enterprise products, financial and operational systems, and human-AI experiences.',
    canonicalPath: routes.about,
  },
  [routes.work]: {
    title: 'Product Design Case Studies | NivethUX',
    description: 'Explore NivethUX case studies across banking, manufacturing, agriculture, and hospitality, with project visuals labelled where recreated.',
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
    title: 'Enterprise Banking Platform Case Study | NivethUX',
    description: 'A case study in role-based enterprise banking operations, Sharia compliance, and multi-channel workflows.',
    canonicalPath: routes.enterpriseBanking,
  },
  [routes.warehouseOperations]: {
    title: 'Warehouse Operations Case Study | NivethUX',
    description: 'A warehouse and manufacturing case study on material movement, scanning workflows, and rugged Zebra handheld interfaces.',
    canonicalPath: routes.warehouseOperations,
  },
  [routes.agtechStripTest]: {
    title: 'Strip Test Field Workflow Case Study | NivethUX',
    description: 'A field-first mobile workflow for potato quality checks, with plot context, sample capture, and offline recovery.',
    canonicalPath: routes.agtechStripTest,
  },
  [routes.golfApp]: {
    title: 'Golf Booking Experience Case Study | NivethUX',
    description: 'A golf-day booking concept for tee times, group coordination, pricing, payment, and check-in.',
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
