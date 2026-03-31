# Skystar Tour and Travels — Shopify Dawn Theme Customization

A complete set of custom Shopify theme files that transforms the **Dawn theme** into a premium travel agency website for **Skystar Tour and Travels**. The store operates as a **catalog + lead-generation site** — customers browse tour packages and inquire via **WhatsApp** instead of purchasing directly.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🟢 WhatsApp Button | Replaces "Add to Cart" with a full-width green WhatsApp button |
| 🚫 Cart Hidden | All cart, checkout & quantity elements are hidden |
| 📦 Tour Metafields | Duration, inclusions, itinerary displayed on product pages |
| 🏠 Hero Banner | Large, configurable hero with stats, CTAs and background image |
| 🗺️ Destination Collections | Featured cards for Domestic / International / Honeymoon |
| ⭐ Testimonials | Customer reviews section with star ratings |
| 🛡️ Trust Features | 24/7 support, best price, verified hotels, WhatsApp booking |
| 📱 Mobile-First | Responsive design optimized for all screen sizes |
| ⚡ Fast Images | Responsive srcset + lazy loading on all images |

---

## 📁 File Structure

```
sky/
├── assets/
│   ├── skystar-custom.css          # All custom styles (brand, WhatsApp btn, sections)
│   └── skystar-custom.js           # WhatsApp link builder + ecommerce hider + utils
│
├── snippets/
│   ├── whatsapp-button.liquid      # Reusable WhatsApp inquiry button
│   └── tour-package-details.liquid # Tour metafields display (duration, inclusions, itinerary)
│
├── sections/
│   ├── main-product.liquid         # Product page override — replaces Dawn default
│   ├── skystar-hero.liquid         # Homepage hero banner section
│   ├── skystar-featured-collections.liquid  # Destination cards section
│   ├── skystar-features.liquid     # Trust/features section
│   └── skystar-testimonials.liquid # Customer testimonials section
│
├── templates/
│   ├── product.skystar.json        # Product page template (uses main-product.liquid)
│   └── index.skystar.json          # Homepage template with all sections pre-configured
│
└── config/
    ├── settings_schema.json        # Theme settings additions (WhatsApp number, brand)
    ├── settings_data.json          # Default settings values
    └── metafield-definitions.yaml  # Metafield setup reference for Shopify Admin
```

---

## 🚀 Setup Instructions

### Step 1 — Upload files to your Dawn theme

1. In **Shopify Admin**, go to **Online Store → Themes**
2. Next to your Dawn theme, click **Actions → Edit code**
3. Upload/create the following files in the correct folders:

| File | Folder in Theme Editor |
|---|---|
| `skystar-custom.css` | `assets/` |
| `skystar-custom.js` | `assets/` |
| `whatsapp-button.liquid` | `snippets/` |
| `tour-package-details.liquid` | `snippets/` |
| `main-product.liquid` | `sections/` — **replace** the existing file |
| `skystar-hero.liquid` | `sections/` |
| `skystar-featured-collections.liquid` | `sections/` |
| `skystar-features.liquid` | `sections/` |
| `skystar-testimonials.liquid` | `sections/` |

> **Note on `sections/main-product.liquid`:** This replaces the Dawn default product section. If you prefer not to replace it, upload it under a different name and update the product template JSON to reference it.

### Step 2 — Set your WhatsApp number

1. Go to **Online Store → Themes → Customize**
2. Click **Theme settings** (bottom-left gear icon)
3. Find **"Skystar — WhatsApp Settings"**
4. Enter your WhatsApp phone number **with country code, no spaces or symbols**
   - Example: `919876543210` for +91 98765 43210

### Step 3 — Add CSS & JS to theme.liquid

Open `layout/theme.liquid` and add before `</head>`:

```liquid
{{ 'skystar-custom.css' | asset_url | stylesheet_tag }}
```

And before `</body>`:

```liquid
<script src="{{ 'skystar-custom.js' | asset_url }}" defer></script>
```

### Step 4 — Configure the Homepage

Add these sections via **Online Store → Themes → Customize → Add section**:
1. **Skystar Hero Banner** — upload a hero travel image, set your headline
2. **Skystar Destinations** — link your collections
3. **Skystar Features** — edit the 4 trust feature cards
4. **Skystar Testimonials** — add real customer reviews

### Step 5 — Set up Tour Package Metafields

Go to **Admin → Settings → Custom data → Products** and add:

| Namespace | Key | Type | Example |
|---|---|---|---|
| `tour` | `duration` | Single line text | `5 Days / 4 Nights` |
| `tour` | `price_label` | Single line text | `Starting from ₹18,999/person` |
| `tour` | `inclusions` | Single line text | `Hotel, Meals, Flights, Transfers` |
| `tour` | `group_size` | Single line text | `2–15 persons` |
| `tour` | `best_time` | Single line text | `October to March` |
| `tour` | `itinerary` | Multi-line text | Day-by-day itinerary |

### Step 6 — Set up Collections

Create these collections in **Admin → Products → Collections**:
- **Domestic Tours**
- **International Tours**
- **Honeymoon Packages**

Set a featured image for each (used as the destination card background).

---

## 🎨 Brand Colors

Edit `assets/skystar-custom.css` — CSS custom properties in `:root`:

```css
--skystar-primary: #0a2d6e;    /* Deep navy blue */
--skystar-secondary: #f5a623;  /* Golden amber */
--skystar-whatsapp: #25D366;   /* WhatsApp green */
```

---

## 🔒 Catalog-Only Mode

Cart, checkout, and quantity elements are hidden via CSS so the store functions purely as a lead-generation catalog. The WhatsApp button is the only conversion action available.

---

## 📋 Theme Sections Summary

| Section | Configurable via Theme Editor |
|---|---|
| Skystar Hero Banner | Image, headline, CTAs, stats bar |
| Skystar Destinations | Collections, badges, custom images |
| Skystar Features | Icon, title, description per card |
| Skystar Testimonials | Reviews, ratings, customer names |
| main-product (Tour Package) | Auto-renders metafields + WhatsApp button |
