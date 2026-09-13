# Deploy to Cloudflare Pages

This template exports static files, so Cloudflare Pages' Free plan is enough for a personal CV within its [usage limits](https://developers.cloudflare.com/pages/platform/limits/). No paid server or Workers runtime is needed.

## Publish

1. Click **Use this template** on GitHub and create your own repository.
2. Edit `src/data/resume.ts`: replace the sample profile, contacts, `sourceRepo`, and `meta.url` with your public site URL.
3. In Cloudflare, open **Workers & Pages > Create application > Pages > Import an existing Git repository** and connect your repository.
4. Set these build options:

   | Setting | Value |
   | --- | --- |
   | Framework preset | Next.js (Static HTML Export) |
   | Production branch | `main` |
   | Build command | `npm run build` |
   | Build output directory | `out` |
   | Root directory | Leave blank |
   | Environment variable | `NODE_VERSION=22` |

5. Deploy. Your site gets a free `https://PROJECT.pages.dev` address. Set `meta.url` to that address if needed and push the change. Future pushes rebuild the site automatically.

[Cloudflare's static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/) describes this deployment mode.

## Use your own domain

In the Pages project, open **Custom domains > Set up a domain** first.

- For `example.com`, add the domain to Cloudflare and use its nameservers. Check that existing email and other DNS records are preserved before switching.
- For `cv.example.com`, you can keep your current DNS provider. Follow the setup flow and add a CNAME pointing to `PROJECT.pages.dev`.

Wait until Cloudflare shows the domain as active, then update `meta.url` and push. See [custom-domain setup](https://developers.cloudflare.com/pages/configuration/custom-domains/).

An existing domain needs no extra purchase. If you buy one, registration and renewal are separate from hosting; check the registrar's annual renewal price rather than assuming a fixed $10.
