# Deploy to GitHub Pages

GitHub Pages is free for public repositories. This guide uses the personal-site address `https://USERNAME.github.io`, so the template works with its existing root paths.

1. Click **Use this template** and create a **public** repository named exactly `USERNAME.github.io`, replacing `USERNAME` with your GitHub username. If you already use that repository for a site, use [Cloudflare Pages](cloudflare-pages.md) instead of replacing it.
2. Edit `src/data/resume.ts` with your profile, contacts, repository link, and `meta.url: "https://USERNAME.github.io"`.
3. In **Settings > Pages > Build and deployment > Source**, select **GitHub Actions**.
4. Copy [the workflow example](examples/github-pages.yml) to `.github/workflows/pages.yml` in your repository, then commit and push to `main`.
5. Wait for **Deploy CV to GitHub Pages** in the Actions tab. Open `https://USERNAME.github.io`. Future pushes publish updates automatically.

You can copy the workflow locally with:

```bash
mkdir -p .github/workflows
cp docs/examples/github-pages.yml .github/workflows/pages.yml
```

The workflow installs dependencies, builds `out/`, and deploys it using GitHub's built-in token. You do not need a personal access token or a paid domain. If your default branch has another name, update the workflow's `branches` value.

Keep the exact repository name above. An ordinary project repository would serve under `/REPOSITORY/` and needs additional Next.js base-path and asset-link configuration.

A custom domain is optional: add it in **Settings > Pages > Custom domain**, configure the DNS records from [GitHub's domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site), then update `meta.url`. Domain registration is billed separately.

Official references: [create a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
