# ⚡ Quick Start Guide

Get your ChefAI marketing page running in 5 minutes!

## Prerequisites

- **Node.js 18+** - [Download](https://nodejs.org/)
- **Code Editor** - VS Code recommended
- **Terminal** - Command line access

## Setup Steps

### 1️⃣ Install Dependencies

```bash
cd ChefAiMarketingPage
npm install
```

Wait for packages to install (~1-2 minutes).

### 2️⃣ Start Development Server

```bash
npm run dev
```

You should see:
```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

### 3️⃣ Open in Browser

Navigate to: **http://localhost:3000**

You should see the ChefAI landing page! 🎉

## What You Get

✅ **Animated Landing Page** with 6 sections:
- Hero with CTA
- Features showcase
- How It Works
- Future Vision
- Final CTA
- Footer

✅ **Fully Responsive** - Works on mobile, tablet, desktop

✅ **Production Ready** - Deploy to Vercel immediately

## Quick Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Deployment
npm run lint         # Check for errors
vercel               # Deploy to Vercel
```

## Making Changes

### ✏️ Edit Content

All content is in `components/` folder:

- **Hero Text**: `components/Hero.tsx` (line 45-60)
- **Features**: `components/Features.tsx` (line 18)
- **Colors**: `tailwind.config.ts` (line 11)

Save file → Changes appear instantly (Hot Reload)

### 🎨 Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#FF6B35",  // Change this
    // ...
  },
}
```

### ➕ Add Section

1. Create `components/NewSection.tsx`
2. Import in `app/page.tsx`
3. Add `<NewSection />` to page

## Deploy to Vercel (2 minutes)

### Option 1: GitHub + Vercel Dashboard

```bash
# Push to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your repo
4. Click "Deploy"
5. ✅ **Live in 60 seconds!**

### Option 2: Vercel CLI

```bash
npm i -g vercel    # Install CLI
vercel login       # Login
vercel --prod      # Deploy
```

Your site is live! 🚀

## Next Steps

- [ ] Customize colors and content
- [ ] Add your own images
- [ ] Update metadata for SEO
- [ ] Connect custom domain
- [ ] Add analytics (optional)

## Need Help?

### Common Issues

**Port 3000 already in use?**
```bash
# Kill process on port 3000
npx kill-port 3000
npm run dev
```

**Build errors?**
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run dev
```

**Animations not working?**
- Make sure framer-motion is installed
- Check component has `"use client"` directive

### Documentation

- 📖 [Full README](./README.md)
- 🎨 [Customization Guide](./CUSTOMIZATION.md)
- 🚀 [Deployment Guide](./DEPLOYMENT.md)

### Support

- GitHub Issues: [Create Issue](https://github.com/chefai/issues)
- Email: hello@chefai.app

---

## Development Tips

### Hot Reload
Save any file → Browser updates automatically

### TypeScript
Get intelligent autocomplete and type checking

### Tailwind
Use utility classes: `className="bg-primary text-white p-4"`

### Framer Motion
Add animations with `motion` components:
```tsx
<motion.div whileHover={{ scale: 1.1 }}>
  Hover me!
</motion.div>
```

---

## File Structure

```
ChefAiMarketingPage/
├── app/
│   └── page.tsx           👈 Main page
├── components/
│   ├── Hero.tsx          👈 Hero section
│   ├── Features.tsx      👈 Features grid
│   └── ...               👈 Other sections
├── tailwind.config.ts    👈 Colors & styles
└── package.json          👈 Dependencies
```

---

**You're all set!** Start customizing and make it your own. 🎨

Questions? Check the full [README.md](./README.md) or [open an issue](https://github.com/chefai/issues).

Happy coding! 👨‍💻
