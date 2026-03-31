# Skystar Tour and Travels Theme - Installation Guide

## Overview

This guide will help you install and configure the Skystar Tour and Travels Shopify theme properly. All critical installation issues have been fixed in the latest version.

## What Was Fixed

### ✅ Critical Issues Resolved

1. **Missing Product Recommendations Section** - Created `sections/product-recommendations.liquid` to display related tour packages on product pages
2. **Duplicate CSS Loading** - Removed redundant `skystar-custom.css` loading from `main-product.liquid`
3. **Duplicate Google Fonts Import** - Removed `@import` from CSS file, now only loaded via `theme.liquid`
4. **Missing JavaScript Configuration** - Added `window.skystarConfig` initialization in `theme.liquid`
5. **Unconfigured Collections** - Added default collection handles (`domestic-tours`, `international-tours`, `honeymoon-packages`, `popular-packages`)
6. **Missing Default Settings** - Populated contact phone, email, address, and social media placeholders

## Installation Steps

### 1. Upload Theme to Shopify

1. Download/clone this repository
2. Zip the entire theme folder (or use Git)
3. Go to **Shopify Admin** → **Online Store** → **Themes**
4. Click **Add theme** → **Upload zip file**
5. Select your theme zip file and upload
6. Once uploaded, click **Customize** or **Publish**

### 2. Create Required Collections

The theme expects specific collection handles to work properly. Create these collections:

| Collection Handle | Collection Title | Purpose |
|------------------|------------------|---------|
| `domestic-tours` | Domestic Tours | For tours within your country |
| `international-tours` | International Tours | For international destinations |
| `honeymoon-packages` | Honeymoon Packages | For honeymoon/romantic trips |
| `popular-packages` | Popular Packages | Best-selling or featured tours |

**To create collections:**
1. Go to **Products** → **Collections**
2. Click **Create collection**
3. Set the title and ensure the handle matches exactly (e.g., `domestic-tours`)
4. Add products to each collection

### 3. Configure Theme Settings

Go to **Online Store** → **Themes** → **Customize** and update these settings:

#### Contact Information
- **WhatsApp Number**: Replace `919999999999` with your actual WhatsApp number (with country code, no spaces or + sign)
- **Contact Phone**: Update from placeholder to your business phone
- **Contact Email**: Update from placeholder to your business email
- **Contact Address**: Update from placeholder to your actual address
- **Contact Hours**: Already set to "Mon–Sat: 9am – 7pm" (customize as needed)

#### Social Media Links
Set your social media profiles:
- Facebook URL
- Instagram URL
- Twitter URL
- YouTube URL
- LinkedIn URL

*(Leave blank if you don't use a particular platform)*

#### Branding
- **Store Name**: Already set to "Skystar Tour and Travels"
- **Store Tagline**: Already set to "Your Dream Holiday Awaits"
- **Favicon**: Upload your logo/favicon
- **OG Image**: Upload an image for social media sharing (1200x630px recommended)

### 4. Configure Homepage Sections

The homepage template (`templates/index.skystar.json`) now includes default collection handles, but you should verify:

1. **Featured Collections Section**:
   - Domestic Tours → Should link to `domestic-tours` collection
   - International Tours → Should link to `international-tours` collection
   - Honeymoon Packages → Should link to `honeymoon-packages` collection

2. **Popular Packages Section**:
   - Source: Collection
   - Collection: `popular-packages` (already configured)
   - Products to show: 6 (adjustable)

### 5. Create Product Metafields

For tour packages to display properly, create these metafields:

Go to **Settings** → **Custom data** → **Products** → **Add definition**

| Namespace | Key | Type | Purpose |
|-----------|-----|------|---------|
| `tour` | `duration` | Single line text | e.g., "5 Days / 4 Nights" |
| `tour` | `price_label` | Single line text | e.g., "Starting from ₹18,999" |
| `tour` | `inclusions` | Single line text | Comma-separated list |
| `tour` | `group_size` | Single line text | e.g., "2–15 persons" |
| `tour` | `best_time` | Single line text | e.g., "Oct to Mar" |
| `tour` | `itinerary` | Multi-line text | Day-by-day breakdown |

**Or use this quick YAML import** (if your Shopify plan supports it):
```yaml
- namespace: tour
  key: duration
  name: Tour Duration
  type: single_line_text_field

- namespace: tour
  key: price_label
  name: Price Label
  type: single_line_text_field

- namespace: tour
  key: inclusions
  name: Inclusions
  type: single_line_text_field

- namespace: tour
  key: group_size
  name: Group Size
  type: single_line_text_field

- namespace: tour
  key: best_time
  name: Best Time to Visit
  type: single_line_text_field

- namespace: tour
  key: itinerary
  name: Tour Itinerary
  type: multi_line_text_field
```

### 6. Create Tour Products

For each tour package:

1. Go to **Products** → **Add product**
2. Add title, description, and images
3. Set price (this will show as "Starting from [price]")
4. Add to appropriate collections
5. **Assign Template**: Choose `product.skystar` template
6. Fill in metafields in the product editor:
   - Duration: "5 Days / 4 Nights"
   - Inclusions: "Hotel, Meals, Transport, Guide"
   - Group Size: "2-15 persons"
   - Best Time: "October to March"
   - Itinerary: (Full day-by-day plan)

### 7. Verify Product Recommendations

The `product-recommendations` section is now included. It will automatically show related tour packages on product pages using Shopify's recommendation engine.

**Location**: Bottom of product pages
**Configuration**: Go to **Customize** → open any product page → "Product Recommendations" section
- Heading: "You May Also Like" (customizable)
- Number of products: 4 (customizable, 2-8)

## Testing Checklist

After installation, verify these work:

- [ ] Homepage loads with all sections visible
- [ ] Featured Collections show correct destinations
- [ ] Popular Packages section displays products
- [ ] Product pages load with tour details
- [ ] Product recommendations appear below product info
- [ ] WhatsApp buttons work and open with correct number
- [ ] Floating WhatsApp button appears in bottom right
- [ ] Mobile menu works properly
- [ ] All images load correctly
- [ ] Contact information displays in footer
- [ ] Social media links work (if configured)

## Troubleshooting

### Collections not showing products?
- Ensure collections exist with exact handles: `domestic-tours`, `international-tours`, `honeymoon-packages`, `popular-packages`
- Add at least 1 product to each collection
- Verify products are published and have images

### WhatsApp buttons not working?
- Check that `whatsapp_number` is set in theme settings
- Number format: country code + number, no spaces or symbols (e.g., `919999999999`)
- Clear browser cache and test again

### Product pages showing errors?
- Assign `product.skystar` template to products
- Ensure all metafields are created (see step 5)
- Fill in at least the essential metafields (duration, inclusions)

### Product recommendations not appearing?
- Shopify needs at least 4-5 products in your store
- Recommendations take time to generate (up to 24 hours after product creation)
- Section only shows when recommendations are available

### CSS or fonts not loading?
- All duplicates have been removed
- Google Fonts load once via `theme.liquid`
- Custom CSS loads once via `theme.liquid`
- Clear browser cache and refresh

## Support

For issues or questions:
- Check the README.md for feature documentation
- Review the code comments in section files
- Ensure you've followed all installation steps

## Updates in Latest Version

**Version 2.1** (Current)
- ✅ Added missing `product-recommendations.liquid` section
- ✅ Removed duplicate CSS and font loading
- ✅ Added JavaScript configuration initialization
- ✅ Configured default collection handles
- ✅ Populated default contact settings
- ✅ Improved theme installation reliability

---

**Theme is now ready for production use!** 🚀

Follow the steps above for a smooth installation experience.
