# OFFDOTS — Creative Studio

A full-service creative studio website specialising in brand identity, web design, motion design and digital strategy.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool
- **Tailwind CSS v4** — styling
- **shadcn/ui** — component library
- **React Router v7** — client-side routing
- **Lucide React** — icons
- **Tally.so** — contact form integration

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for static SPA deployment. After running `npm run build`, the `dist/` folder contains all assets ready for deployment on platforms like **Vercel**, **Netlify**, or any static hosting provider.

### Vercel

Simply connect your repository to Vercel. It will auto-detect the Vite configuration and deploy.

### Netlify

Add a `_redirects` file in `/public` with:
```
/*    /index.html   200
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, Work, Services, About, Contact
│   ├── shared/        # Reusable components (Gallery, Marquee, etc.)
│   └── ui/            # shadcn/ui primitives
├── data/              # Constants, content data
├── lib/               # Utilities
└── pages/             # Route pages (Home, ProjectDetail, Clubs, Contact)
```
