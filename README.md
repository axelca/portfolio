# Interaction design portfolio

aka my website

## Installation

Install the dependencies:

#### `npm i`

Run the development server:

#### `npm start`

Production build to `/public`:

#### `npm run build`

Cleanup cache (often fixes misc errors when run before `yarn dev`):

#### `npm run clean`

## SEO

The component `src/components/common/SEO.js` handles all meta data and SEO content, modify the `SEO_DATA` variable to add the data automatically. For application manifest data and favicon, modify the `gatsby-plugin-manifest` configuration in `gatsby-config.js`.

## Styling

This project uses [styled-components]() to handle styling: `src/styles/theme.js` defines the styling base and `src/styles/GlobalStyles.js` includes basic element styles along with the CSS Reset.
