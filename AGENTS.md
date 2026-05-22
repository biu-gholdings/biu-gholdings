# AGENTS.md

## Cursor Cloud specific instructions

### Overview

This is a bilingual (EN/PT) corporate website for **Biu-g Holdings LLC**, built with **Laravel 12 + Inertia.js + React 19 + Tailwind CSS v4**. Production hosting is static GitHub Pages; local dev uses the full Laravel stack.

### Required system dependencies

- **PHP >= 8.4** (the `composer.lock` pins Symfony 8.x packages requiring PHP 8.4+)
- **Composer** (PHP package manager)
- **Node.js 20+** with **npm** (lockfile is `package-lock.json`)

### Dev environment setup (after update script runs)

```bash
cp .env.example .env          # only if .env doesn't exist
php artisan key:generate       # only if APP_KEY is empty
touch database/database.sqlite # only if it doesn't exist
php artisan migrate --graceful
```

### Running the dev servers

Start both servers (two terminals or use `composer dev` which runs them concurrently):

```bash
php artisan serve --host=0.0.0.0 --port=8000   # Laravel backend
npm run dev                                      # Vite HMR frontend
```

The site is available at `http://localhost:8000`. Vite dev server runs on port 5173 for HMR.

### Lint and test

- **PHP lint:** `php vendor/bin/pint --test` (or `--fix` to auto-fix)
- **PHP tests:** `php artisan test` (PHPUnit)
- **Vite build check:** `npm run build`
- **Static pages build:** `npm run build:pages`

### Known caveats

- **Pre-existing Pint lint failure:** `bootstrap/app.php` has a pre-existing `fully_qualified_strict_types` / `ordered_imports` lint issue. Not introduced by agents.
- **Inertia test page-path case sensitivity:** The Inertia page finder defaults to `js/pages` (lowercase) but the project directory is `js/Pages` (uppercase). On case-sensitive Linux filesystems, the `BilingualCorporateSiteTest` page-existence assertions fail. This is a pre-existing issue.
- **CI billing block:** As of May 2026, the GitHub Actions CI is failing due to an account billing issue, not code failures.
- **EN/PT parity:** Per `CONTRIBUTING.md`, user-facing copy changes should be reflected in both English and Portuguese page pairs.
