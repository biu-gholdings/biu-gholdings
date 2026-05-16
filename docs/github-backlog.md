# GitHub backlog and milestones

Derived from internal documentation. Use as a starting point for GitHub **Issues** and **Milestones** (titles and bodies can be copy-pasted).

---

## Issues (backlog)

| # | Title | Description |
|---|--------|-------------|
| 1 | Implement `MainLayout.jsx` | Global wrapper: header, nav, footer, language toggle, title injection. |
| 2 | Implement `LanguageToggle.jsx` | EN/PT switch using `PAGE_LOCALE_ROUTE_MAP` and Inertia page names. |
| 3 | EN/PT Home | `Home.jsx` + `HomePt.jsx` with content parity. |
| 4 | EN/PT About | `About.jsx` + `AboutPt.jsx`; institutional tone. |
| 5 | EN/PT Leadership | Bios + governance philosophy. |
| 6 | EN/PT Corporate structure | Multi-entity hierarchy and status labels. |
| 7 | EN/PT Subsidiaries | Cluster / subsidiary cards. |
| 8 | EN/PT Investor relations | Capital overview, disclaimers, IR contact. |
| 9 | EN/PT Contact | Strategic contact panel + frontend-only form shell. |
| 10 | Footer component | Optional extraction from layout; minimal © line. |
| 11 | EN/PT 404 | Friendly not-found with links home (optional enhancement). |
| 12 | Production build & deploy | `npm run build`, server deploy, Cloudflare SSL + caching. |
| 13 | Documentation sync | Ensure `/docs` matches implementation. |
| 14 | Governance review | Executive + Strategy + IR sign-off before public launch. |

---

## Milestone: v1.0 — Corporate launch

**Goal:** Public static corporate site.

**Target horizon:** ~7–14 days from kickoff (indicative).

**Includes:**

- Layout, bilingual toggle  
- Home, About, Leadership, Corporate structure, Subsidiaries, IR, Contact  
- Deployment + Cloudflare (recommended)  

---

## Milestone: v1.1 — Stakeholder upgrade

**Goal:** Deeper regulator- and investor-facing material.

**Examples:**

- Compliance center  
- Governance page  
- Document hub (PDFs)  
- Annual letters  
- Press kits  

---

## Milestone: v2.0 — Institutional portal

**Goal:** Evolve from brochure site to platform (auth, data, vaults).

**Examples:**

- Investor portal (login)  
- Regulator dashboards  
- Document vault  
- Tiered access  
- Academy / API docs integration  

*Requires architecture, security, and legal review beyond v1.*
