# Deployment Guide

This guide will help you deploy the **Run Witch Run** website to GitHub and Vercel.

## 📤 Step 1: Push to GitHub

### Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and log in to your account
2. Click the **+** icon in the top right and select **New repository**
3. Name your repository: `run-witch-run-website`
4. Add a description: "A beautiful website for the Run Witch Run endless runner game"
5. Choose **Public** (recommended for open-source projects)
6. Click **Create repository**

### Push Your Code

```bash
# Navigate to your project directory
cd run-witch-run-website

# Add the remote repository
git remote add origin https://github.com/YOUR_USERNAME/run-witch-run-website.git

# Rename branch to main (if needed)
git branch -M main

# Push your code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## 🚀 Step 2: Deploy to Vercel

### Option A: Using Vercel Dashboard (Recommended)

1. Go to [Vercel.com](https://vercel.com) and sign up/log in
2. Click **Add New** → **Project**
3. Select **Import Git Repository**
4. Paste your GitHub repository URL: `https://github.com/YOUR_USERNAME/run-witch-run-website`
5. Click **Import**
6. Vercel will auto-detect your configuration:
   - **Framework Preset**: Vite
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
7. Click **Deploy**

Your website will be live in seconds!

### Option B: Using Vercel CLI

```bash
# Install Vercel CLI (if not already installed)
npm i -g vercel

# Deploy from your project directory
cd run-witch-run-website
vercel

# Follow the prompts to connect your GitHub account and deploy
```

## 🎯 What Gets Deployed

The deployment includes:
- ✅ React website with all pages and components
- ✅ Embedded Run Witch Run game
- ✅ Game screenshots and assets
- ✅ Responsive design for all devices
- ✅ Optimized build with Vite

## 📊 Post-Deployment

### Verify Your Deployment

1. Vercel will provide you with a live URL (e.g., `https://run-witch-run-website.vercel.app`)
2. Visit the URL to test your website
3. Verify that:
   - All pages load correctly
   - The game embeds and plays properly
   - Navigation works smoothly
   - Responsive design looks good on mobile

### Custom Domain (Optional)

To add a custom domain:

1. In Vercel Dashboard, go to your project
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for DNS propagation (usually 24-48 hours)

## 🔄 Continuous Deployment

After your initial setup:

1. Make changes to your code locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Your commit message"
   git push
   ```
3. Vercel automatically detects the push and redeploys your website
4. Your changes are live within seconds!

## 🛠️ Troubleshooting

### Build Fails on Vercel

If your build fails:

1. Check the build logs in Vercel Dashboard
2. Common issues:
   - Missing dependencies: Run `pnpm install` locally
   - TypeScript errors: Run `pnpm check` locally
   - Environment variables: Add them in Vercel Settings

### Game Not Loading

If the embedded game doesn't load:

1. Check browser console for errors (F12)
2. Verify game files are in `client/public/game/`
3. Check that the iframe path is correct in `Home.tsx`

### Performance Issues

To optimize:

1. Vercel automatically optimizes your build
2. Use Vercel Analytics to monitor performance
3. Consider enabling Image Optimization for screenshots

## 📝 Environment Variables

If you need environment variables:

1. Create a `.env.local` file locally (not committed to git)
2. In Vercel Dashboard:
   - Go to **Settings** → **Environment Variables**
   - Add your variables
   - Redeploy for changes to take effect

## 🔐 Security

- Keep your GitHub token secure
- Don't commit `.env` files with secrets
- Use Vercel's Environment Variables for sensitive data
- Enable branch protection on main branch

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **GitHub Help**: https://docs.github.com
- **Project Issues**: Open an issue on your GitHub repository

---

**Your website is now live! 🎉**
