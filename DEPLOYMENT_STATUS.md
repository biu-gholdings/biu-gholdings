# Deployment status

**Last updated:** 2026-05-16  
**Source branches:** `main`, `develop` (private)  
**Public domain:** [biu-gholdings.org](https://biu-gholdings.org)  
**Deploy method:** GitHub Actions → official GitHub Pages (`actions/deploy-pages`)

---

## Architecture

| Layer | Role |
|-------|------|
| **Private repo** (`develop` / `main`) | Laravel + Inertia source, `docs/`, internal PDFs, deploy scripts |
| **GitHub Actions** | `npm run build:pages` → verified artifact → `actions/deploy-pages` |
| **GitHub Pages** | Static CDN — corporate React frontend only |
| **Cloudflare** (recommended) | DNS, proxy, WAF, SSL in front of Pages |

Public visitors never receive repository markdown, PDFs, or deployment scripts.

---

## What is public vs private

| Path | Published? |
|------|------------|
| `assets/*` (Vite build) | Yes |
| `index.html`, `404.html` | Yes |
| `.nojekyll`, `CNAME` | Yes |
| `README.md`, `docs/`, `docs/source/*.pdf` | **Never** |
| `deploy/`, `scripts/`, Laravel `app/` | **Never** |

Enforced by [scripts/build-pages.mjs](scripts/build-pages.mjs) and [scripts/verify-pages-artifact.mjs](scripts/verify-pages-artifact.mjs) in CI.

---

## Exact GitHub Pages setup steps

See **[deploy/GITHUB-PAGES-SETUP.md](deploy/GITHUB-PAGES-SETUP.md)** for the full checklist. Summary:

1. **Settings → Pages → Source:** **GitHub Actions** (not “Deploy from a branch”).
2. **Custom domain:** `biu-gholdings.org` — enable **Enforce HTTPS**.
3. Push to `develop` or run workflow **Deploy GitHub Pages** manually.
4. Configure **Cloudflare** DNS (proxied) with SSL **Full (strict)**.

Do **not** commit `CNAME` on `develop`/`main` (CI blocks it). `CNAME` is generated only inside the build artifact.

---

## Automated workflow

**File:** [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

| Step | Action |
|------|--------|
| 1 | `npm ci` |
| 2 | `npm run build:pages` — Vite production (`vite.config.pages.js`) |
| 3 | `node scripts/verify-pages-artifact.mjs` |
| 4 | `actions/upload-pages-artifact` |
| 5 | `actions/deploy-pages` → environment `github-pages` |

**Local build:**

```bash
npm run build:pages
node scripts/verify-pages-artifact.mjs dist-pages-publish
```

---

## Cloudflare compatibility

- **CNAME** apex/`www` to GitHub Pages host (see setup doc).
- **SSL/TLS:** Full (strict).
- Cache **`/assets/*`** aggressively; avoid long cache on `index.html` / HTML routes.
- Compatible with GitHub Pages custom domain + enforced HTTPS.

Details: [deploy/GITHUB-PAGES-SETUP.md](deploy/GITHUB-PAGES-SETUP.md) §4.

---

## Optional: Laravel Forge / VPS

PHP hosting for server-side Inertia is documented in [deploy/README.md](deploy/README.md). The v1 **public marketing site** uses **GitHub Pages static CDN** only.

---

## CI workflows

| Workflow | Purpose |
|----------|---------|
| [ci.yml](.github/workflows/ci.yml) | PHPUnit, Laravel + Pages builds, artifact verification |
| [deploy-pages.yml](.github/workflows/deploy-pages.yml) | Production Pages deploy |
| [deploy-production.yml](.github/workflows/deploy-production.yml) | Optional SSH / Forge |

---

## Verification

- [https://biu-gholdings.org/](https://biu-gholdings.org/) — React corporate home
- [https://biu-gholdings.org/pt](https://biu-gholdings.org/pt) — PT home
- EN/PT routes — SPA via `404.html` fallback
- `/docs/`, `/README.md`, `*.pdf` — **404** on public host

[deploy/POST-DEPLOY-CHECKLIST.md](deploy/POST-DEPLOY-CHECKLIST.md)
