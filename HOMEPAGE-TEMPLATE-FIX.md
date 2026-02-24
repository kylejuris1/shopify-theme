# Add Featured Product to Homepage

If the **Featured product (Unikor)** section doesn't appear in the customizer, use one of these:

---

## Option 1: Add section in Customize

1. **Online Store → Themes → Customize** (on the GitHub theme).
2. Open the **Home page**.
3. Click **Add section**.
4. Find **Featured product (Unikor)** and click it.
5. Drag it **above** "Hero banner" so it’s the first section.
6. **Save**.

---

## Option 2: Edit the template code (pastes the section in)

1. **Online Store → Themes** → on your GitHub theme, click **⋯** → **Edit code**.
2. Under **Templates**, open **index.json**.
3. **Replace the entire file** with this (then Save):

```json
{
  "sections": {
    "featured_product": {
      "type": "featured-product-unikor",
      "settings": {
        "product_heading": "NightGuard Bedwetting Alarm",
        "review_count": "1555",
        "price": "$44.00",
        "compare_price": "$84.00",
        "save_percent": "SAVE 47%",
        "cta_link": "/collections/all"
      }
    },
    "hero": {
      "type": "hero-banner",
      "settings": {
        "heading": "Welcome",
        "subtext": "Your store description here.",
        "show_button": true,
        "button_label": "Shop now",
        "button_link": "/collections/all"
      }
    }
  },
  "order": ["featured_product", "hero"]
}
```

4. Go back to **Customize** → Home page. You should see **Featured product (Unikor)** above Hero banner.

---

## Option 3: Re-sync theme from GitHub

If "Featured product (Unikor)" doesn’t appear when you click Add section, the theme is missing the section file:

1. **Online Store → Themes**.
2. On the theme that was **connected from GitHub**, click **⋯**.
3. If you see **Update from GitHub** or **Sync**, use it to pull the latest code.
4. If not, disconnect and **Add theme → Connect from GitHub** again (repo: `kylejuris1/shopify-theme`, branch: `master`), then **Customize** that theme.

After the theme has the latest files, the Home page template will include the Featured product section.
