# Biu-g Holdings LLC — Corporate Website

Institutional, static-first corporate site for **biu-gholdings.org**: bilingual (EN/PT), regulator-oriented, minimal.

## Overview

Official gateway to Biu-g Holdings LLC across the United States, Portugal, and Angola. The stack is intentionally simple for v1:

- **Laravel 12** (routing, Inertia responses)
- **Inertia.js** + **React**
- **Tailwind CSS** (utility-first)
- **Vite** (bundler)
- **Ziggy** (named routes on the frontend)

v1 is **static-first**: page content lives in React components. **No database**, **no authentication**, and **no third-party analytics/tracking scripts** in this phase.

## Documentation

| Document | Description |
|----------|-------------|
| [docs/site-architecture.md](docs/site-architecture.md) | Technical conventions, directory layout, route pairing |
| [docs/cto-checklist.md](docs/cto-checklist.md) | CTO execution checklist through launch |
| [docs/deployment-guide.md](docs/deployment-guide.md) | Production deployment steps |
| [docs/sitemap-diagram.md](docs/sitemap-diagram.md) | Route map and sitemap notes |
| [docs/content-governance.md](docs/content-governance.md) | Content rules, approvals, EN/PT parity |
| [docs/DEV-ONBOARDING.md](docs/DEV-ONBOARDING.md) | Developer setup and contribution standards |
| [docs/github-backlog.md](docs/github-backlog.md) | GitHub issues backlog and milestones (from internal spec) |
| [docs/figma-ui-kit.md](docs/figma-ui-kit.md) | Figma / UI consistency spec |

Internal PDF sources are stored under [docs/source/](docs/source/README.md).

## Requirements

- PHP **8.2+** (see `composer.json` for framework version)
- Composer
- Node.js **18+** and npm

## Local development

```bash
composer install
cp .env.example .env   # if .env does not exist
php artisan key:generate
npm install
php artisan serve
```

In another terminal:

```bash
npm run dev
```

## Production assets

```bash
npm run build
php artisan optimize
```

## Internal manual PDF (optional)

To regenerate a single internal manual PDF for governance review, export the following in order and merge:

1. `README.md`
2. `docs/site-architecture.md`
3. `docs/cto-checklist.md`
4. `docs/DEV-ONBOARDING.md`
5. `docs/deployment-guide.md`
6. `docs/sitemap-diagram.md`
7. `docs/content-governance.md`

Suggested filename: `Biu-g_Corporate_Web_Manual_v1.pdf`.

## License

Proprietary. © Biu-g Holdings LLC. All rights reserved.

**Contact:** support@biu-gholdings.org
