# 🚀 Deploying ChefAI Marketing Page to Vercel

## Method 1: Vercel Dashboard (Recommended)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: ChefAI marketing page"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Import to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"
6. ✅ Your site is live in ~1 minute!

## Method 2: Vercel CLI

### Install Vercel CLI
```bash
npm i -g vercel
```

### Deploy
```bash
# Login (first time only)
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

## Method 3: GitHub Actions (Auto-Deploy)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## Environment Variables

No environment variables needed for this marketing page! 🎉

## Custom Domain Setup

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your custom domain (e.g., `chefai.com`)
4. Update your DNS records as instructed
5. SSL certificate auto-configured ✅

## Performance Optimization

Already included:
- ✅ Next.js Image Optimization
- ✅ Automatic Code Splitting
- ✅ Static Generation (ISR)
- ✅ Edge Caching
- ✅ Brotli Compression

Expected Lighthouse Score: **95-100** 🚀

## Troubleshooting

### Build fails?
```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run lint
```

### Slow build?
- Vercel builds are typically 20-40 seconds
- First build may take longer (installing dependencies)

### Need help?
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)

---

## Post-Deploy Checklist

- [ ] Verify all animations work
- [ ] Test mobile responsiveness
- [ ] Check all navigation links
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Share your live URL! 🎉

**Your marketing page is now live!** 🚀
