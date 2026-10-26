# Lusanda Mashua Wellness — website rebuild (demo)

A hand-coded rebuild of the Lusanda Mashua Wellness Canva site, prepared by **SiBA Productions** as a pitch demo for moving the site off Canva.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about-me.html` | About Me |
| `services.html` | Services |
| `bookings.html` | Bookings (session info, packages, Calendly links) |
| `retreats.html` | Nature of Your Story Retreats |
| `workshop-enquiry.html` | One-Day Workshop Enquiry |

Shared styles live in `assets/css/style.css`, the mobile menu in `assets/js/main.js`, and all photos and logo artwork in `assets/img/`.

Plain HTML/CSS — no build step. Open `index.html` in a browser, or publish with GitHub Pages (Settings → Pages → deploy from `main`).

## What's improved over the Canva version

- **Fixed broken links.** On the Canva site the in-page buttons (About Me, Services, Book a Single Session, Home, etc.) point to `#page-1`-style anchors that go nowhere. Every button now opens the right page.
- **Fixed the workshop email link.** The Canva "Email" link goes to `lusanda@lmwellness.zo.za` (typo), so those enquiries bounce. It now goes to `lusanda@lmwellness.co.za`.
- **Real responsive layout.** Built with CSS grid instead of Canva's absolutely positioned boxes, with a proper mobile menu and no horizontal scrolling on phones.
- **SEO basics.** Unique page titles and meta descriptions, real headings, and alt text on images — none of which the Canva export has.
- **No Canva branding or "Designed with Canva" footer**, and the site can be hosted anywhere on the client's own domain.

## Notes before going live

- **Fonts:** the original uses Canva library fonts, which are licensed for use inside Canva. This rebuild uses close free Google Fonts matches (Hanken Grotesk, Montserrat, Forum, Pinyon Script, Mrs Saint Delafield, Cormorant Garamond).
- **Images:** photos and decorative graphics were taken from the live Canva site. Some may be Canva stock/library elements — confirm licensing (or swap for the client's own photos) before launch.
- **Placeholders to confirm with the client:** the "Resource Shop" and "Join the Glow Room" buttons had no destination on the original and currently point to Services; the "Book a free Discovery Call" step has no link yet.
