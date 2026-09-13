# CV site template

A clean, responsive CV website built with Next.js, TypeScript, and Tailwind CSS. It supports light and dark themes, print styles, generated social preview images, and static hosting.

The included profile is fictional sample content.

## Customize it

Edit `src/data/resume.ts`. This one file controls the page title, metadata, name, contacts, summary, experience, skills, favicon initials, social preview, and source link.

The resume download is disabled by default. To enable it:

1. Add your PDF at `public/resume.pdf`.
2. Set `resume.enabled` to `true` in `src/data/resume.ts`.
3. Update the download filename and label in the same file if needed.

Colors live in `src/app/globals.css`.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm test
npm run build
```

The static site is written to `out/` and can be deployed to any static hosting service.

## License

[MIT](LICENSE)
