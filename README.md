# Daniel Garcia — Engineering Portfolio

[View the live portfolio](https://portfolio.drga98.com/)

This portfolio introduces my work supporting Telemundo productions at NBCUniversal and features selected projects in data analysis, automation, and AI systems. It also covers my professional experience, certifications, and publications. The site is built with Astro, TypeScript, and Tailwind CSS.

## Run locally

Use Node.js 22. From the repository root, install the locked dependencies and start the development server.

```sh
npm ci
npm run dev
```

To verify the production build, run `npm run build`. Astro writes the generated site to `dist/`.

## Edit portfolio content

Update [src/data/config.ts](src/data/config.ts) to change projects, experience, certifications, or other portfolio content. See [ARCHITECTURE.md](ARCHITECTURE.md) for the site structure.

## Deployment

The [GitHub Actions workflow](.github/workflows/deploy.yml) builds and publishes the site to GitHub Pages on pushes to `main`.
