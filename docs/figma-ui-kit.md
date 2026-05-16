# Figma UI kit specification

Institutional UI guidance for designers and frontend — **Biu-g Holdings** corporate site.

---

## 1. Color palette

### Primary text / chrome

- **Dark black:** `#111111`  
- **Slate gray:** `#374151`  
- **Soft gray:** `#6B7280`  

### Background

- **Paper white:** `#FFFFFF`  
- **Neutral 50:** `#F9FAFB`  

### Border

- **Hairline:** `#E5E7EB`  

Implementation note: Tailwind zinc scales map cleanly to these roles (`zinc-900` ≈ dark black, etc.).

---

## 2. Typography

### Family

- **Inter** — primary (modern, institutional)  

Load via privacy-friendly CDN in `app` layout, or self-host. Do not bundle user-tracking scripts with fonts.

### Scale (reference)

- H1: 32–40px  
- H2: 24–30px  
- H3: 18–20px  
- Body: 14–16px  
- Small: 12–13px  

### Weights

- Regular **400**  
- Medium **500**  
- Semibold **600**  

---

## 3. Grid and spacing

- **Max content width:** 1280px (`max-w-6xl` / `max-w-5xl` patterns)  
- **Section vertical spacing:** 48–64px (`py-12` baseline)  
- **Grid gap:** 16px  
- **Horizontal padding:** 16px mobile, 32px desktop (`px-4` / `md:px-*`)  

---

## 4. Components

### Page header block

- Eyebrow: uppercase, letter-spacing ~`0.2em`, muted gray  
- Title: semibold, dark  
- Lead paragraph: relaxed line height, gray body  

### Content card

- White background  
- 1px border (`#E5E7EB`)  
- Radius ~8px (`rounded-lg`)  
- Padding 16–20px  

### Navigation

- Brand / wordmark left  
- Primary links centered or inline  
- **Language toggle** right  

### Footer

- Minimal: © year, entity name, reserved line EN/PT  

---

## 5. Figma library structure

Create component sets for:

- Buttons (primary / secondary)  
- Cards (compact / feature)  
- Typography styles  
- Grid / spacing tokens  
- Top navigation + footer  

Export naming should match React section semantics where possible (e.g. `Card / Institutional`).

---

## 6. v1 constraints

- **No** third-party analytics or ad pixels in layout unless separately approved  
- **No** auth flows in v1 public kit  
- Motion: subtle only; prefer opacity and border hover  
