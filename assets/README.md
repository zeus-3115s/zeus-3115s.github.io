# Hemanth Sreedara — Portfolio

A single-page portfolio site with a PCB / oscilloscope visual theme (neon name, MOSFET dark/light toggle, register-map skills table, resistor-divider section breaks). Built with plain HTML, Tailwind (via CDN), and vanilla JS — no build step required.

**Live site:** _add your GitHub Pages URL here once deployed_

## 🗂 Project structure

```
.
├── index.html               # the entire site (markup, styles, and JS)
├── assets/
│   ├── tailwind.css          # pre-built, self-hosted Tailwind CSS (no CDN needed)
│   ├── fonts/                # self-hosted IBM Plex Mono/Sans woff2 files
│   ├── profile.jpg           # ← add your own photos here (see below)
│   ├── aurora-photo.jpg
│   ├── wysh-photo.jpg
│   ├── aurasight-photo.jpg
│   ├── hackathon.jpg
│   └── ieee-cubesat.jpg
└── README.md
```

### Why everything is self-hosted

Earlier versions of this site pulled Tailwind and the fonts live from `cdn.tailwindcss.com` and `fonts.googleapis.com`. On networks/browsers that block those domains (school or work firewalls, some ad-blockers, offline use), the CSS and fonts would silently fail to load — which breaks all spacing and typography. This version bundles a pre-built Tailwind stylesheet (`assets/tailwind.css`) and the actual font files (`assets/fonts/*.woff2`) directly in the repo, so the site renders identically everywhere, with zero external dependencies.

If you edit the HTML and start using new Tailwind utility classes that aren't in `assets/tailwind.css` yet, you'll need to rebuild it (see **Rebuilding the Tailwind CSS** below) — otherwise those new classes just won't have any styling.

## 🖼 Adding your images

Drop the following files into the `assets/` folder (same filenames, or update the paths in `index.html` if you rename them):

| File | Used for |
|---|---|
| `profile.jpg` | Hexagonal headshot in the hero section |
| `aurora-photo.jpg` | AURORA project tile (UAV sound localization) |
| `wysh-photo.jpg` | WYSH project tile (FPGA audio-visual sync) |
| `aurasight-photo.jpg` | AuraSight project tile (Wi-Fi CSI radar) |
| `hackathon.jpg` | HackWire '26 win tile |
| `ieee-cubesat.jpg` | IEEE AESS / CubeSat tile |

If an image is missing, the hero photo shows a fallback placeholder icon; the mosaic tiles will just show their background color with no image.

## 🔧 Rebuilding the Tailwind CSS

Only needed if you add/remove Tailwind utility classes in `index.html`.

```bash
npm install -D tailwindcss@3
npx tailwindcss -i ./input.css -o ./assets/tailwind.css --minify
```

Where `input.css` just contains:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

And `tailwind.config.js` should set `content: ["./index.html"]` plus the same `theme.extend` block (colors, fontFamily, keyframes, animation) that used to live inline in the old `<script>tailwind.config = {...}</script>` block.

## 🚀 Deploying with GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Under "Build and deployment," set **Source** to `Deploy from a branch`, choose the `main` branch and `/ (root)` folder, then save.
4. Wait a minute or two — GitHub will publish the site at:
   - `https://<username>.github.io/<repo-name>/`, or
   - `https://<username>.github.io/` if the repo itself is named `<username>.github.io`

## 🛠 Local preview

No build tools needed — just open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## ✏️ Customizing

- **Colors / theme:** CSS variables are defined under `:root` and `html.light` in the `<style>` block near the top of `index.html`.
- **Skills table:** edit the `skills` array in the `<script>` block near the bottom.
- **Projects / achievements:** edit the corresponding `<section>` blocks directly in the HTML.
- **Dark/light default:** the site loads in light mode by default (`class="light"` on `<html>`, `lightMode = true` in JS). Click the MOSFET icon in the nav to toggle.

`input.css` and `tailwind.config.js` are included at the repo root for exactly this purpose — you don't need to recreate them.

## 📄 License

Personal portfolio — feel free to fork the structure for your own site, but please swap out the content, name, and images for your own.
