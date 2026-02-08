# 🍳 ChefAI Marketing Page

![ChefAI Banner](https://img.shields.io/badge/ChefAI-Marketing%20Page-FF6B35?style=for-the-badge&logo=chef&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

A stunning, animated marketing landing page for **ChefAI** - an intelligent culinary assistant powered by AI. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with gradient accents
- ⚡ **Smooth Animations** - Framer Motion powered animations throughout
- 📱 **Fully Responsive** - Mobile-first design that looks great on all devices
- 🚀 **Optimized Performance** - Fast loading and smooth scrolling
- 🎯 **SEO Ready** - Built-in metadata and OpenGraph tags
- 🌐 **Ready for Production** - Optimized for Vercel deployment

## 🎯 Sections

1. **Hero** - Eye-catching introduction with animated CTAs
2. **Features** - 8 core features with icons and descriptions
3. **How It Works** - 4-step process visualization
4. **Future Vision** - 6 upcoming AI-powered features
5. **CTA** - Final call-to-action with trust badges
6. **Footer** - Links, newsletter signup, and social media

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone or navigate to the project directory:**

```bash
cd ChefAiMarketingPage
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Run the development server:**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be live in seconds!

### One-Click Deploy

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎨 Color Palette

```css
Primary: #FF6B35 (Orange)
Secondary: #4ECDC4 (Turquoise)
Dark: #1A1A1D (Near Black)
Light: #F7F7F7 (Off White)
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## 📁 Project Structure

```
ChefAiMarketingPage/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features grid
│   ├── HowItWorks.tsx      # Process steps
│   ├── FutureVision.tsx    # Future features
│   ├── CTA.tsx             # Call to action
│   └── Footer.tsx          # Footer section
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
└── package.json            # Dependencies
```

## 🎯 Key Features Implemented

### Animations
- ✅ Smooth scroll-triggered animations
- ✅ Hover effects on cards and buttons
- ✅ Floating elements in hero section
- ✅ Animated background gradients
- ✅ Staggered list animations
- ✅ Page transition effects

### Responsiveness
- ✅ Mobile-first approach
- ✅ Tablet optimizations
- ✅ Desktop enhancements
- ✅ Flexible grid layouts
- ✅ Responsive typography

### Performance
- ✅ Optimized images (Next/Image)
- ✅ Code splitting
- ✅ Lazy loading animations
- ✅ Minimal bundle size
- ✅ Fast page loads

## 🔮 Future Enhancements

The marketing page highlights upcoming features:

- 🧠 **AI Recipe Analysis** - Michelin-star recipes from available ingredients
- 🎤 **Voice Control** - Complete hands-free cooking experience
- 📸 **Ingredient Recognition** - Photo-based fridge scanning
- ⭐ **Personalized Meal Plans** - AI-driven custom meal planning
- ⚡ **Real-time Assistance** - Live cooking guidance and tips

## 📝 Customization

### Update Colors

Edit `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#YOUR_COLOR",
      secondary: "#YOUR_COLOR",
    },
  },
}
```

### Add New Sections

Create a new component in `components/` and import it in `app/page.tsx`.

### Modify Content

All text content is in the respective component files - easy to update without affecting structure.

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 💬 Contact

For questions or feedback about ChefAI:

- Email: hello@chefai.app
- Twitter: [@ChefAI](https://twitter.com/chefai)
- GitHub: [ChefAI](https://github.com/chefai)

---

<div align="center">

**[View Demo](https://chefai-marketing.vercel.app)** • **[Report Bug](https://github.com/chefai/issues)** • **[Request Feature](https://github.com/chefai/issues)**

Made with ❤️ for home chefs everywhere

</div>
