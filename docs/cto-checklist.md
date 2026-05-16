# CTO execution checklist

Biu-g Holdings corporate website — steps for a clean, compliant build.

---

## 1. Environment setup

### Dependencies

```bash
composer install
npm install
```

### Development servers

```bash
php artisan serve
npm run dev
```

---

## 2. Base layout

- [ ] `MainLayout.jsx` — header, nav, footer, institutional spacing  
- [ ] `LanguageToggle.jsx` — `PAGE_LOCALE_ROUTE_MAP` complete for all pages  
- [ ] Titles via Inertia `Head` / `title` prop  

---

## 3. Routes

For every page:

- [ ] English route and named route  
- [ ] Portuguese route and `*.pt` named route  
- [ ] `routes/web.php` updated  

---

## 4. Bilingual page pairs

- [ ] Home / HomePt  
- [ ] About / AboutPt  
- [ ] Leadership / LeadershipPt  
- [ ] Corporate Structure / PT  
- [ ] Subsidiaries / PT  
- [ ] Investor Relations / PT  
- [ ] Contact / PT  

---

## 5. Language toggle

For each new pair:

- [ ] Add entries to `PAGE_LOCALE_ROUTE_MAP`  
- [ ] Test EN → PT and PT → EN  
- [ ] Test direct URLs  

---

## 6. Styling

- [ ] Tailwind utilities (no inline CSS for layout)  
- [ ] Consistent section padding and typography  
- [ ] Cards: bordered, white surface, institutional gray text  

---

## 7. Pre-launch checks

- [ ] `npm run build` succeeds  
- [ ] Smoke-test all routes (200)  
- [ ] Language toggle on every page  
- [ ] **No** analytics/tracking snippets in layout (v1)  
- [ ] **No** auth or DB dependency for public site (v1)  

---

## 8. Production build

```bash
npm run build
php artisan optimize
php artisan route:cache
php artisan config:cache
```

---

## 9. Deployment

- [ ] Deploy (Forge / Docker / VPS)  
- [ ] Correct filesystem permissions  
- [ ] Cloudflare (or equivalent): DNS, SSL, caching  
- [ ] `www` → apex redirect if required  

---

## 10. Maintenance model

- [ ] EN/PT parity for every content change  
- [ ] Strategy / IR sign-off for sensitive pages  
- [ ] PRs include purpose, jurisdictions, compliance note  

See [content-governance.md](content-governance.md).
