# GitHub Pages policy (permanent)

## Public branch

| Branch | Purpose |
|--------|---------|
| **`gh-pages`** | **Only** compiled static institutional frontend |
| **`develop` / `main`** | Private source — **never** used as Pages publish root |

## Never published

- `README.md`
- `docs/` and `docs/source/*.pdf`
- `deploy/`, `scripts/`, Laravel `app/`, `routes/`, `vendor/`
- Any `.md`, `.php`, `.pdf`, `.env` from the source tree

## How publish works

1. `npm run build:pages` → `dist-pages-publish/`
2. [scripts/verify-pages-artifact.mjs](../scripts/verify-pages-artifact.mjs) whitelist check
3. [.github/workflows/deploy-pages.yml](workflows/deploy-pages.yml) → **orphan `gh-pages`** (`force_orphan: true`)

## GitHub Settings (required)

**Settings → Pages → Source:** Deploy from branch **`gh-pages`** / **`/ (root)`**

Do **not** set source to `main`, `develop`, or `/docs`.

## Custom domain

`CNAME` file is generated in the build artifact only: **`biu-gholdings.org`**

Do **not** commit `CNAME` on `develop` or `main`.
