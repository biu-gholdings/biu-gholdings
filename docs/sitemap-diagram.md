# Sitemap diagram

Route structure for **phase 1** — suitable for planning, documentation, and Figma.

**Version:** v1 (January 2025)

---

## 1. High level

```
┌─────────────────────┐
│   Home (EN)  /      │
└──────────┬──────────┘
           │
┌──────────┴──────────┐
│   Home (PT)  /pt    │
└─────────────────────┘
```

---

## 2. Primary page pairs

| EN | PT |
|----|-----|
| `/about` | `/sobre` |
| `/leadership` | `/lideranca` |
| `/corporate-structure` | `/estrutura-corporativa` |
| `/subsidiaries` | `/subsidiarias` |
| `/investor-relations` | `/relacoes-com-investidores` |
| `/contact` | `/contacto` |

---

## 3. Tree view

```
ROOT
├── Home
│   ├── /
│   └── /pt
├── About
│   ├── /about
│   └── /sobre
├── Leadership
│   ├── /leadership
│   └── /lideranca
├── Corporate structure
│   ├── /corporate-structure
│   └── /estrutura-corporativa
├── Subsidiaries
│   ├── /subsidiaries
│   └── /subsidiarias
├── Investor relations
│   ├── /investor-relations
│   └── /relacoes-com-investidores
└── Contact
    ├── /contact
    └── /contacto
```

---

## 4. Figma import notes

- Grid suggestion: **3 × 4** frames for page clusters  
- One frame per URL; link EN ↔ PT pairs  
- Colors (see [figma-ui-kit.md](figma-ui-kit.md)): dark `#111111`, soft gray `#6B7280`, borders `#E5E7EB`  

---

## 5. Versioning

- Sitemap **v1** — January 2025  
