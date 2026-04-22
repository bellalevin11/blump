# BLUMP Astro Site

A static, mobile-first DJ website for BLUMP built with Astro and Tailwind CSS v4. The project is designed for GitHub Pages deployment, uses reusable Astro components, and keeps repeatable content in a shared data file for easy updates.

## Stack

- Astro
- Tailwind CSS v4 via `@tailwindcss/vite`
- Static deployment output
- Formspree-friendly booking form

## Project structure

```text
.
├── astro.config.mjs
├── package.json
├── public/
│   └── images/
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── pages/
│   └── styles/
└── README.md
```

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

## Build

```bash
npm run build
```

The production site will be generated in `dist/`.

## Formspree setup

Update the `formspreeAction` constant in [src/components/ContactForm.astro](/Users/blevin22_1/Desktop/everything/blump/src/components/ContactForm.astro) with your real Formspree endpoint:

```astro
const formspreeAction = "https://formspree.io/f/your-form-id";
```

## Content updates

- Site-wide copy, links, testimonials, sets, and gallery metadata live in [src/data/site.ts](/Users/blevin22_1/Desktop/everything/blump/src/data/site.ts).
- Replace placeholder gallery images in `public/images/` with final media while keeping the same filenames, or update the paths in `src/data/site.ts`.
- Update `SITE_URL`, `BASE_PATH`, and email/social values as needed for production.

## GitHub Pages deployment

This Astro config is already set for static output.

1. Install dependencies.
2. Run `npm run build`.
3. Publish the generated `dist/` directory to GitHub Pages.

### Base path note

- If you deploy to a custom domain, the default `BASE_PATH=/` is correct.
- If you deploy to a project site such as `https://username.github.io/repo-name/`, build with:

```bash
BASE_PATH=/repo-name/ npm run build
```

### Site URL note

For clean canonical URLs and metadata, set your production domain when building:

```bash
SITE_URL=https://your-domain.com npm run build
```

You can combine both variables if needed:

```bash
SITE_URL=https://username.github.io BASE_PATH=/repo-name/ npm run build
```

## GitHub Pages Deployment

This repo deploys to GitHub Pages with GitHub Actions, not with the legacy "Deploy from a branch" Jekyll flow.

What was wrong before:

- There was no `.github/workflows/deploy.yml`, so GitHub Pages could fall back to default branch-based publishing.
- That default behavior is why GitHub Pages was trying to treat the repo like a Jekyll site instead of building the Astro app.

What this repo now uses:

- [astro.config.mjs](/Users/blevin22_1/Desktop/everything/blump/astro.config.mjs) sets `site` to `https://djblump.com` and `output: "static"`.
- [public/CNAME](/Users/blevin22_1/Desktop/everything/blump/public/CNAME) preserves the custom domain.
- [public/.nojekyll](/Users/blevin22_1/Desktop/everything/blump/public/.nojekyll) ensures the published output is not processed as a Jekyll site.
- [.github/workflows/deploy.yml](/Users/blevin22_1/Desktop/everything/blump/.github/workflows/deploy.yml) checks out the repo, installs Node dependencies, builds Astro, uploads `dist/`, and deploys with GitHub Pages actions.

Repository settings needed on GitHub:

1. Go to `Settings` -> `Pages`.
2. Under `Build and deployment`, set `Source` to `GitHub Actions`.
3. Keep the custom domain set to `djblump.com`.

Deployment flow:

1. Push to `main`.
2. GitHub Actions runs the Pages workflow.
3. Astro builds the site to `dist/`.
4. The workflow uploads `dist/` and deploys it to GitHub Pages.

## Media notes

The current build uses local placeholder/event imagery from the existing project. Swap in final photography or short looping background media later without changing the page structure.
