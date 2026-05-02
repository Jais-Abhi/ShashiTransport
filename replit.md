# The Shashi Transport Company — Website

## Project Overview
A professional, multi-page transportation & logistics website for **The Shashi Transport Company** — built with React + Vite + Tailwind CSS + Framer Motion + GSAP.

## Tech Stack
- **Frontend**: React 19 (JSX + TSX), Vite 7
- **Styling**: Tailwind CSS 3.4, custom CSS variables
- **UI Components**: Shadcn UI, Radix UI, Lucide React icons
- **Animations**: Framer Motion, GSAP
- **Routing**: React Router DOM v6
- **Fonts**: Geist Variable

## Color Palette (Light Theme)
- **Primary Navy**: `#1e3a5f`
- **Orange Accent**: `#f97316`
- **Background**: `#f8fafc`
- **Text**: `#1e293b`

## Pages
| Route | Page |
|-------|------|
| `/` | Home — Hero, Stats, Services, Process, India Map, Why Us, Testimonials, CTA |
| `/about` | About Us — Story, Timeline, Values, Leadership Team |
| `/services` | Services — FTL, LTL, Cold Chain, Express, Insured, Reverse Logistics |
| `/gallery` | Gallery — Filterable masonry grid with lightbox |
| `/tracking` | Track Shipment — Live status with timeline (demo: STC001234, STC005678) |
| `/contact` | Contact — Form, offices, quick contact |
| `/get-quote` | Get Quote — 3-step wizard form |

## Key Features
- **Interactive India SVG Map** — All states drawn, 5 highlighted (Bihar, UP, West Bengal, Goa, J&K) with hover tooltips
- **Animated Hero** — GSAP particle animations, floating orbs, drive-in truck animation
- **Framer Motion** — Page transitions, scroll animations, micro-interactions throughout
- **Responsive** — Mobile-first, works on all screen sizes
- **Counter animations** — Stats section with live counting on scroll
- **Testimonials carousel** — Auto-advancing with manual controls
- **3-step quote form** — Multi-step with progress indicator

## Project Structure
```
src/
  components/
    layout/    Navbar.jsx, Footer.jsx
    home/      Hero.jsx, IndiaMap.jsx, Stats.jsx, ServicesPreview.jsx, WhyUs.jsx, Testimonials.jsx, Process.jsx, HomeCTA.jsx
  pages/       Home.jsx, About.jsx, Services.jsx, Gallery.jsx, Contact.jsx, GetQuote.jsx, Tracking.jsx
  lib/         utils.ts
```

## Development
```bash
npm install
npm run dev   # runs on port 5000
```
