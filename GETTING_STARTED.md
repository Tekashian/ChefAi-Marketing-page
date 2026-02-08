# 🎬 Getting Started with ChefAI Marketing Page

Welcome! This guide will take you from zero to deployed in under 10 minutes.

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [First Run](#first-run)
4. [Understanding the Structure](#understanding-the-structure)
5. [Making Your First Change](#making-your-first-change)
6. [Deployment](#deployment)
7. [What's Next](#whats-next)

## Prerequisites

Before you begin, ensure you have:

- ✅ **Node.js 18+** installed ([Download](https://nodejs.org/))
- ✅ **Git** for version control ([Download](https://git-scm.com/))
- ✅ **Code Editor** (VS Code recommended)
- ✅ **Terminal/Command Line** access

**Quick Check:**

```bash
node --version  # Should show v18.0.0+
npm --version   # Should show 9.0.0+
git --version   # Should show 2.0.0+
```

## Installation

### 1. Open Terminal

Navigate to the project:

```bash
cd ChefAiMarketingPage
```

### 2. Install Dependencies

```bash
npm install
```

⏱️ Takes about 30-60 seconds.

You should see:

```
added 345 packages in 45s
```

## First Run

### Start Development Server

```bash
npm run dev
```

You'll see:

```
✓ Ready in 2.5s
○ Local:   http://localhost:3000
```

### Open in Browser

Visit: **http://localhost:3000**

🎉 **You should see the ChefAI landing page!**

## Understanding the Structure

```
ChefAiMarketingPage/
│
├── app/                    # 📄 Pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
│
├── components/             # 🧩 Reusable components
│   ├── Navbar.tsx         # Top navigation
│   ├── Hero.tsx           # Main hero section
│   ├── Features.tsx       # Features grid
│   ├── HowItWorks.tsx     # Process steps
│   ├── FutureVision.tsx   # Future features
│   ├── CTA.tsx            # Call to action
│   └── Footer.tsx         # Footer section
│
├── hooks/                  # 🪝 Custom React hooks
│   ├── useIsMobile.ts     # Detect mobile
│   └── useScrollPosition.ts # Track scrolling
│
├── lib/                    # 🛠️ Utilities
│   ├── utils.ts           # Helper functions
│   └── metadata.ts        # SEO metadata
│
├── public/                 # 📁 Static files
│   ├── logo.svg           # Logo image
│   ├── robots.txt         # SEO robots
│   └── manifest.json      # PWA manifest
│
└── tailwind.config.ts      # 🎨 Tailwind config
```

### Key Files to Know

| File                 | Purpose                  |
| -------------------- | ------------------------ |
| `app/page.tsx`       | Main landing page        |
| `components/*.tsx`   | Each section of the page |
| `tailwind.config.ts` | Colors and design tokens |
| `globals.css`        | Global styles            |
| `package.json`       | Dependencies             |

## Making Your First Change

Let's change the hero heading!

### 1. Open Hero Component

Open `components/Hero.tsx` in your editor.

### 2. Find the Heading

Around line 45-50, you'll see:

```tsx
<motion.h1>
  Your Intelligent
  <br />
  <span className="text-gradient">Culinary Assistant</span>
</motion.h1>
```

### 3. Change the Text

Update it to:

```tsx
<motion.h1>
  Welcome to
  <br />
  <span className="text-gradient">My Awesome Site</span>
</motion.h1>
```

### 4. Save the File

The page will automatically update! 🎉

That's **hot reload** in action.

## Customization Quick Wins

### Change Primary Color

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#FF6B35",  // 👈 Change this
  },
}
```

### Update Features

Edit `components/Features.tsx`:

```typescript
const features = [
  {
    icon: BookOpen,
    title: "Your Feature", // 👈 Change this
    description: "Your description", // 👈 And this
  },
  // ... more features
];
```

### Modify Footer Links

Edit `components/Footer.tsx`:

```typescript
const footerLinks = {
  Product: ["Features", "Pricing", "..."], // 👈 Edit these
  Company: ["About", "Blog", "..."],
};
```

## Deployment

### Quick Deploy to Vercel (2 minutes)

#### Option 1: GitHub + Vercel

1. **Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPO_URL
git push -u origin main
```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"

✅ **Live in 60 seconds!**

#### Option 2: Vercel CLI

```bash
# Install CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts
```

### Production Build

Before deploying, test production build:

```bash
npm run build
npm start
```

Visit http://localhost:3000 to see production version.

## What's Next?

### Immediate Next Steps

1. ✅ **Customize Content**
   - Update hero text
   - Change feature descriptions
   - Add your own images

2. ✅ **Update Branding**
   - Change colors in `tailwind.config.ts`
   - Update logo in `public/`
   - Modify metadata in `app/layout.tsx`

3. ✅ **Deploy**
   - Push to GitHub
   - Connect to Vercel
   - Get your live URL

### Going Further

- 📖 Read [CUSTOMIZATION.md](./CUSTOMIZATION.md) for deep dive
- 🎨 Learn Tailwind CSS ([tailwindcss.com](https://tailwindcss.com))
- 🎬 Add more animations with Framer Motion
- 📊 Integrate analytics (Google Analytics, Plausible)
- 🌐 Add custom domain

## Quick Reference

### Common Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Check for errors
```

### File Organization

```
To change...                Edit this file...
─────────────────────────────────────────────
Hero section               components/Hero.tsx
Features                   components/Features.tsx
Navigation                 components/Navbar.tsx
Footer                     components/Footer.tsx
Colors                     tailwind.config.ts
SEO metadata               app/layout.tsx
```

### Helpful Resources

- 📘 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Tailwind Docs](https://tailwindcss.com/docs)
- 🎬 [Framer Motion](https://www.framer.com/motion/)
- 🎭 [Lucide Icons](https://lucide.dev/)

## Common Questions

### How do I add a new section?

1. Create component in `components/`
2. Import in `app/page.tsx`
3. Add `<YourSection />` between other sections

### How do I change animations?

Edit the `motion` props in component files:

```tsx
<motion.div
  animate={{ y: [0, -20, 0] }}  // 👈 Customize this
  transition={{ duration: 2 }}   // 👈 And this
>
```

### Where are the images?

- Logo: `public/logo.svg`
- Add more: Put in `public/` folder
- Use: `<Image src="/your-image.jpg" />`

### How do I add dark mode?

See [CUSTOMIZATION.md](./CUSTOMIZATION.md) section on dark mode.

## Need Help?

### Documentation

- 📖 [README.md](./README.md) - Full documentation
- ⚡ [QUICKSTART.md](./QUICKSTART.md) - Quick start guide
- 🔧 [INSTALLATION.md](./INSTALLATION.md) - Installation details
- 🎨 [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Customization guide
- 🚀 [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide

### Support

- 💬 GitHub Issues
- 📧 hello@chefai.app
- 🐦 [@ChefAI](https://twitter.com/chefai)

---

## Checklist

Before you start customizing, make sure:

- [ ] Development server runs (`npm run dev`)
- [ ] Page loads at http://localhost:3000
- [ ] Hot reload works (edit a file, see changes)
- [ ] No errors in terminal or browser console
- [ ] You understand the file structure

**Ready to customize?** Pick a component and start editing! 🎨

---

<div align="center">

**Happy coding!** 👨‍💻

Made with ❤️ for developers everywhere

</div>
