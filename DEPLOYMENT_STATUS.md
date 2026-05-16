# Deployment status

**Updated:** 2026-05-16  
**Public site:** [biu-gholdings.org](https://biu-gholdings.org)  
**Public branch:** `gh-pages` (static frontend only)  
**Source branches:** `develop`, `main` (private — Laravel + internal docs)

---

## Architecture (simplified)

```
develop / main (private)          gh-pages (public orphan branch)
─────────────────────────         ───────────────────────────────
Laravel + Inertia (internal)  →   npm run build:pages (GitHub Actions)
React page components              ├── assets/          (Vite bundle)
docs/, PDFs, README                ├── index.html       (Home)
deploy scripts                     ├── pt/index.html    (Home PT)
                                   ├── about/index.html … (14 routes)
                                   ├── .nojekyll
                                   └── CNAME → biu-gholdings.org
```

| What | Where |
|------|--------|
| Institutional EN/PT pages (7 × 2) | Static React export — same components & Tailwind as Laravel app |
| Laravel / PHP runtime | **Not** on GitHub Pages — local & optional Forge only |
| Internal docs & PDFs | `develop` / `main` only — **never** on `gh-pages` |

---

## Static pages (14)

| EN | PT |
|----|-----|
| `/` Home | `/pt` |
| `/about` | `/sobre` |
| `/leadership` | `/lideranca` |
| `/corporate-structure` | `/estrutura-corporativa` |
| `/subsidiaries` | `/subsidiarias` |
| `/investor-relations` | `/relacoes-com-investidores` |
| `/contact` | `/contacto` |

---

## Automation

**Workflow:** [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)

1. `npm ci`
2. `npm run build:pages` — `vite.config.pages.js` + [scripts/build-pages.mjs](scripts/build-pages.mjs)
3. [scripts/verify-pages-artifact.mjs](scripts/verify-pages-artifact.mjs)
4. Push artifact to **`gh-pages`** (orphan branch)

**Local:**

```bash
npm run build:pages    # build + verify
npm run dev:pages      # preview static app
```

---

## GitHub Pages setup (one-time)

1. **Settings → Pages**
2. **Source:** Deploy from a branch
3. **Branch:** `gh-pages` / `/ (root)`
4. **Custom domain:** `biu-gholdings.org` → enforce HTTPS
5. Keep repository **Private**

Full steps: [deploy/GITHUB-PAGES-SETUP.md](deploy/GITHUB-PAGES-SETUP.md)

---

## Cloudflare

- CNAME `@` → `biu-gholdings.github.io` (proxied)
- SSL: **Full (strict)**
- Cache `/assets/*`; short TTL on HTML

---

## Laravel (internal only)

Local development and optional VPS/Forge hosting use the full Laravel stack. That path does **not** publish to `gh-pages`. See [deploy/README.md](deploy/README.md).

---

## CI

| Workflow | Role |
|----------|------|
| [ci.yml](.github/workflows/ci.yml) | Laravel tests + static build verification on PR/push |
| [deploy-pages.yml](.github/workflows/deploy-pages.yml) | Publish static site to `gh-pages` |
