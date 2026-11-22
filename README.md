
# FORMA
### Wellness, Beautifully Considered.

FORMA is a curated luxury home-wellness storefront built with React and TypeScript.

The platform brings together premium equipment across three collections:

- **MOVE** — Strength training systems and Pilates equipment
- **RESTORE** — Prefabricated residential saunas
- **REFRESH** — Cold immersion and recovery systems

Rather than operating as a traditional e-commerce store, FORMA is designed as a considered product-discovery experience, connecting customers directly with manufacturers.

## The Project

FORMA explores how thoughtful frontend architecture and visual design can elevate the online shopping experience.

The application uses a shared showroom component powered by collection-specific configuration data. This allows each collection to maintain its own identity while preserving consistent navigation, layout, and interaction patterns.

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- CSS3
- Responsive layouts

## Features

- Three curated wellness collections
- Dynamic showroom pages
- Collection-specific content, imagery, and visual accents
- Reusable React components
- Client-side routing
- Subtle cinematic hero animations
- Responsive design considerations
- Reduced-motion accessibility support

## Architecture

The storefront uses configuration-driven rendering to minimize duplicated code.

Each collection defines its own content, imagery, and presentation details. A reusable showroom component renders the appropriate experience based on the selected collection.

This approach makes the application easier to maintain and extend as new products and manufacturers are introduced.

## Roadmap

- [x] Homepage and collection navigation
- [x] Reusable showroom architecture
- [x] Dynamic collection content and imagery
- [ ] Reusable product detail pages
- [ ] Structured product catalog
- [ ] Manufacturer referral integration
- [ ] Interactive wellness planning calculators
- [ ] Production deployment

## Run Locally

Clone the repository and install dependencies:

```bash
npm install
npm run dev
```

Open the local URL provided by Vite.

## Project Status

Active development.

FORMA is an independent portfolio and commercial storefront project. Product listings, manufacturer relationships, and outbound purchasing integrations are being developed.

## Design & Development

Designed and developed as an independent React and TypeScript project, with an emphasis on reusable architecture, visual consistency, and an intuitive customer experience.
