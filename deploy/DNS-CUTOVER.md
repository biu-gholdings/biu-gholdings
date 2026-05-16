# DNS cutover — legacy Pages → static corporate frontend

## Target state

- **GitHub Pages** serves branch **`gh-pages`** only (automated via [deploy-pages.yml](../.github/workflows/deploy-pages.yml)).
- **`biu-gholdings.org`** shows the institutional React frontend — not README/Jekyll/docs.
- Repository stays **private**; internals remain on `develop`/`main`.

## 1. Enable GitHub Pages on `gh-pages`

1. Push to `develop` (triggers deploy workflow) or run **Deploy GitHub Pages** manually.
2. **Settings → Pages** → Source: branch **`gh-pages`**, folder **`/ (root)`**.
3. Custom domain: **biu-gholdings.org** — wait for DNS check / certificate.

## 2. Cloudflare (recommended)

| Setting | Value |
|---------|--------|
| `@` | `CNAME` → `<username>.github.io` **or** GitHub Pages A records |
| `www` | `CNAME` → `biu-gholdings.org` |
| Proxy | Enabled (orange cloud) |
| SSL | Full (strict) |

GitHub documents Pages IP ranges; Cloudflare proxy is compatible when SSL mode is correct.

**Remove** stale records pointing only at old Jekyll site if they differ.

## 3. Verify propagation

```bash
curl -sI https://biu-gholdings.org | grep -i server
curl -s https://biu-gholdings.org | head -20
```

Expected: HTML with Vite bundle references (`/assets/…`), not Jekyll `markdown-body` / README title.

## 4. Security checks

- `https://biu-gholdings.org/docs/` → 404
- `https://biu-gholdings.org/README.md` → 404
- No PDFs from `docs/source/` publicly reachable

## 5. Optional Forge path

If you later move to PHP/Laravel hosting, repoint DNS to the VPS origin and disable Pages custom domain. See [README.md](README.md) and [DEPLOYMENT_STATUS.md](../DEPLOYMENT_STATUS.md).
