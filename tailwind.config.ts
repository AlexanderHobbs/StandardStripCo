import { colors, fonts, backgroundImages } from './app/theme/tokens'

import { getFontsWithFallback } from './app/utils/font'
import { safelist } from './app/utils/colors'

import tailwindTypography from '@tailwindcss/typography'
import tailwindForms from '@tailwindcss/forms'

export default {
  darkMode: 'class',
  plugins: [tailwindTypography, tailwindForms],

  safelist,

  theme: {
    extend: {
      colors,
      fontFamily: getFontsWithFallback(fonts),
      backgroundImage: backgroundImages,
    },
  },

  content: [
    '{.,app,*-layer}/components/**/*.{js,vue,ts}',
    '{.,app,*-layer}/layouts/**/*.vue',
    '{.,app,*-layer}/pages/**/*.vue',
    '{.,app,*-layer}/plugins/**/*.{js,ts}',
    '{.,app,*-layer}/app.vue',
    '{.,app,*-layer}/*.{mjs,js,ts}',
    '{.,*-layer}/nuxt.config.{js,ts}',
  ],
}
