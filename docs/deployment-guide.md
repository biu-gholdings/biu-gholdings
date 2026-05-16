# Deployment guide

Biu-g Holdings corporate website — production deployment.

**Status and cutover:** [DEPLOYMENT_STATUS.md](../DEPLOYMENT_STATUS.md) · **Forge/VPS scripts:** [deploy/](../deploy/README.md)

GitHub Pages cannot run Laravel. Disable Pages in repository settings, remove any root `CNAME`, and point **biu-gholdings.org** DNS to your PHP origin ([deploy/DNS-CUTOVER.md](../deploy/DNS-CUTOVER.md)).

---

## 1. Recommended infrastructure

### Preferred (secure + global)

- **Cloudflare** — DNS, CDN, firewall  
- **Laravel Forge** or **Docker**  
- **Ubuntu 22.04 LTS** (or similar)  
- **Nginx**  
- **PHP 8.2+**  
- **Node 18+** (build-time only if assets are built in CI)  

### Alternatives

- AWS (EC2 + optional CloudFront)  
- DigitalOcean Droplet  

---

## 2. Deployment steps

### 1) Clone repository

```bash
git clone https://github.com/biu-gholdings/biu-gholdings.git
cd biu-gholdings
```

Or use the automated hook: `bash deploy/forge-deploy.sh` (from app root).

### 2) Backend

```bash
composer install --no-dev --optimize-autoloader
cp .env.example .env
php artisan key:generate
```

Use [deploy/env.production.snippet](../deploy/env.production.snippet) for production values. Web server document root must be **`public/`** only — never `docs/` or the repository root.

Configure `.env` for `APP_URL`, `APP_ENV=production`, etc. v1 does not require database credentials for public pages if you strip DB usage; the stock Laravel app may still define `DB_*` — use SQLite or leave unused.

### 3) Frontend build

```bash
npm ci
npm run build
```

### 4) Optimize Laravel

```bash
php artisan optimize
php artisan route:cache
php artisan config:cache
```

### 5) Web server (Nginx sketch)

- Document root: `{app}/public`  
- Front controller: `index.php`  

Example pattern:

```nginx
root /var/www/biu-gholdings/public;
index index.php;

location / {
    try_files $uri $uri/ /index.php?$query_string;
}

location ~ \.php$ {
    include fastcgi_params;
    fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
    fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
}
```

Adjust socket/version to your server.

---

## 3. Cloudflare

1. Add the domain and proxy records (orange cloud).  
2. SSL mode: **Full (strict)** with a valid origin certificate.  
3. Enable sensible WAF / bot rules.  
4. Caching: standard; cache static assets aggressively.  
5. Page rules: always HTTPS; consider cache rules for `/build/*`.  

---

## 4. Post-deployment checks

- [ ] EN/PT toggle works on all pages  
- [ ] No critical browser console errors  
- [ ] All listed routes return 200  
- [ ] Page titles and metadata appropriate  
- [ ] No third-party tracking scripts (v1 policy)  

---

## 5. Zero-downtime notes

- **Forge:** atomic releases via symlinked `current`  
- **Docker:** rolling updates with health checks  

Document your chosen strategy in runbooks.
