# Navya Syal — Cybersecurity Portfolio

A "desktop with folders" personal portfolio: a playful home screen where each life/work category is a folder you click into, built with React, Vite, Tailwind CSS, and Framer Motion. Every project, certification, and detail is sourced directly from Navya's resume and GitHub repositories — nothing invented.

## Concept

- **`/` — Desktop.** A warm, paper-textured landing page: a big serif wordmark, a `whoami.sh` terminal identity card, a `recon_scan.log` widget that looks up the visitor's own IP/browser/timezone client-side (just for fun — nothing is stored), and a set of folder icons.
- **`/folder/:id` — Folder pages.** Clicking a folder navigates to a dedicated page with a large serif heading, an italic pull-quote, quick contact chips, a "Back to Desktop" link, and the real content for that category (About, Skills, Projects, Certifications, Experience & Education, Contact).

## Tech stack

- **React 18 + Vite** — fast dev server, optimized production build
- **React Router** — Desktop ⇄ folder-page navigation
- **Tailwind CSS** — warm paper/cream design tokens (see `tailwind.config.js`)
- **Framer Motion** — page transitions, hover states, reveal animations
- **React Icons** — `react-icons/fi` icon set throughout
- **EmailJS** (`@emailjs/browser`) — working contact form, no backend required

## Project structure

```
portfolio/
├── public/
│   ├── certificates/          # real certificate PDFs
│   ├── images/navya.jpg       # profile photo
│   ├── resume.pdf
│   ├── favicon.svg
│   ├── robots.txt / sitemap.xml / site.webmanifest
├── src/
│   ├── pages/
│   │   ├── Desktop.jsx        # home page — wordmark, terminal cards, folders
│   │   └── FolderPage.jsx     # generic detail-page template
│   ├── components/
│   │   ├── common/
│   │   │   ├── SectionHeading.jsx   # terminal-command style section headers
│   │   │   └── FolderIcon.jsx       # original folder SVG icon
│   │   ├── About.jsx / Skills.jsx / Projects.jsx / Certifications.jsx
│   │   ├── Experience.jsx / Education.jsx / Contact.jsx
│   │   ├── DesktopFolder.jsx   # folder tile used on the Desktop page
│   │   ├── WhoAmI.jsx          # terminal identity card
│   │   ├── VisitorRecon.jsx    # client-side IP/browser lookup widget
│   │   ├── PaperDoodles.jsx    # decorative background (dot grid + crosses)
│   │   ├── CursorGlow.jsx / BackToTop.jsx / LoadingScreen.jsx / Footer.jsx
│   ├── data/content.js         # single source of truth for all content
│   ├── App.jsx                 # router setup
│   ├── index.css
│   └── main.jsx
├── index.html                  # meta tags, OG tags, JSON-LD structured data
├── tailwind.config.js
├── vite.config.js
├── netlify.toml / vercel.json
└── package.json
```

## Design system

- **Palette**: warm cream background (`#F4EFE4`), near-white cards (`#FFFCF6`), deep maroon-brown ink (`#3A2418`), terracotta + sage accent duo, mustard-gold doodles.
- **Typography**: Fraunces (big serif display headings/wordmark), Inter (body), JetBrains Mono (terminal widgets, code-style labels).
- **Signature elements**: the `whoami.sh` and `recon_scan.log` terminal cards on the Desktop page, folder-icon navigation instead of a traditional nav bar, and terminal-command chips (`$ cat about.md`) atop each section — all original components, not copied assets.

## Content accuracy

All copy in `src/data/content.js` is drawn from Navya's resume and her public GitHub repositories (verified directly, including repo names). No project screenshots were supplied, so project cards use icon-driven headers — swap in real screenshots any time.

## Getting started (local development)

**Prerequisites:** Node.js 18+ and npm.

```bash
npm install
cp .env.example .env   # then fill in EmailJS keys — see below
npm run dev
```

### Other commands

```bash
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # run ESLint
```

## Contact form setup (EmailJS)

The contact form uses [EmailJS](https://www.emailjs.com/) so it works with **zero backend**.

1. Create a free EmailJS account.
2. Add an **Email Service** — note the **Service ID**.
3. Create an **Email Template** with variables: `user_name`, `user_email`, `subject`, `message` — note the **Template ID**.
4. Copy your **Public Key** from Account → API Keys.
5. Fill in `.env`:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart the dev server after editing `.env`.

## About the "recon_scan.log" widget

`VisitorRecon.jsx` calls the free, public [ipapi.co](https://ipapi.co/) API directly from the visitor's browser to show their own IP/city/timezone — a playful "you've been fingerprinted" touch. It fails gracefully (shows "unavailable") if the API is unreachable or rate-limited, which can happen in sandboxed/CI environments — in a normal deployed site, visitors' browsers can reach it directly. No data is sent to any server you control; it's a client-side-only lookup.

## Deployment

### Netlify

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```
Or connect the repo in the Netlify dashboard — `netlify.toml` already configures the build command, publish directory, and SPA redirect (required since this is now a multi-route app).

### Vercel

```bash
npm install -g vercel
vercel --prod
```
Or connect the repo in the Vercel dashboard — `vercel.json` already configures the SPA rewrite.

Either way, remember to add your three `VITE_EMAILJS_*` environment variables in the hosting dashboard.

### Before you go live
- Update the canonical/OG URLs in `index.html` and `public/sitemap.xml` / `public/robots.txt` to your real deployed domain.
- Update `profile.links` in `src/data/content.js` if your GitHub/LinkedIn URLs change.

## Suggestions to improve the portfolio further

1. **Real project screenshots or terminal recordings** for the SOC lab cards.
2. **Live demo for the Zero Trust project** — deploy the MERN app and link it as a live demo.
3. **A few short technical write-ups** (e.g. "How I mapped a brute-force simulation to MITRE ATT&CK") as extra proof-of-work.
4. **CompTIA Security+ badge** once earned.
5. **Drag-and-drop folders** — the Desktop folders currently animate on hover/click only; real drag physics (Framer Motion's `drag` prop) would push the desktop metaphor further, at the cost of some complexity around click-vs-drag detection.
6. **Testimonials** — a short quote from a professor or Forage/TryHackMe mentor.
7. **Analytics** — a lightweight, privacy-respecting tool (e.g. Plausible) to see which folders get opened most.
8. **Case-study depth** for the flagship projects — a "problem → approach → result" narrative reads stronger than bullet points alone.

