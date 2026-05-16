# First deployment & switching Pages to gh-pages

## How the pipeline works

```
develop (private)  →  GitHub Actions  →  gh-pages (public static site only)
                         npm run build:pages
                         dist-pages-publish/
                           • assets/          (Vite JS/CSS)
                           • index.html     + 14 EN/PT routes
                           • .nojekyll
                           • CNAME          biu-gholdings.org
                           • 404.html
```

Workflow: [.github/workflows/deploy-pages.yml](../.github/workflows/deploy-pages.yml)

---

## Step 1 — Trigger the first deployment

Choose **one**:

### A. Push to `develop` (recommended)

```bash
git push origin develop
```

### B. Manual run (no code push)

1. GitHub → **Actions**
2. **Production GitHub Pages (gh-pages)**
3. **Run workflow** → branch **`develop`** → **Run workflow**

Wait until both jobs succeed:

- **Build and publish to gh-pages**
- **Post-deploy verification**

The workflow **creates** the `gh-pages` branch automatically (`force_orphan: true`).

---

## Step 2 — Switch GitHub Pages from `develop` to `gh-pages`

If Pages currently uses **`develop`** (or **`main`**) as the source, the site shows **README/docs** — not the corporate frontend.

1. Open **https://github.com/biu-gholdings/biu-gholdings/settings/pages**
2. Under **Build and deployment**:
   - **Source:** **Deploy from a branch**
   - **Branch:** select **`gh-pages`** (not `develop` or `main`)
   - **Folder:** **`/ (root)`**
3. Click **Save**
4. Under **Custom domain**, set **`biu-gholdings.org`** if not already set
5. Wait for DNS check → enable **Enforce HTTPS**
6. Keep the repository **Private** (source stays private; only `gh-pages` content is served)

> **Wrong:** Branch = `develop` or `main`, or folder = `/docs`  
> **Correct:** Branch = **`gh-pages`**, folder = **`/ (root)`**

---

## Step 3 — Verify

```bash
curl -sI https://biu-gholdings.org | head -3
curl -s https://biu-gholdings.org | grep -E 'id="app"|/assets/'
```

- Home loads the React institutional UI
- [https://biu-gholdings.org/about](https://biu-gholdings.org/about) works
- [https://biu-gholdings.org/docs/](https://biu-gholdings.org/docs/) returns **404**

---

## Ongoing deploys

Every push to `develop` or `main` rebuilds and republishes `gh-pages` automatically.

Local test before push:

```bash
npm run build:pages
npm run verify:pages
```

---

## Private repository note

The **source** repo remains private on `develop`/`main`. Only the **compiled static frontend** on `gh-pages` is served at **biu-gholdings.org**. Internal PDFs and markdown in `docs/` are never part of the publish artifact.
