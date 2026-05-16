# DNS cutover — GitHub Pages → Laravel origin

## Problem

While `biu-gholdings.org` points at **GitHub Pages**, visitors see the Jekyll/README site and any public Pages source — not the Laravel/Inertia application.

## Steps

### 1. Disable GitHub Pages (required)

1. Open **github.com/biu-gholdings/biu-gholdings** → **Settings** → **Pages**.
2. Under **Build and deployment**, set source to **None** / disable Pages.
3. Remove custom domain **biu-gholdings.org** from Pages if listed.
4. Confirm the repository stays **Private**.

### 2. Provision production server

- Laravel Forge site (or VPS) with PHP 8.2+, Nginx, document root **`public/`**.
- Deploy `develop` (or `main`) using [forge-deploy.sh](forge-deploy.sh).
- Set `APP_URL=https://biu-gholdings.org` in server `.env`.

### 3. Update DNS (Cloudflare or registrar)

**Remove** GitHub Pages records, for example:

- `A` records to `185.199.108.153` … `185.199.111.153`
- `CNAME` `www` → `biu-gholdings.github.io`

**Add** origin records to your server:

| Name | Type | Value |
|------|------|--------|
| `@` | `A` | Your server public IPv4 |
| `www` | `CNAME` | `biu-gholdings.org` (or separate `A`) |

If using **Cloudflare**, proxy (orange cloud) only after origin TLS is valid (**Full (strict)**).

### 4. Propagation and verification

- Wait for DNS TTL (minutes to hours).
- `curl -sI https://biu-gholdings.org` should **not** return `server: GitHub.com`.
- Response should be Laravel/Inertia HTML (Vite assets under `/build/`).
- Run [POST-DEPLOY-CHECKLIST.md](POST-DEPLOY-CHECKLIST.md).
