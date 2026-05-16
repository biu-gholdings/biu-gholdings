# Content governance

Rules for Biu-g Holdings corporate web properties: regulators, institutional partners, investors, sovereign entities, and jurisdictional requirements.

---

## 1. Institutional tone

- Formal, disciplined language  
- No hype; no promotional claims that overstate delivery  
- Clear definitions and jurisdiction labels  
- High-trust voice suitable for regulators and strategic partners  

---

## 2. Legal / compliance (public site)

### Mandatory guardrails

- No solicitation of securities  
- No personalized financial advice  
- No unsubstantiated forward-looking revenue claims  
- No misrepresentation of entity **status** or **jurisdiction**  
- No promises of yield or returns  

When referencing a subsidiary or initiative, prefer explicit labels where relevant:

```text
Status: Active | In formation | Planned
Jurisdiction: USA | Portugal | Angola
```

---

## 3. Approval flow

Content updates should be approved by:

1. **Executive Chairman** — strategic coherence  
2. **CTO** — technical correctness and implementation  
3. **IR / Corporate** — legal and regulatory alignment  

---

## 4. EN/PT parity

Every substantive update must:

- Update **both** EN and PT components  
- Preserve structure and meaning  
- Update `PAGE_LOCALE_ROUTE_MAP` when adding routes  

---

## 5. Version control

- Changes via PR with review  
- PR description should include: purpose, affected jurisdictions, compliance impact, validation steps  

---

## 6. High-dependency pages

Changes require explicit approval workflow:

- Corporate structure  
- Leadership  
- Investor relations  
- Subsidiaries  
- Trust / fiduciary descriptions  
- Regulatory alignment statements  

---

## 7. Forbidden content (public v1)

- Token prices or trading calls  
- Guaranteed returns or yield promises  
- Fundraising solicitations on the corporate brochure site  
- Technical claims not yet accurate  

This reduces risk across US, EU, and Angolan contexts.

---

## 8. Technical v1 constraints

- **No** third-party analytics or advertising pixels unless separately approved  
- **No** authenticated areas on the public brochure unless a future phase explicitly adds them  
