#!/usr/bin/env bash
# Biu-g Holdings — Forge/VPS deploy hook
# Run from the application root (Forge: set as deploy script).

set -euo pipefail

cd "$(dirname "$0")/.." || exit 1
APP_ROOT="$(pwd)"

echo "==> Deploying from ${APP_ROOT}"

if [[ -f CNAME ]]; then
    echo "ERROR: Root CNAME must not exist (re-enables GitHub Pages custom domain)."
    exit 1
fi

php -v
composer install --no-dev --prefer-dist --optimize-autoloader --no-interaction

if command -v npm >/dev/null 2>&1; then
    npm ci --no-audit --no-fund
    npm run build
else
    echo "WARN: npm not found; ensure public/build/ was built in CI."
fi

php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize

php artisan storage:link 2>/dev/null || true

echo "==> Deploy complete. Web root must remain: ${APP_ROOT}/public"
