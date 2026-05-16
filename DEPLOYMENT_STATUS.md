# Deployment status

**Last updated:** 2026-05-16  
**Branch:** `develop`  
**Public domain:** [biu-gholdings.org](https://biu-gholdings.org)

---

## Current state

| Item | Status |
|------|--------|
| Repository visibility | **Private** (required) |
| Application | Laravel 12 + Inertia + React (PHP runtime required) |
| GitHub Pages | **Disabled in repo** — root `CNAME` removed; CI fails if `CNAME` returns |
| Live `biu-gholdings.org` | Still served by **legacy GitHub Pages** (Jekyll/README) until DNS and hosting are cut over |
| Internal docs (`README.md`, `docs/`, `docs/source/*.pdf`) | **Must not** be published to a public web root |

GitHub Pages cannot execute PHP or Laravel. It only serves static files from a branch or folder, which exposed the repository README and documentation tree. Production must run on a **VPS or Laravel Forge** host with Nginx/Apache pointing at `public/`.

---

## Immediate actions (repository owner)

1. **Turn off GitHub Pages**  
   GitHub → **Settings** → **Pages** → set **Build and deployment** to **None** (or disable Pages). Remove the custom domain `biu-gholdings.org` from Pages if it is still attached.

2. **Point DNS to production origin** (Forge/VPS), not GitHub Pages  
   - Remove GitHub Pages `A` / `CNAME` records for `@` and `www`.  
   - Add origin records to your server IP (or Forge/Cloudflare proxy).  
   See [deploy/DNS-CUTOVER.md](deploy/DNS-CUTOVER.md).

3. **Deploy the Laravel app** using [deploy/forge-deploy.sh](deploy/forge-deploy.sh) and [deploy/nginx-biu-gholdings.org.conf](deploy/nginx-biu-gholdings.org.conf). Full steps: [docs/deployment-guide.md](docs/deployment-guide.md).

4. **Verify** after cutover: [deploy/POST-DEPLOY-CHECKLIST.md](deploy/POST-DEPLOY-CHECKLIST.md).

---

## Safe public landing path

Public traffic must hit **only** the compiled Laravel application:

- **Web document root:** `{release}/public` (never repo root, `docs/`, or `docs/source/`).
- **Build:** `composer install --no-dev`, `npm ci && npm run build`, `php artisan optimize`.
- **Automation:** `.github/workflows/ci.yml` (verify) and optional `.github/workflows/deploy-production.yml` (SSH to Forge/VPS).

Internal PDFs and markdown specs remain in the private repository under `docs/` and are not part of the public artifact.

---

## Next production target

**Primary:** Laravel Forge (or equivalent VPS) + Nginx + PHP 8.2+ + Cloudflare (DNS/WAF/SSL).

**Success criteria for biu-gholdings.org:**

- Home and all 14 bilingual routes return Inertia/React pages (not Jekyll/README).
- No public URL serves `README.md`, `docs/`, or PDFs from `docs/source/`.
- `APP_URL=https://biu-gholdings.org`, HTTPS enforced, no third-party tracking scripts (v1 policy).

---

## CI

- **ci.yml** — tests, production build, blocks root `CNAME`.
- **deploy-production.yml** — manual deploy to configured SSH host (secrets required).
