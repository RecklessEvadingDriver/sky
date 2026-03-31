# Skystar Tour and Travels — Shopify Dawn Theme (Production-Ready)

A fully production-ready Shopify theme customisation for **Skystar Tour and Travels**, 
built on top of the Dawn theme. Functions as a premium travel-agency catalog site 
with WhatsApp-based lead generation.

---

## ✨ Features

| Category | Details |
|---|---|
| **Lead Generation** | WhatsApp inquiry button on every product page and tour card |
| **Catalog-only Mode** | Add to Cart, Buy Now, Quantity selector, Cart icon — all hidden |
| **Typography** | Poppins (headings) + Inter (body) via Google Fonts |
| **Header** | Sticky responsive header, logo upload, mobile slide-in menu, phone + WhatsApp CTA |
| **Announcement Bar** | Configurable promo bar with dismiss button |
| **Hero Banner** | Full-screen hero with image upload, headline, stats counter animation |
| **Trust Strip** | Scrolling social proof strip (emoji + text badges) |
| **Destination Cards** | Collection cards with image upload (Domestic / International / Honeymoon) |
| **Popular Packages** | Auto-populated grid from a collection or manually picked products |
| **Feature Cards** | 4-column trust/why-us section |
| **Testimonials** | Configurable testimonial cards with star ratings |
| **Contact CTA** | Big call-to-action section with WhatsApp + phone buttons |
| **Footer** | 4-column footer: brand, quick links, contact info, newsletter |
| **Social Icons** | Facebook, Instagram, YouTube, X, LinkedIn, Pinterest — all admin-configurable |
| **Floating WhatsApp** | Persistent floating WhatsApp button with pulse animation and tooltip |
| **Scroll to Top** | Auto-appears on scroll |
| **Tour Package Metafields** | Duration, Inclusions, Itinerary, Group size, Best time |
| **Collection Page** | Hero + tag filter pills + product grid + pagination |
| **About Page** | Image + content + stats + value cards |
| **SEO** | JSON-LD (TravelAgency, WebSite, BreadcrumbList), OG tags, meta description/keywords |
| **Admin Settings** | Colors, typography, WhatsApp number, social links, contact info, SEO, favicon, OG image |
| **Mobile-first** | Fully responsive — tested down to 320px |
| **Performance** | Lazy images, deferred JS, priority-loaded hero image |
| **Complete Templates** | All standard Shopify templates included (404, cart, search, password, gift cards) |
| **Internationalization** | Translation-ready with English locale file included |
| **SEO Optimized** | Robots.txt, structured data, meta tags, Open Graph support |

---

## 📁 File Structure

