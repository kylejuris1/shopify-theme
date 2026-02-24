# Shopify Theme – Unikor-style product page

Custom Shopify theme that recreates the [Unikor product page](https://unikor.shop/products/nightguard™-bedwetting-alarm) layout and sections for your own store.

## Features

- **Unikor-style product template** – Promo banner, hero with gallery + bullets, trust badge, rich content blocks, CTA, FAQ accordion, and related products.
- **Customizable in Theme Editor** – All sections and blocks can be edited (text, FAQ items, collections, colors) without touching code.
- **Responsive** – Sticky “Add to cart” bar on mobile when the main form scrolls out of view.
- **Compatible with GitHub** – Push this repo to [github.com/kylejuris1/shopify-theme](https://github.com/kylejuris1/shopify-theme) and connect it to your store.

## Theme structure

```
layout/theme.liquid          # Base layout (header, main, footer)
config/settings_schema.json  # Theme settings (colors, typography)
config/settings_data.json    # Default theme settings
sections/
  header.liquid
  footer.liquid
  promo-banner.liquid        # “Save up to X%” bar
  product-hero-unikor.liquid # Product gallery + form + bullets
  trust-badge.liquid         # e.g. “Over 11k+ Dry Happy Families”
  rich-content.liquid        # Reusable heading + HTML body + optional button
  cta-block.liquid           # “Ready to help…” CTA
  faq-accordion.liquid       # FAQ with blocks
  related-products-unikor.liquid
  main-product.liquid        # Simple product for default template
  hero-banner.liquid         # Homepage hero
templates/
  product.unikor.json        # Unikor-style product page (use this for your main product)
  product.json               # Default product template
  index.json                 # Homepage
assets/
  base.css
  theme-unikor.css
  global.js
locales/
  en.default.json
```

## How to use

### 1. Import theme via GitHub

1. Push this project to your repo:  
   `https://github.com/kylejuris1/shopify-theme`
2. In **Shopify Admin**: **Online Store → Themes** → **Add theme** → **Connect from GitHub**.
3. Select the repo and branch (e.g. `master`), then **Connect**.

### 2. Use this theme (required – or you’ll see an empty product area)

**You must be viewing this theme, not the default Shopify theme.**

- This theme has **no** “Product Collections” sidebar. If you see “Product Collections” or “Home page products” on the left, you’re on a different theme (e.g. Dawn).
- In **Online Store → Themes**, find the theme that was added from GitHub (e.g. “Custom Unikor Style” or “shopify-theme”).
- Click **Customize** to preview it, or **Publish** to make it your live theme.
- After that, the homepage will show the NightGuard product section at the top, and product pages can use the Unikor template.

### 3. Assign the Unikor template to a product

1. In Admin: **Products** → open the product (e.g. your bedwetting alarm).
2. In the **Theme template** dropdown, choose **Unikor** (or the label you see for `product.unikor`).
3. Save. The product page will use the Unikor layout and sections.

### 4. Customize content

- Go to **Online Store → Themes → Customize**.
- Open a product that uses the Unikor template.
- Edit:
  - **Promo banner** – Text and visibility.
  - **Product hero** – Bullets, note, button label.
  - **Trust badge** – Heading and subheading.
  - **Rich content** sections – Headings and HTML body.
  - **CTA block** – Heading, text, button.
  - **FAQ** – Add/remove/reorder FAQ blocks; edit questions and answers.
  - **Related products** – Heading and collection (or leave blank to use the product’s collection).

Theme-level colors and fonts are under **Theme settings** in the editor.

## Reference

- Layout and content inspired by:  
  https://unikor.shop/products/nightguard™-bedwetting-alarm  
- Built for standard Shopify 2.0 themes (JSON templates, sections, and blocks).
