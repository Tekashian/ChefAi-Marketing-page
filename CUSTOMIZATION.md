# 🎨 Customization Guide

## Changing Colors

### Primary & Secondary Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: "#YOUR_PRIMARY_COLOR",
    light: "#LIGHTER_SHADE",
    dark: "#DARKER_SHADE",
  },
  secondary: {
    DEFAULT: "#YOUR_SECONDARY_COLOR",
    light: "#LIGHTER_SHADE",
    dark: "#DARKER_SHADE",
  },
}
```

### Update Gradients

Find gradient classes throughout components:
- `bg-gradient-to-r from-primary to-secondary`
- `text-gradient` (defined in globals.css)

## Adding New Sections

### 1. Create Component

Create `components/YourSection.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function YourSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Your content */}
      </motion.div>
    </section>
  );
}
```

### 2. Import in Page

Edit `app/page.tsx`:

```tsx
import YourSection from "@/components/YourSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <YourSection /> {/* Add here */}
      <Features />
      {/* ... */}
    </main>
  );
}
```

## Modifying Content

### Hero Section

Edit `components/Hero.tsx`:
- Main heading: Line ~45
- Subheading: Line ~60
- CTA buttons: Line ~70

### Features

Edit `components/Features.tsx`:
- Features array: Line ~18
- Add/remove features
- Change icons from `lucide-react`

### Footer Links

Edit `components/Footer.tsx`:
- Social links: Line ~10
- Footer sections: Line ~12

## Adding Animations

### Hover Animation

```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -10 }}
  transition={{ duration: 0.3 }}
>
  {/* Content */}
</motion.div>
```

### Scroll Animation

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6 }}
>
  {/* Content */}
</motion.div>
```

### Continuous Animation

```tsx
<motion.div
  animate={{
    y: [0, -20, 0],
    rotate: [0, 5, 0],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
>
  {/* Content */}
</motion.div>
```

## Changing Fonts

### Using Google Fonts

Edit `app/layout.tsx`:

```tsx
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  weight: ["400", "600", "700"],
  subsets: ["latin"] 
});
```

### Custom Fonts

1. Add font files to `public/fonts/`
2. Import in `globals.css`:

```css
@font-face {
  font-family: 'YourFont';
  src: url('/fonts/YourFont.woff2') format('woff2');
}

body {
  font-family: 'YourFont', sans-serif;
}
```

## Adding Images

### Hero Image

Replace placeholder in `components/Hero.tsx`:

```tsx
<Image
  src="/hero-image.png"
  alt="ChefAI App"
  width={1200}
  height={800}
  priority
/>
```

### Optimized Images

Always use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  className="rounded-lg"
/>
```

## SEO Optimization

### Update Metadata

Edit `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your description",
  keywords: "your, keywords, here",
};
```

### Add Structured Data

Create `app/structured-data.json`:

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ChefAI",
  "applicationCategory": "LifestyleApplication",
  "offers": {
    "@type": "Offer",
    "price": "0"
  }
}
```

## Performance Tips

### Optimize Images
- Use WebP format
- Compress before upload
- Use appropriate sizes

### Reduce Bundle Size
- Import only needed icons
- Use dynamic imports for heavy components

```tsx
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Lighthouse Score

Run audit:
```bash
npm run build
npm start
# Open Chrome DevTools > Lighthouse
```

Target scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Common Issues

### Hydration Error
- Ensure client/server markup matches
- Use `"use client"` for interactive components

### Animation Not Working
- Check Framer Motion is installed
- Verify component has `"use client"`

### Styles Not Applied
- Clear `.next` folder: `rm -rf .next`
- Restart dev server

---

Need more help? Check the [README.md](./README.md) or open an issue!
