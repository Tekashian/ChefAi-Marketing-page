# 🚀 ChefAI Marketing Page - Installation Guide

## System Requirements

- **Node.js**: 18.0 or higher
- **npm**: 9.0 or higher (or yarn/pnpm)
- **Operating System**: Windows, macOS, or Linux
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

## Step-by-Step Installation

### 1. Check Node.js Version

```bash
node --version
# Should show v18.0.0 or higher
```

If you don't have Node.js or need to update:

- Download from [nodejs.org](https://nodejs.org/)
- Or use [nvm](https://github.com/nvm-sh/nvm) (recommended)

```bash
# Install Node 18 using nvm
nvm install 18
nvm use 18
```

### 2. Navigate to Project Directory

```bash
cd ChefAiMarketingPage
```

### 3. Install Dependencies

Choose your preferred package manager:

#### Using npm (default)

```bash
npm install
```

#### Using yarn

```bash
yarn install
```

#### Using pnpm (fastest)

```bash
pnpm install
```

**Expected output:**

```
added 345 packages, and audited 346 packages in 45s
```

**Installation time:** ~30-60 seconds (depending on internet speed)

### 4. Verify Installation

```bash
# Check if node_modules exists
ls node_modules

# Check if .next folder doesn't exist yet (will be created on build)
```

## Running the Development Server

```bash
npm run dev
```

**Expected output:**

```
  ▲ Next.js 14.2.0
  - Local:        http://localhost:3000
  - Network:      http://192.168.1.X:3000

 ✓ Ready in 2.5s
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
# Create optimized production build
npm run build

# Expected output:
# Route (app)              Size     First Load JS
# ┌ ○ /                   5.2 kB         95 kB
# + First Load JS shared  90 kB
#   ├ chunks/...          45 kB
#   └ other shared chunks 45 kB
#
# ○ (Static)  prerendered as static HTML
#
# ✓ Compiled successfully
```

### Run Production Build Locally

```bash
npm start
# Starts server on http://localhost:3000
```

## Troubleshooting

### Issue: Port 3000 already in use

**Solution:**

```bash
# Windows
npx kill-port 3000

# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

### Issue: Module not found errors

**Solution:**

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Issue: TypeScript errors

**Solution:**

```bash
# Check for type errors
npx tsc --noEmit

# If errors persist, update TypeScript
npm install typescript@latest
```

### Issue: Tailwind styles not applying

**Solution:**

```bash
# Clear Next.js cache
rm -rf .next

# Restart dev server
npm run dev
```

### Issue: Framer Motion animations not working

**Solution:**

```bash
# Verify framer-motion is installed
npm list framer-motion

# If not found, install it
npm install framer-motion
```

## Dependencies Overview

### Core

- **next**: React framework
- **react**: UI library
- **react-dom**: React DOM renderer
- **typescript**: Type safety

### Styling

- **tailwindcss**: Utility-first CSS
- **autoprefixer**: CSS vendor prefixes
- **postcss**: CSS transformations

### Animations

- **framer-motion**: Animation library

### Icons & Utilities

- **lucide-react**: Icon library
- **clsx**: Conditional classes
- **tailwind-merge**: Merge Tailwind classes

## Updating Dependencies

```bash
# Check for outdated packages
npm outdated

# Update all dependencies
npm update

# Update specific package
npm install package-name@latest
```

## Environment Setup (Optional)

If you need environment variables:

```bash
# Copy example file
cp .env.example .env.local

# Edit .env.local with your values
```

## IDE Setup

### VS Code (Recommended)

Install recommended extensions:

- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript and JavaScript Language Features

VS Code will prompt to install these when opening the project.

### Settings

The project includes `.vscode/settings.json` for:

- Format on save
- ESLint auto-fix
- Tailwind IntelliSense

## Verification Checklist

After installation, verify everything works:

- [ ] `npm run dev` starts without errors
- [ ] Page loads at http://localhost:3000
- [ ] Animations are smooth
- [ ] No console errors in browser
- [ ] Hot reload works (edit a file and see changes)
- [ ] `npm run build` completes successfully
- [ ] `npm run lint` shows no errors

## Next Steps

Once installed:

1. **Customize Content**: Edit files in `components/`
2. **Change Colors**: Update `tailwind.config.ts`
3. **Add Features**: Create new components
4. **Deploy**: Follow [DEPLOYMENT.md](./DEPLOYMENT.md)

## Getting Help

- **Documentation**: Check [README.md](./README.md)
- **Quick Start**: See [QUICKSTART.md](./QUICKSTART.md)
- **Issues**: [GitHub Issues](https://github.com/chefai/issues)
- **Email**: hello@chefai.app

---

**Installation complete!** 🎉

Start customizing your ChefAI marketing page.
