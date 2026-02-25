# Why Shopify Theme Doesn’t Match GitHub (and How to Fix It)

## Why they get out of sync

1. **Wrong branch** – The theme in Shopify is linked to a **branch**. If it’s linked to `main` but you push to `master` (or the other way around), Shopify will never get your latest code.
2. **Edits in Shopify** – If you change the theme in Shopify (Customize, Edit code, or apps), Shopify can push those changes **to** GitHub. So GitHub might have an older or different version than your local repo.
3. **Sync is two-way** – The GitHub connection is bidirectional. Edits in Shopify overwrite the connected branch. So “not pulling properly” can mean Shopify’s version was pushed to GitHub and replaced what you had there.

---

## Option A: Use Shopify CLI (recommended – repo is source of truth)

Use the CLI to **upload your local theme** (same files as GitHub) **to Shopify**. That overwrites the theme on the store with your repo.

### 1. Install Shopify CLI

- With Node: `npm install -g @shopify/cli @shopify/theme`
- Or: https://shopify.dev/docs/themes/tools/cli/install

### 2. Log in and go to your theme folder

```bash
cd c:\Users\taize\Documents\Apps\Shopify
shopify auth login --store YOUR-STORE.myshopify.com
```

Use your `.myshopify.com` store URL.

### 3. Push the theme to Shopify

**To an existing (unpublished) theme:**

```bash
shopify theme push
```

Choose the theme to overwrite when prompted. Use an **unpublished** theme first so you don’t overwrite the live one.

**To create a new unpublished theme from your repo:**

```bash
shopify theme push --unpublished
```

**To overwrite the live theme** (use only if you’re sure):

```bash
shopify theme push --allow-live
```

After this, the theme on Shopify will match the files in `c:\Users\taize\Documents\Apps\Shopify` (and therefore what you have on GitHub).

---

## Option B: Fix the GitHub connection (branch + re-sync)

1. In **Shopify admin**: **Online Store → Themes**.
2. Find the theme that was **“Connect from GitHub”** (or “Connected to GitHub”).
3. Click **⋯** (or the theme card) and look for:
   - **“Connected to …”** or **“GitHub”** – it should show **repo** and **branch**.
4. Ensure the branch is **`master`** (same as the one you push to). If it’s `main`, either:
   - Change the connection to use `master`, or  
   - Start pushing your code to `main` so Shopify receives updates.
5. If there’s an **“Update from GitHub”** (or similar) action, use it once to pull the latest from that branch.

If the connected branch is correct and you still don’t see updates, treat the connection as “Shopify’s copy” and use **Option A** to overwrite it with your repo.

---

## Option C: Re-connect from GitHub (fresh copy from repo)

1. **Online Store → Themes**.
2. **Add theme → Connect from GitHub**.
3. Choose repo **kylejuris1/shopify-theme** and branch **master**.
4. Connect. Shopify creates a **new** theme from the repo.
5. **Customize** or **Publish** that new theme. The old theme (wrong files) can be removed or left unpublished.

This gives you a theme that exactly matches GitHub at the time of connection. After that, either rely on the connection (and the correct branch) or use **Option A** whenever you want to force Shopify to match your local/ GitHub files.

---

## Summary

- **“Theme on Shopify is not using the same files as GitHub”** is usually due to branch mismatch or edits made in Shopify that were synced back to GitHub.
- **Most reliable way to make Shopify match the repo:** use **Shopify CLI** and run `shopify theme push` from `c:\Users\taize\Documents\Apps\Shopify` (Option A).
- Always push your code to GitHub first, then run `shopify theme push` so the store gets the same version as the repo.
