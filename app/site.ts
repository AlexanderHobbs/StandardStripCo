// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

import { services } from '../services.json'

export default {
  title: 'ProStripe',
  description: 'Sharper Lines. Safer Lots.',
  logo: 'i-mdi-road-variant',
  author: 'ProStripe Parking Lot Services',
  url: 'https://prostripe-parking-lot-services.netlify.app',
  github: '',
  generator: '',
  defaultLocale: 'en', // default
  // Business details used for schema.org LocalBusiness markup and the visible
  // contact info (footer + contact page). Keep these identical everywhere
  // (name, address, phone) - consistency is a local SEO ranking signal.
  // TODO: replace the placeholder phone/email and fill in `address` and
  // `areaServed` (cities/counties) with the real details before launch.
  business: {
    name: 'ProStripe Parking Lot Services',
    phone: '+15551234567',
    phoneDisplay: '(555) 123-4567',
    email: 'hello@prostripe-parking-lot-services.example',
    address: undefined as
      | {
          streetAddress: string
          addressLocality: string
          addressRegion: string
          postalCode: string
          addressCountry: string
        }
      | undefined,
    areaServed: [
      'Logan County, AR',
      'Franklin County, AR',
      'Sebastian County, AR',
      'Crawford County, AR',
      'Washington County, AR',
      'Benton County, AR',
    ] as string[],
  },
  twitter: '', // handle without the @, e.g. 'prostripepls'
  trailingSlash: false, // default
  titleSeparator: '|', // default

  navs: {
    primary: [
      {
        title: 'Home',
        icon: 'i-mdi-home',
        to: '/',
      },
      {
        title: 'Services',
        icon: 'i-mdi-road-variant',
        to: '/services',
        // Dropdown menu: one entry per service in services.json.
        // Any nav item can get a dropdown by adding a `children` array.
        children: services.map(({ name, slug }) => ({
          title: name,
          to: `/services/${slug}`,
        })),
      },
      {
        title: 'Our Work',
        icon: 'i-mdi-image-multiple',
        to: '/our-work',
        children: [
          { title: 'Photo Gallery', to: '/our-work' },
          { title: 'Areas We Cover', to: '/areas' },
        ],
      },
    ],
    secondary: [
      {
        title: 'About',
        icon: 'i-mdi-information-outline',
        to: '/about',
      },
      {
        title: 'Blog',
        icon: 'i-mdi-post-outline',
        to: '/blog',
      },
    ],
  },
}
