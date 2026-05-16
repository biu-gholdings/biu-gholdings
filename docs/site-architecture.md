# Biu-g Holdings — Site architecture

Technical, architectural, and structural conventions for the corporate website (`https://biu-gholdings.org`).

**Version:** 1.0 (January 2025; stack versions updated to match repo)

---

## 1. Purpose

This document ensures:

- Consistency across pages  
- Clear bilingual (EN/PT) conventions  
- Stable onboarding for CTO and contributors  

---

## 2. Technology stack

### Backend

- **Laravel 12**
- **PHP 8.2+**
- **Inertia.js** (Laravel adapter)

### Frontend

- **React** (with Inertia React adapter)
- **Tailwind CSS**
- **Vite**

### Recommended infrastructure

- Nginx or Apache  
- Cloudflare (CDN + security)  
- GitHub Actions for CI/CD (optional)  
- Docker-compatible deployments  

---

## 3. Architectural philosophy

The design is:

- **Static-first** — content in React pages for v1; no DB-backed public pages  
- **Regulator-friendly** — institutional tone, clear entity status  
- **Investor-ready** — IR and disclaimers without solicitation  
- **Fully bilingual (EN/PT)** — symmetric routes and components  
- **Scalable** — future dashboards, libraries, and portals can extend the same patterns  

The architecture must remain **predictable**, **auditable**, **simple to maintain**, and **traceable across jurisdictions**.

---

## 4. Bilingual page model

Each public page has an English and Portuguese implementation.

### File pattern

- `PageName.jsx` — English  
- `PageNamePt.jsx` — Portuguese  

### Route pattern

- English: named route (e.g. `about`)  
- Portuguese: named route with `.pt` suffix (e.g. `about.pt`)  
- Paths may differ (e.g. `/about` and `/sobre`)  

### Language toggle

Every page pair is registered in `resources/js/Components/LanguageToggle.jsx` (`PAGE_LOCALE_ROUTE_MAP`).

Example:

```js
About: { en: 'about', pt: 'about.pt' },
AboutPt: { en: 'about', pt: 'about.pt' },
```

---

## 5. Directory structure (high level)

```
resources/js/
  Layouts/MainLayout.jsx
  Components/LanguageToggle.jsx
  Pages/
    Home.jsx / HomePt.jsx
    About.jsx / AboutPt.jsx
    …
docs/
  site-architecture.md
  cto-checklist.md
  deployment-guide.md
  sitemap-diagram.md
  content-governance.md
  DEV-ONBOARDING.md
  github-backlog.md
  figma-ui-kit.md
routes/web.php
```

---

## 6. Layout system

### `MainLayout.jsx`

- Header, navigation, footer  
- Language toggle  
- Title via Inertia `<Head />`  

### Components

- `LanguageToggle.jsx` — EN/PT switching via Ziggy + Inertia page name  

---

## 7. Page inventory (phase 1)

### Corporate

- Home / HomePt  
- About / AboutPt  
- Leadership / LeadershipPt  
- CorporateStructure / CorporateStructurePt  
- Subsidiaries / SubsidiariesPt  

### Stakeholder

- InvestorRelations / InvestorRelationsPt  
- Contact / ContactPt  

---

## 8. Future expansion (phase 2+)

- Media center  
- Document library (PDFs, letters, decks)  
- Regulator / investor portals (may introduce auth + DB)  
- Careers  
- Governance hub  

---

## 9. Compliance (site content)

Public content must:

- Avoid solicitation of offers or securities  
- Avoid misrepresentation of entities  
- State jurisdiction and status where relevant  
- Maintain institutional tone  
- Align with norms in USA, EU, and Angola as applicable  

---

## 10. Governance

- Material changes should be reviewed by **Executive Chairman** and **CTO**  
- Public-facing copy: **Strategy**, **IR**, **Corporate** as appropriate  
- All new pages must keep **EN/PT pairing** and update the language map  

---

## Canonical route table

| English path | Portuguese path | Components |
|-------------|-----------------|------------|
| `/` | `/pt` | Home / HomePt |
| `/about` | `/sobre` | About / AboutPt |
| `/leadership` | `/lideranca` | Leadership / LeadershipPt |
| `/corporate-structure` | `/estrutura-corporativa` | CorporateStructure / CorporateStructurePt |
| `/subsidiaries` | `/subsidiarias` | Subsidiaries / SubsidiariesPt |
| `/investor-relations` | `/relacoes-com-investidores` | InvestorRelations / InvestorRelationsPt |
| `/contact` | `/contacto` | Contact / ContactPt |
