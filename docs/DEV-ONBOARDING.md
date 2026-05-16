# Developer onboarding

**Biu-g Holdings** corporate website (`biu-gholdings.org`)

**Version:** 1.0 (January 2025)

---

## Welcome

This project is:

- **Static-first** — v1 content lives in React pages  
- **No database** required for public brochure pages  
- **Bilingual** — every public page has EN + PT pair  
- **Regulator-oriented** — tone and governance rules in [content-governance.md](content-governance.md)  

---

## 1. Technical requirements

### Required

- PHP **8.2+**  
- Composer  
- Node.js **18+**  
- npm / pnpm / yarn  
- Git  
- Familiarity with Laravel, React, and Inertia  

### Recommended

- Docker (optional local environment)  
- VS Code + Tailwind IntelliSense  

---

## 2. Clone and install

```bash
git clone https://github.com/biu-gholdings/biu-gholdings.git
cd biu-gholdings
composer install
npm install
```

---

## 3. Run locally

Terminal 1:

```bash
php artisan serve
```

Terminal 2:

```bash
npm run dev
```

---

## 4. Repository layout

Key paths:

```
resources/js/
  Layouts/MainLayout.jsx
  Components/LanguageToggle.jsx
  Pages/*.jsx
docs/
routes/web.php
```

---

## 5. Page standards

For **each** public page:

1. English component: `Name.jsx`  
2. Portuguese component: `NamePt.jsx`  
3. Two routes in `web.php`: `name` and `name.pt` (naming convention)  
4. Two entries in `PAGE_LOCALE_ROUTE_MAP`  

---

## 6. Add a new page

1. Create `resources/js/Pages/NewPage.jsx` and `NewPagePt.jsx`  
2. Register routes:

```php
Route::get('/new-page', fn () => Inertia::render('NewPage'))->name('new.page');
Route::get('/nova-pagina', fn () => Inertia::render('NewPagePt'))->name('new.page.pt');
```

3. Extend `LanguageToggle.jsx`:

```js
NewPage: { en: 'new.page', pt: 'new.page.pt' },
NewPagePt: { en: 'new.page', pt: 'new.page.pt' },
```

4. Add nav links in `MainLayout.jsx` if the page is global navigation  

5. Test EN/PT toggle and deep links  

---

## 7. Coding rules

- Functional React components  
- **No** inline CSS for layout; use **Tailwind** utilities  
- Keep typography consistent with layout patterns  
- **No** tracking scripts in v1 unless explicitly approved  

---

## 8. Pull requests

Include:

- Purpose  
- Affected files (`En` / `Pt`)  
- Jurisdictions or entities touched  
- Compliance / tone impact (if any)  
- EN/PT verification checklist  

Reviewers: **CTO**; **IR** for sensitive copy  

---

## 9. Deployment

See [deployment-guide.md](deployment-guide.md).

---

## 10. Future contribution areas

- Media center  
- Governance hub  
- Regulator / investor portals  
- IR document library  

Each must follow the same EN/PT route and component pattern unless replaced by a documented exception.

---

## Contact

- **Architecture / engineering:** CTO (CubeShackles & Biu-g Holdings)  
- **Governance / compliance:** Executive Chairman — Biu-g Holdings LLC  
