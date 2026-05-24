# MediMaster — Healthcare Services Site

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Project Structure

```
medimaster/
├── public/
│   └── logo.png              ← MediMaster logo
├── src/
│   ├── app/
│   │   ├── globals.css       ← Tailwind + Google Fonts
│   │   ├── layout.js         ← Root layout
│   │   └── page.js           ← Main page
│   └── components/
│       ├── Navbar.jsx        ← Top info bar + nav + CTA
│       ├── Hero.jsx          ← Hero section with stats
│       ├── Services.jsx      ← 6-service grid
│       ├── About.jsx         ← About section
│       ├── Contact.jsx       ← Contact form + info
│       └── Footer.jsx        ← Footer
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
└── package.json
```

## Color Palette

| Token     | Hex       | Usage                    |
|-----------|-----------|--------------------------|
| Primary   | #1E3A5F   | Navbar, headings, footer |
| Accent    | #2BB673   | Buttons, icons, tags     |
| Highlight | #4A90E2   | Stat numbers, badges     |
| BG        | #F4F6F9   | Page background          |
| Card      | #FFFFFF   | Cards and panels         |
| Text      | #2C3E50   | Body text                |
"# MediMaster" 
