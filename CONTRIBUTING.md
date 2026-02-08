# Contributing to ChefAI Marketing Page

First off, thank you for considering contributing to ChefAI! 🎉

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report:

- **Use a clear title** describing the problem
- **Describe exact steps** to reproduce
- **Provide screenshots** if applicable
- **Include your environment** (OS, browser, Node version)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues:

- **Use a clear title** for the suggestion
- **Provide detailed description** of the enhancement
- **Explain why** this would be useful

### 🔧 Pull Requests

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development Setup

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/chefai-marketing.git

# Install dependencies
npm install

# Start dev server
npm run dev
```

## Code Style

### TypeScript
- Use TypeScript for all new files
- Avoid `any` types when possible
- Export types for reusable components

### React Components
- Use functional components with hooks
- Add `"use client"` for interactive components
- Keep components focused and reusable

### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Maintain consistent spacing (4, 8, 16, 24, 32)

### Naming Conventions
- Components: PascalCase (`Hero.tsx`)
- Files: kebab-case (`use-favorites.ts`)
- CSS classes: kebab-case

## Commit Messages

Follow conventional commits:

```
feat: add new testimonials section
fix: correct mobile navigation bug
docs: update README with new instructions
style: format code with prettier
refactor: simplify Hero component logic
test: add tests for Features component
```

## Testing

Before submitting PR:

```bash
# Build check
npm run build

# Lint check
npm run lint

# Type check
npx tsc --noEmit
```

## Adding New Features

### New Section Component

1. Create component in `components/`
2. Add animations with Framer Motion
3. Ensure responsive design
4. Update `app/page.tsx`
5. Test on mobile & desktop

### Example

```tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function NewSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        {/* Content */}
      </motion.div>
    </section>
  );
}
```

## Documentation

When adding features, update:
- [ ] README.md
- [ ] CUSTOMIZATION.md (if applicable)
- [ ] Code comments for complex logic

## Questions?

Feel free to ask in:
- GitHub Discussions
- Issues (tag: question)
- Email: hello@chefai.app

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior

- Harassment or discriminatory language
- Trolling or insulting comments
- Publishing others' private information
- Other unprofessional conduct

---

Thank you for contributing! 🙌

Your improvements help make ChefAI better for everyone.
