# ProStripe Parking Lot Services

Website for ProStripe Parking Lot Services — line striping, sealcoating, ADA-compliant marking, pothole repair, parking lot cleaning, and signage installation. Built with Nuxt 3 and Tailwind CSS, statically generated and deployed on Netlify.

## Usage

### Start the development server

```bash
npm run dev
```

### Build

```bash
npm run build    # SSR build
npm run generate # Full static site generation (used for the Netlify deploy)
```

### Preview a production build

```bash
npm run now # build & preview
```

### Lint & format

```bash
npm run lint
```

### Lighthouse

```bash
npm run lighthouse # Uses npx unlighthouse to run Lighthouse across the whole site
```

## Stack

- [Nuxt 3](https://nuxt.com/) — file-based routing, SSR/static generation
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Nuxt Content](https://content.nuxt.com/) — markdown-powered blog
- [Nuxt Image](https://image.nuxt.com/) — responsive image handling
- [Nuxt SEO](https://nuxtseo.com/) — sitemap, robots, OG images, schema.org
- [VeeValidate](https://vee-validate.logaretm.com/v4/integrations/nuxt/) — contact form validation
- [Pinia](https://pinia.vuejs.org/) — state management
- Contact form submissions are handled via [Netlify Forms](https://docs.netlify.com/manage/forms/setup/)

## Content

- **Services**: `services.json` + `types/services.ts` — edit to add/update services (each gets its own `/services/[slug]` page)
- **Blog posts**: `app/content/blog/*.md`
- **Site identity/nav**: `app/site.ts`
- **Brand colors/fonts**: `app/theme/tokens.ts`
