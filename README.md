# Ashrith Group of Institutions

Premium website for Ashrith Group of Institutions — a cinematic, editorial-style marketing site built with Vite + React + TanStack Router.

## Tech Stack

- Vite + React 19 + TypeScript
- TanStack Router (client-side, file-based)
- Tailwind CSS v4
- Framer Motion
- Lenis Smooth Scroll

## Development

Requires Node.js 18+.

```sh
npm install
npm run dev
```

## Build & Deploy

```sh
npm run build   # outputs to dist/
npm run preview # preview the static build locally
```

Deploy the `dist/` folder to Vercel, Netlify, or any static host.  
For Vercel, add a rewrite rule so all routes serve `index.html`:

**`vercel.json`**
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
