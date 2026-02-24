# Add the Featured Product section file in Shopify

The error **"Section type 'featured-product-unikor' does not refer to an existing section file"** means the theme is missing the section file. Add it like this:

---

## Step 1: Create the section file

1. In Shopify admin go to **Online Store → Themes**.
2. On your theme, click **⋯** → **Edit code**.
3. In the left sidebar, under **Sections**, click **Add a new section**.
4. For the section name enter exactly: **featured-product-unikor**  
   (Shopify will create `featured-product-unikor.liquid`).
5. Click **Done** or **Create section**. You’ll get a new file with default content.

---

## Step 2: Replace the file content

1. Open the new **featured-product-unikor.liquid** under Sections.
2. Select **all** the content in the editor (e.g. Ctrl+A / Cmd+A).
3. Delete it and paste in the **full content** from the file in this repo:  
   **sections/featured-product-unikor.liquid**  
   (Copy the entire file from line 1 to the last line, including the `{% schema %}` block.)
4. Click **Save**.

---

## Step 3: Add the section to the homepage template

1. Under **Templates**, open **index.json**.
2. Replace its content with:

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

3. Click **Save**.

---

After this, the Featured product section exists and the homepage template uses it. Use **Customize** to confirm the product block appears on the Home page.

**Note:** The section uses the same styles as the rest of the Unikor layout. If your theme doesn’t have **assets/theme-unikor.css** and **assets/base.css**, the layout may look unstyled until those are added too.
