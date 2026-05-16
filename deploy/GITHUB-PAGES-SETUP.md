# GitHub Pages — exact setup steps

Production deploy uses **[.github/workflows/deploy-pages.yml](../.github/workflows/deploy-pages.yml)** (official `actions/deploy-pages`). The public site is **only** compiled frontend assets — never `README.md`, `docs/`, PDFs, or `deploy/`.

---

## 1. Repository settings (one-time)

1. Open **https://github.com/biu-gholdings/biu-gholdings**
2. **Settings** → **General** → ensure repository visibility is **Private** (required).
3. **Settings** → **Pages**
4. Under **Build and deployment**:
   - **Source:** **GitHub Actions** (not “Deploy from a branch”).
5. Under **Custom domain**:
   - Enter **`biu-gholdings.org`**
   - Save → wait for **DNS check** and **HTTPS** (certificate) to show healthy.
6. Enable **Enforce HTTPS** when available.

> Do **not** set Pages source to `main` / `develop` / `/docs` — that would expose repository markdown.

---

## 2. Trigger a deployment

**Automatic:** push to `develop` or `main` (runs Vite build + deploy).

**Manual:**

1. **Actions** → **Deploy GitHub Pages** → **Run workflow** → branch `develop` → **Run workflow**
2. Wait for jobs **Build static frontend** and **Deploy to GitHub Pages** to succeed.

---

## 3. What gets published

| Published | Not published |
|-----------|----------------|
| `index.html`, `404.html` (SPA fallback) | `README.md` |
| `assets/*` (Vite JS/CSS) | `docs/`, `docs/source/` |
| `.nojekyll` (disable Jekyll) | `*.pdf` |
| `CNAME` → `biu-gholdings.org` | `deploy/`, Laravel `app/`, `routes/` |

Build locally to inspect:

```bash
npm ci
npm run build:pages
node scripts/verify-pages-artifact.mjs dist-pages-publish
ls -la dist-pages-publish/
```

---

## 4. Cloudflare (recommended)

1. Add zone **biu-gholdings.org** to Cloudflare.
2. **DNS** records (proxied — orange cloud):

   | Type | Name | Content |
   |------|------|---------|
   | `CNAME` | `@` | `biu-gholdings.github.io` |
   | `CNAME` | `www` | `biu-gholdings.org` |

   If your org/user Pages host differs, use the hostname shown under **Settings → Pages** after the first deploy.

   Alternative apex: GitHub documented **A** records for Pages (use when CNAME flattening is unavailable).

3. **SSL/TLS** → **Full (strict)**.
4. **Caching** (optional, production-safe):
   - Cache rule: URL path **`/assets/*`** → cache everything, long TTL.
   - Cache rule: **`/`** and HTML paths → bypass cache or short TTL (so SPA updates propagate).
5. **Always Use HTTPS** — ON.

Cloudflare proxies GitHub Pages correctly when SSL mode is **Full (strict)** and the custom domain is verified in GitHub.

---

## 5. Post-deploy verification

```bash
curl -sI https://biu-gholdings.org | head -5
curl -s https://biu-gholdings.org | head -20
```

Expect:

- HTML with `<div id="app">` and `/assets/index-*.js` (not Jekyll `markdown-body`).
- `https://biu-gholdings.org/about` loads the corporate About page (via `404.html` SPA routing).
- `https://biu-gholdings.org/docs/` → **404**
- No public PDF URLs.

Full checklist: [POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md).

---

## 6. Troubleshooting

| Issue | Fix |
|-------|-----|
| README / docs still visible | Pages source must be **GitHub Actions**, not branch `/docs` or `main` root |
| Workflow missing `environment` | First deploy creates **github-pages** environment; approve if prompted |
| 404 on deep links | Ensure `404.html` exists in artifact (built by `scripts/build-pages.mjs`) |
| SSL errors via Cloudflare | Set SSL to **Full (strict)**; confirm domain verified in GitHub Pages settings |
| Old Jekyll site cached | Purge Cloudflare cache; confirm latest workflow run succeeded |

Status overview: [DEPLOYMENT_STATUS.md](../DEPLOYMENT_STATUS.md).
