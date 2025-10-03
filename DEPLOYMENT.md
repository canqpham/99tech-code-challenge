# Deployment Guide - 99tech Code Challenge

## Overview
This project is configured to automatically deploy to GitHub Pages when pushing to the `main` branch.

## Prerequisites
- ✅ GitHub repository created
- ✅ GitHub Pages enabled in repository settings
- ✅ GitHub Actions workflow configured

## Deployment Steps

### 1. Enable GitHub Pages
1. Go to your repository on GitHub
2. Navigate to: `Settings` → `Pages`
3. Under "Source", select: **GitHub Actions**
4. Save the settings

### 2. Push Your Code
```bash
# Add all changes
git add .

# Commit your changes
git commit -m "feat: complete 99tech code challenge implementation"

# Push to main branch (triggers deployment)
git push origin main
```

### 3. Monitor Deployment
1. Go to the `Actions` tab in your repository
2. Watch the "Deploy Vite App to GitHub Pages" workflow
3. Wait for both jobs (build & deploy) to complete (usually 1-2 minutes)

### 4. Access Your Deployed App
Once deployed, your app will be available at:
```
https://canqpham.github.io/99tech-code-challenge/
```

## Automatic Deployment

The app automatically deploys when:
- ✅ You push commits to `main` branch
- ✅ You manually trigger the workflow from Actions tab

## Build Process

The GitHub Actions workflow:
1. Checks out code
2. Sets up Node.js 18
3. Installs dependencies with `npm ci`
4. Runs `npm run build`
5. Uploads `dist` folder
6. Deploys to GitHub Pages

## Local Testing

Before deploying, test locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

Then visit `http://localhost:4173` to see how it will look in production.

## Configuration Files

### vite.config.ts
```typescript
base: "/99tech-code-challenge/"  // Must match repository name
```

### .github/workflows/jekyll-gh-pages.yml
```yaml
- run: npm run build  // Builds to ./dist
- path: ./dist        // Deploys dist folder
```

## Troubleshooting

### Issue: 404 on GitHub Pages
**Solution:** Check that `base` in `vite.config.ts` matches your repository name.

### Issue: Blank page after deployment
**Solution:** 
1. Check browser console for asset loading errors
2. Verify `base` path is correct
3. Ensure all imports use relative paths

### Issue: Workflow fails
**Solution:**
1. Check Actions tab for error details
2. Verify `npm run build` works locally
3. Check Node.js version compatibility

### Issue: Assets not loading
**Solution:**
1. Ensure `base` path has leading and trailing slashes
2. Clear browser cache
3. Check Network tab in DevTools

## Environment-Specific Base Path

If you want different base paths for dev vs production:

```typescript
// vite.config.ts
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? '/99tech-code-challenge/' 
    : '/',
  // ... rest of config
});
```

## Manual Deployment

To manually trigger deployment:
1. Go to `Actions` tab
2. Click "Deploy Vite App to GitHub Pages"
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow" button

## Project Structure

```
99tech-code-challenge/
├── .github/
│   └── workflows/
│       └── jekyll-gh-pages.yml   # Deployment workflow
├── dist/                          # Build output (gitignored)
├── src/                           # Source code
├── vite.config.ts                 # Vite configuration
└── package.json                   # Project dependencies
```

## Features Deployed

✅ **Problem 1:** Three ways to sum to n
- Mathematical formula O(1)
- Recursion O(n)
- Loop iteration O(n)

✅ **Problem 2:** Currency Swap Form
- Dynamic API data fetching
- Real-time currency conversion
- 29+ currencies supported
- Optimized performance with React.memo

✅ **Problem 3:** Messy React Code Review
- Code analysis and improvements

## Performance Optimizations

- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification
- ✅ Asset optimization
- ✅ React.memo for components
- ✅ useMemo for expensive calculations
- ✅ useCallback for stable references

## Support

If deployment fails, check:
1. GitHub Actions logs
2. Repository settings → Pages
3. Branch protection rules
4. GITHUB_TOKEN permissions

## Success Checklist

- [ ] Code pushed to main branch
- [ ] GitHub Pages enabled
- [ ] Workflow completed successfully
- [ ] App accessible at GitHub Pages URL
- [ ] All features working correctly
- [ ] No console errors
- [ ] Assets loading properly

---

**Last Updated:** October 2, 2025  
**Repository:** https://github.com/canqpham/99tech-code-challenge  
**Live Demo:** https://canqpham.github.io/99tech-code-challenge/
