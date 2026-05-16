# Production deployment

**Primary public path:** GitHub Pages branch **`gh-pages`** (static corporate frontend) — see [DEPLOYMENT_STATUS.md](../DEPLOYMENT_STATUS.md) and `npm run build:pages`.

**Optional:** Forge / VPS for full Laravel/PHP runtime (below).

## Principles

1. **Private repo** — source and internal docs stay on GitHub; never copy `docs/` or `docs/source/` to the server web root.
2. **Document root** — Nginx/Apache `root` must be `{app}/public`, not the repository root.
3. **No GitHub Pages** — Laravel requires PHP; Pages cannot run this application.
4. **Build on deploy** — run `npm run build` so `public/build/` exists (or build in CI and rsync artifacts).

## Files

| File | Purpose |
|------|---------|
| [forge-deploy.sh](forge-deploy.sh) | Forge/VPS deploy script (composer, npm build, artisan optimize) |
| [nginx-biu-gholdings.org.conf](nginx-biu-gholdings.org.conf) | Nginx site block — `public/` as root |
| [DNS-CUTOVER.md](DNS-CUTOVER.md) | Move domain off GitHub Pages to origin |
| [POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md) | Smoke tests after go-live |
| [env.production.snippet](env.production.snippet) | Example production `.env` keys |

## Forge quick start

1. Create site `biu-gholdings.org`, PHP 8.2+, web directory **`/public`**.
2. Connect the private GitHub repo; deploy branch `develop` or `main`.
3. Set deploy script to run `bash deploy/forge-deploy.sh` from the release path (or paste script body into Forge).
4. Set `.env` from [env.production.snippet](env.production.snippet).
5. Follow [DNS-CUTOVER.md](DNS-CUTOVER.md) and disable GitHub Pages in repo settings.

## GitHub Actions (optional)

Configure repository secrets for [../.github/workflows/deploy-production.yml](../.github/workflows/deploy-production.yml):

- `DEPLOY_HOST` — server hostname or IP  
- `DEPLOY_USER` — SSH user (e.g. `forge`)  
- `DEPLOY_SSH_KEY` — private key  
- `DEPLOY_PATH` — site root on server (e.g. `/home/forge/biu-gholdings.org`)

Trigger **Deploy production** manually from the Actions tab after CI passes.
