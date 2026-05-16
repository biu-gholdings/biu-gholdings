# GitHub Pages setup — static institutional frontend

Deploys **only** the Vite-built corporate site to the dedicated **`gh-pages`** branch.

**Permanent policy:** [.github/PAGES_POLICY.md](../.github/PAGES_POLICY.md) — never publish `main`/`develop` or `/docs` as Pages source.

---

## 1. Enable Pages from `gh-pages` only

1. Open **github.com/biu-gholdings/biu-gholdings**
2. **Settings → Pages**
3. **Build and deployment → Source:** **Deploy from a branch**
4. **Branch:** `gh-pages` · **Folder:** `/ (root)`
5. **Custom domain:** `biu-gholdings.org`
6. Wait for DNS check → enable **Enforce HTTPS**
7. Repository stays **Private**

> Do **not** use “Deploy from `main`” or `/docs` — that exposes repository markdown.

---

## 2. Deploy (automated)

Push to `develop` or `main` runs [.github/workflows/deploy-pages.yml](../.github/workflows/deploy-pages.yml):

```
npm run build:pages  →  dist-pages-publish/  →  gh-pages branch
```

Or: **Actions → Deploy static site to gh-pages → Run workflow**

---

## 3. What is on `gh-pages`

| Included | Excluded |
|----------|----------|
| `assets/*` (JS/CSS) | `README.md` |
| `index.html` + per-route `*/index.html` (14 pages) | `docs/`, `docs/source/*.pdf` |
| `404.html`, `.nojekyll`, `CNAME` | `deploy/`, Laravel source |

---

## 4. Cloudflare

| Type | Name | Target | Proxy |
|------|------|--------|-------|
| CNAME | `@` | `biu-gholdings.github.io` | ON |
| CNAME | `www` | `biu-gholdings.org` | ON |

**SSL/TLS:** Full (strict)  
**Caching:** aggressive on `/assets/*`; bypass or short TTL on HTML paths

---

## 5. Verify

```bash
curl -sI https://biu-gholdings.org
curl -s https://biu-gholdings.org/about | head -5
```

- Corporate React UI (not Jekyll/README)
- [https://biu-gholdings.org/docs/](https://biu-gholdings.org/docs/) → 404

[POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md) · [DEPLOYMENT_STATUS.md](../DEPLOYMENT_STATUS.md)
