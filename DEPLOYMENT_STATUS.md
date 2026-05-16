# Deployment status

**Updated:** 2026-05-16  
**Public domain:** [biu-gholdings.org](https://biu-gholdings.org)  
**Public branch:** `gh-pages` (compiled static frontend only)  
**Source:** `develop`, `main` (private)

---

## Hardened architecture

```
develop / main (PRIVATE)              gh-pages (PUBLIC orphan branch)
──────────────────────              ────────────────────────────────
Laravel + Inertia + docs/      →     Vite static export ONLY
README, PDFs, deploy/                • assets/*.js, *.css
                                     • index.html + 14 route folders
                                     • .nojekyll, CNAME, 404.html
                                     ✗ NO README, docs/, PDFs, PHP
```

| Control | Implementation |
|---------|----------------|
| Dedicated `gh-pages` branch | `peaceiris/actions-gh-pages` + `force_orphan: true` |
| Compiled assets only | `dist-pages-publish/` from `npm run build:pages` |
| No source publish | Pre-publish leak checks + whitelist verifier |
| No README/docs exposure | [scripts/verify-pages-artifact.mjs](scripts/verify-pages-artifact.mjs) + post-deploy job |
| Automated deploy | [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml) |
| Custom domain | `CNAME` → `biu-gholdings.org` (artifact only) |
| EN/PT routes (14) | Per-route `index.html` + React Router |
| UI | Same React components & Tailwind as internal app |

Policy: [.github/PAGES_POLICY.md](.github/PAGES_POLICY.md)

---

## GitHub Pages settings (required)

1. **Settings → Pages**
2. **Source:** Deploy from a branch → **`gh-pages`** / **`/ (root)`**
3. **Not** `main`, `develop`, or `/docs`
4. **Custom domain:** `biu-gholdings.org` + **Enforce HTTPS**

Setup: [deploy/GITHUB-PAGES-SETUP.md](deploy/GITHUB-PAGES-SETUP.md)

---

## Deploy flow

```bash
npm run build:pages   # local: build + verify
```

CI on push to `develop`/`main`:

1. Vite production build (`vite.config.pages.js`)
2. Generate 14 EN/PT static shells
3. Verify whitelist
4. Push to `gh-pages`
5. Re-checkout `gh-pages` and verify again

---

## Static pages

| EN | PT |
|----|-----|
| `/` | `/pt` |
| `/about` | `/sobre` |
| `/leadership` | `/lideranca` |
| `/corporate-structure` | `/estrutura-corporativa` |
| `/subsidiaries` | `/subsidiarias` |
| `/investor-relations` | `/relacoes-com-investidores` |
| `/contact` | `/contacto` |

---

## Cloudflare

- CNAME `@` → `biu-gholdings.github.io` (proxied)
- SSL: **Full (strict)**

---

## Laravel (internal)

Full stack runs locally / optional Forge — **not** on GitHub Pages. See [deploy/README.md](deploy/README.md).
