# Contributing

Thank you for your interest in Biu-g Holdings LLC’s public corporate repository.

## Scope

Contributions may include copy improvements, accessibility fixes, bilingual (EN/PT) parity, and non-sensitive website enhancements.

## Before you open a pull request

1. **No confidential content** — do not include internal manuals, cap tables, private strategy, credentials, or personal data.  
2. **No investment claims** — avoid promises of returns, yields, token prices, or solicitations.  
3. **No security-sensitive material** — do not commit secrets, `.env` files, keys, or private deployment details.  
4. **Maintain EN/PT parity** — user-facing changes should be reflected in both English and Portuguese page pairs where applicable.  
5. **Institutional tone** — clear, professional language suitable for regulators, partners, and the public.  

## Process

- Open an issue for substantive changes before large pull requests.  
- Pull requests are reviewed before merge.  
- CI runs automated tests and production build checks.  

## Local development

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
php artisan serve
# separate terminal: npm run dev
```

Static site preview: `npm run dev:pages`

## Code of conduct

Participants are expected to follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

## Questions

**support@biu-gholdings.org**
