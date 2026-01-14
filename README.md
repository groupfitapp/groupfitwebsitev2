Yes — you can upload the notes to your GitHub repo (best practice). Put them in a file like `DEPLOYMENT.md` or `README.md` so you (or any developer) can follow the same process later.

Here are clean notes you can copy-paste.

---

## Deployment Notes (Hostinger + Cloudflare + Vite)

### What’s live

* **Hosting:** Hostinger (Premium Web Hosting)
* **DNS/CDN:** Cloudflare
* **Site type:** Vite (build output = `dist`)
* **Live folder on Hostinger:** `/public_html`
* **WordPress backup:** `/public_html_WP_BACKUP` (do not delete)

---

## How to Update the Website (after changes in GitHub)

### A) Build the site on your computer

1. Download latest code from GitHub (or `git pull`)
2. Open **Command Prompt (cmd)** in the project folder (where `package.json` is)
3. Run:

```bat
npm install
npm run build
```

✅ This creates/updates the **dist** folder.

---

### B) Upload to Hostinger

1. Hostinger → File Manager → open `public_html`
2. Upload the **contents of `dist`** into `public_html`:

   * Upload `dist/index.html`
   * Upload `dist/assets/` folder (replace existing)

**Important:** Upload what’s *inside* `dist`, not the whole repo.

---

### C) Ensure SPA routing works (one-time check)

File: `public_html/.htaccess` must exist and contain:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

(If it’s already there, leave it.)

---

### D) Purge Cloudflare cache

Cloudflare → your domain → **Caching → Purge Everything**

---

### E) Quick test

Open incognito and test:

* `/`
* `/cities/toronto` (refresh)
* `/activities/boxing` (refresh)

If refresh works, deployment is good.

---

## If the website shows old content

* Purge Cloudflare cache again.
* Hard refresh: **Ctrl + F5**
* Wait a few minutes (Cloudflare sometimes lags slightly).

---

## Restore Old WordPress Site (if needed)

1. In Hostinger File Manager:

   * Rename current `public_html` → `public_html_newsite_backup`
   * Rename `public_html_WP_BACKUP` → `public_html`
2. Purge Cloudflare cache

---

## Recommended repo file name

Create one of these in the GitHub repo root:

* `DEPLOYMENT.md` (best)
* or add to `README.md`

---

### Yes, you can upload these to GitHub

Do this:

1. In GitHub repo → **Add file → Create new file**
2. Name it: `DEPLOYMENT.md`
3. Paste the notes above
4. Commit

If you want, tell me whether you use GitHub on the web only or GitHub Desktop, and I’ll give you the quickest way for your setup.
