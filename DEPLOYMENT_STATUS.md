# Deployment status

**Last updated:** 2026-05-16  
**Branches:** `main`, `develop` (source) · `gh-pages` (public static site only)  
**Public domain:** [biu-gholdings.org](https://biu-gholdings.org)

---

## Architecture

| Layer | Role |
|-------|------|
| **Private repo** (`develop` / `main`) | Laravel source, React pages, internal `docs/`, PDFs, deploy scripts |
| **`gh-pages` branch** | **Orphan branch** — production static frontend only (built assets + `index.html` + SPA fallback) |
| **GitHub Pages** | Static CDN for `biu-gholdings.org` (no PHP, no Jekyll) |
| **Cloudflare** (recommended) | DNS proxy, SSL, WAF in front of GitHub Pages |

Laravel + Inertia remains the **authoring stack** on `develop`/`main`. Public visitors receive a **Vite-built static SPA** (same React pages) deployed automatically to `gh-pages`.

---

## What is public vs private

| Path | On `gh-pages`? |
|------|----------------|
| Built JS/CSS (`assets/`) | Yes |
| `index.html`, `404.html` | Yes |
| `.nojekyll`, `CNAME` | Yes |
| `README.md`, `docs/`, `docs/source/*.pdf` | **Never** |
| `deploy/`, Laravel `app/`, `routes/` | **Never** |

---

## Automated deployment

**Workflow:** [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

On push to `develop` or `main`:

1. `npm ci`
2. `npm run build:pages` — Vite production build (`vite.config.pages.js`) + [scripts/build-pages.mjs](scripts/build-pages.mjs)
3. Publish `dist-pages-publish/` to **`gh-pages`** (force orphan — branch contains only the artifact)

**Local build:**

```bash
npm run build:pages
# Inspect output: dist-pages-publish/
```

**Local static preview:**

```bash
npm run dev:pages
```

---

## GitHub repository settings (required once)

1. **Settings → Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`
2. **Custom domain:** `biu-gholdings.org` (HTTPS enforced)
3. Keep repository **Private** (Pages can still serve the public site from `gh-pages`).

Do **not** commit `CNAME` on `develop` or `main` (CI blocks it). `CNAME` is generated only in the Pages artifact.

---

## Cloudflare (recommended)

1. Add site `biu-gholdings.org` to Cloudflare.
2. DNS: `CNAME` `@` → `<org>.github.io` (or use GitHub Pages A records) — **proxied** (orange cloud).
3. SSL/TLS: **Full (strict)**.
4. Optional: cache static assets (`/assets/*`), bypass cache for `index.html` if needed.

See [deploy/DNS-CUTOVER.md](deploy/DNS-CUTOVER.md) when migrating off legacy Jekyll/README Pages.

---

## Optional: Laravel Forge / VPS

Full PHP hosting (server-side Inertia, forms, future APIs) is documented in [deploy/](deploy/README.md) and [docs/deployment-guide.md](docs/deployment-guide.md). Use Forge when you need Laravel runtime features beyond the static v1 brochure.

For v1 public marketing site, **GitHub Pages + static build is the primary path**.

---

## CI

| Workflow | Purpose |
|----------|---------|
| [ci.yml](.github/workflows/ci.yml) | PHPUnit, Laravel Vite build, static Pages build, block root `CNAME` |
| [deploy-pages.yml](.github/workflows/deploy-pages.yml) | Publish to `gh-pages` |
| [deploy-production.yml](.github/workflows/deploy-production.yml) | Optional SSH deploy to Forge/VPS |

---

## Verification

After deploy, confirm:

- [https://biu-gholdings.org/](https://biu-gholdings.org/) — React corporate home (not README/Jekyll)
- [https://biu-gholdings.org/about](https://biu-gholdings.org/about) — EN routes work (via `404.html` SPA fallback)
- [https://biu-gholdings.org/pt](https://biu-gholdings.org/pt) — PT home
- `/docs/`, `/README.md`, `*.pdf` — **404** on public host
- [deploy/POST-DEPLOY-CHECKLIST.md](deploy/POST-DEPLOY-CHECKLIST.md)