\`\`\`
sky/
├── layout/
│   └── theme.liquid                    ← Main layout (fonts, CSS, JS, header, footer, floating WA)
├── sections/ (24 files)
│   ├── skystar-announcement-bar.liquid ← Top promo bar (dismissible)
│   ├── skystar-header.liquid           ← Sticky header with mobile menu
│   ├── skystar-hero.liquid             ← Full-screen hero banner
│   ├── skystar-trust-strip.liquid      ← Social proof strip
│   ├── skystar-featured-collections.liquid ← Destination category cards
│   ├── skystar-popular-packages.liquid ← Featured tour packages grid
│   ├── skystar-features.liquid         ← Trust / why-us section
│   ├── skystar-contact-cta.liquid      ← Lead-gen CTA section
│   ├── skystar-testimonials.liquid     ← Customer testimonials
│   ├── skystar-footer.liquid           ← Full footer
│   ├── skystar-about-content.liquid    ← About us page content
│   ├── skystar-collection-page.liquid  ← Collection listing page
│   ├── skystar-404.liquid              ← 404 error page content
│   ├── main-product.liquid             ← Tour package product page
│   ├── main-cart.liquid                ← Shopping cart section
│   ├── main-page.liquid                ← Generic page content
│   ├── main-list-collections.liquid    ← Collections listing grid
│   ├── main-search.liquid              ← Search results page
│   ├── main-password-header.liquid     ← Password page header
│   ├── main-password-content.liquid    ← Password page content
│   ├── main-password-footer.liquid     ← Password page footer
│   ├── main-gift-card.liquid           ← Gift card display
│   └── product-recommendations.liquid  ← Related products section
├── snippets/
│   ├── whatsapp-button.liquid          ← WhatsApp CTA button
│   ├── tour-card.liquid                ← Tour package card (used in grids)
│   ├── tour-package-details.liquid     ← Tour metafields display
│   ├── social-icons.liquid             ← Social media icon set
│   └── skystar-seo.liquid              ← JSON-LD structured data
├── templates/ (13 files)
│   ├── index.json                      ← Default homepage template
│   ├── index.skystar.json              ← Skystar homepage template
│   ├── product.json                    ← Default product template
│   ├── product.skystar.json            ← Skystar product template
│   ├── collection.json                 ← Default collection template
│   ├── collection.skystar.json         ← Skystar collection template
│   ├── page.json                       ← Generic page template
│   ├── page.about.json                 ← About page template
│   ├── 404.json                        ← 404 error page
│   ├── cart.json                       ← Shopping cart page
│   ├── search.json                     ← Search results page
│   ├── list-collections.json           ← All collections page
│   ├── password.json                   ← Password protection page
│   ├── gift_card.liquid                ← Gift card page
│   └── robots.txt.liquid               ← SEO robots.txt
├── assets/
│   ├── skystar-custom.css              ← All styles (2400+ lines, fully documented)
│   └── skystar-custom.js               ← All JS (sticky header, mobile menu, counters, lazy load)
├── config/
│   ├── settings_schema.json            ← Full admin settings schema
│   ├── settings_data.json              ← Default values
│   ├── metafield-definitions.yaml      ← Tour metafield setup reference
│   └── locales/
│       └── en.default.json             ← English translations
└── .shopifyignore                      ← Build artifacts exclusion
\`\`\`

---

## 🚀 Setup Instructions

### Step 1 — Install on Shopify

1. In your Shopify Admin go to **Online Store → Themes → Actions → Edit code**.
2. Upload / paste each file into the corresponding folder.
3. If you have an existing Dawn theme, the `main-product.liquid` **replaces** the existing Dawn one, OR keep it separate and assign `product.skystar.json` as your product template.

### Step 2 — Set Your WhatsApp Number

Go to **Online Store → Themes → Customize → Theme Settings → Skystar — WhatsApp**:
- Enter your WhatsApp number with country code, no spaces: e.g., `919876543210`

### Step 3 — Upload Your Logo

- **Theme Settings → Brand Identity** → upload your Favicon and OG image.
- **Header section → Logo** → upload your header logo (300×80px PNG transparent recommended).
- **Footer section → Footer logo** → upload a white/light version.

### Step 4 — Configure Header Navigation

**Header section → Navigation Links**: Set up to 8 nav links (text + URL).

### Step 5 — Set Contact Details

- **Theme Settings → Contact Information**: phone, email, address, hours.
- **Footer section → Contact Column**: same info displayed in the footer.

### Step 6 — Add Social Media Links

**Theme Settings → Social Media**: Facebook, Instagram, YouTube, X, LinkedIn, Pinterest.

### Step 7 — Create Collections

Create 3 collections in Shopify Admin:
- **Domestic Tours** → assign handle `domestic-tours`
- **International Tours** → assign handle `international-tours`  
- **Honeymoon Packages** → assign handle `honeymoon-packages`

Link each destination card in the **Featured Collections section** to the appropriate collection.

### Step 8 — Create Tour Products

For each tour package:

1. Create a **Product** in Shopify Admin.
2. Add the product to the appropriate collection.
3. Add tour metafields (see Step 9).
4. Set the product **template** to `product.skystar` (if not replacing the default).

### Step 9 — Add Tour Package Metafields

Go to **Settings → Custom data → Products → Add definition** for each:

| Namespace | Key | Type | Label |
|---|---|---|---|
| `tour` | `duration` | Single line text | Duration |
| `tour` | `inclusions` | Single line text | Inclusions (comma-separated) |
| `tour` | `itinerary` | Multi-line text | Itinerary |
| `tour` | `group_size` | Single line text | Group Size |
| `tour` | `best_time` | Single line text | Best Time to Visit |
| `tour` | `price_label` | Single line text | Price label (e.g. "From ₹12,999/person") |

### Step 10 — Assign Templates

For products: edit each product → scroll to **Theme Template** → select `product.skystar`.
For the homepage: ensure your theme uses the `index.skystar` template.
For collections: assign `collection.skystar` template.
For About page: create a page at `/pages/about` and assign `page.about` template.

### Step 11 — Set Brand Colors (Optional)

**Theme Settings → Colors**: customise primary navy, accent gold, etc. to match your brand identity.

---

## 🔧 Admin-Configurable Settings Summary

| Setting Group | What you can change |
|---|---|
| Brand Identity | Store name, tagline, favicon, OG image |
| Colors | Primary, secondary/accent, text, background |
| Typography | Heading font, body font, base size |
| WhatsApp | Phone number, floating button message |
| Contact Information | Phone, email, address, hours |
| Social Media | 6 social platform URLs |
| SEO | Meta description, keywords |
| Header | Logo, nav links (×8), phone display, WhatsApp button |
| Announcement Bar | Text, emoji, link, colors, dismiss toggle |
| Footer | Logo, description, quick links (×6), contact, newsletter |
| Hero Banner | Image, headline, subheadline, CTAs, stats (×3) |
| Trust Strip | Up to 6 emoji + text items |
| Featured Collections | 3 destination cards with images |
| Popular Packages | Collection picker or manual products, count |
| Feature Cards | Icons, titles, descriptions |
| Contact CTA | Background image, heading, WhatsApp + phone buttons |
| Testimonials | Star ratings, quotes, names, locations |
| About Page | Image, years badge, content, stats, value cards |
| Collection Page | Hero toggle, filter pills, products per page |

---

## 📱 Mobile Experience

- Hamburger menu with slide-in drawer at ≤1024px
- All grids collapse to 1–2 columns
- Floating WhatsApp button repositions on mobile
- Hero is 100svh on mobile
- Touch-scrollable filter pills and trust strip

---

## 🔒 Security Notes

- All external links use `rel="noopener noreferrer"`
- No customer data is stored — all leads go directly to WhatsApp
- WhatsApp number is stored in Shopify theme settings (not hardcoded)
