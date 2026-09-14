# Vintage Homes

A Next.js (App Router) rebuild of the Vintage Homes marketing site, ready to deploy on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```

**Option B — Git**
1. Push this folder to a GitHub/GitLab/Bitbucket repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Click Deploy.

## Notes / things to customize

- **Stats in the "Philosophy" section** (`components/Philosophy.js`) use placeholder figures (142 properties, $186M deployed, 12 years). The original site's figures ($4.2B across 37 properties) didn't add up for a boutique restoration fund, so replace these with your real numbers.
- **Property photos** currently come from `picsum.photos` as placeholders — swap in real project photography in `components/Portfolio.js`, `components/Hero.js`, and `components/Architecture.js` (the before/after images).
- **Contact form** (`components/ContactForm.js`) is currently front-end only. Wire the `handleSubmit` function up to a form backend (Formspree, Resend, a serverless API route, etc.) before going live.
- **Contact details** (email/phone/address) in `components/Contact.js` are placeholders.
- **Investor claims**: keep any language about returns, fund performance, or capital figures accurate and compliant with applicable securities regulations in your jurisdiction before publishing.
