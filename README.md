# La Damai Resort — Luxury Resort Website

A premium, elegant resort website built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Auth.js.

## Color Palette
- Coffee Bean `#261C15` — text, header bar, dark sections
- Dark Walnut `#671D00` — accents, hover states
- Palm Leaf `#7F8F35` — accents, icons, highlights
- Vanilla Custard `#E2E6A9` — secondary backgrounds, highlights
- Porcelain `#F7F7F2` — main background

## Pages
- `/` — Home (hero, intro, rooms preview, reviews, CTA, contact)
- `/about` — About Us
- `/rooms` — Rooms & Suites (full listing)
- `/gallery` — Photo gallery (masonry)
- `/contact` — Contact form
- `/booking` — Booking request form
- `/login` — Sign in with local Auth.js credentials

## Features
- Slide-in sidebar navigation (hamburger menu) with overlay
- Coffee-bean colored top bar with logo, menu trigger, and Book Now button
- Fully responsive, elegant layout using Playfair Display (headings) + Jost (body)
- Server Actions for form submissions (Contact + Booking)
- Auth.js (NextAuth v5) credentials provider with local admin credentials
- Image gallery, room cards, review cards — all with dummy content/images (Unsplash)

## Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Copy `.env.local.example` to `.env.local` and fill in your values:
```bash
cp .env.local.example .env.local
```

You'll need:
- An Auth secret: `npx auth secret`
- Optional admin login values: `ADMIN_EMAIL` and `ADMIN_PASSWORD`

### 3. Run the dev server
```bash
npm run dev
```
Visit http://localhost:3000

### 5. Build for production
```bash
npm run build
npm start
```

## Deployment (Vercel recommended)
1. Push this project to a GitHub repository.
2. Import the repo into [Vercel](https://vercel.com/new).
3. Add the environment variables from `.env.local` in the Vercel project settings.
4. Deploy.

For other hosts, ensure Node.js 18+ and run `npm run build && npm start`.

## Notes / Next Steps
- Replace all Unsplash placeholder images and dummy text in `lib/data.ts` and page files with real resort content.
- Update contact details, address, and social links in `components/Sidebar.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`.
- Create a stronger admin password in your environment variables for `/login`.
- Consider adding email notifications (e.g., via Resend) for new bookings/contact messages.
