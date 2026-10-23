import type { Credential, SocialLink } from './schema'

/**
 * Who the site is about. START HERE: every page, the sidebar, the SEO tags and the legal pages read
 * these values, so changing them here changes them everywhere.
 */
export const site = {
  name: 'Jonel Beltran',
  brand: 'JLB | Automates',
  /** The brand name as the sidebar logo shows it: the second part takes the accent color. */
  brandParts: ['Your', 'Brand'],
  /** Your logo mark, one file per theme (`light` = for light backgrounds). The 96px copies are the
   *  sidebar header (shown at 32-36px); the full ones are the Work logo faces. */
  logo: {
    light: '/images/brand/Dark version@2x.png',
    dark: '/images/brand/Light version@2x.png',
    headerLight: '/images/brand/Dark version@2x.png',
    headerDark: '/images/brand/Light version@2x.png',
  },
  /** The live address, no trailing slash. Canonical URLs, the sitemap and the JSON-LD use it. */
  url: 'https://portfolio.jlbeltran.com/jlbautomates',
  role: 'Automation Specialist, GL Expert',
  email: 'jonel.beltran14@gmail.com',
  emailSubject: 'Project inquiry',
  replyPromise: 'Reply within one business day.',
  location: 'Marikina City, GMT+63',
  /** Two-letter country code (ISO 3166) for the Person JSON-LD address. */
  countryCode: 'PH',
  /** Your clock, shown live at the top of the sidebar. Any IANA zone, e.g. 'America/New_York'. */
  timeZone: 'PST',
  timePlace: 'in Your City',
  avatar: { src: '/images/profile/all smiles_no bg.png', alt: 'Jonel Beltran', width: 400, height: 400 },
  /** The sidebar picture (112px, 44px on the rail). */
  avatarSmall: '/images/profile/focused_no bg.png',
} as const

/** A credential shown in About and the sidebar check. Delete the `image` to show it without a badge. */
export const certification: Credential = {
  title: 'Funnel Building Expert',
  detail: 'Credential ID #10-260',
  issuer: 'GHL Champ',
  href: '#',
  image: { src: '/images/badges/Funnel Building Expert.jpeg', alt: 'Your certification badge', width: 96, height: 96 },

  title: 'Workflow & Automation Expert',
  detail: 'Credential ID #10-138',
  issuer: 'GHL Champ',
  href: '#',
  image: { src: '/images/badges/Workflow & Automation Workflow Expert.jpeg', alt: 'Your certification badge', width: 96, height: 96 },

  title: 'Course Creator Expert',
  detail: 'Credential ID #10-48',
  issuer: 'GHL Champ',
  href: '#',
  image: { src: '/images/badges/Course Creator Expert.jpeg', alt: 'Your certification badge', width: 96, height: 96 },
}

/** Up to five fit the sidebar header. `icon` picks the glyph in components/brand/SocialIcon.tsx. */
export const socials: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jonel-beltran/', external: true, icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/JLBAutomates', external: true, icon: 'github' },
  { label: 'X', href: '#', external: true, icon: 'x' },
  { label: 'Facebook', href: 'https://www.facebook.com/jonel.beltran', external: true, icon: 'facebook' },
  { label: 'Discord', href: '#', external: true, icon: 'discord' },
]

/** Off-site links the pages point at. Replace each `#` with a real URL. */
export const externalLinks = {
  resource: '#',
  showcase: '#',
  company: '#',
} as const

export function mailtoHref(): string {
  return `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`
}
