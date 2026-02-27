# Quick Start Guide

Get your Run Witch Run website up and running in minutes!

## 🚀 Local Development (5 minutes)

### 1. Install Dependencies
```bash
cd run-witch-run-website
pnpm install
```

### 2. Start Development Server
```bash
pnpm dev
```

Your website is now running at `http://localhost:3000` 🎉

### 3. Open in Browser
- Click the link in terminal, or
- Manually visit `http://localhost:3000`

## 🎮 Test the Game

1. Scroll down to the "Play Now" section
2. Click the **Play Game** button
3. The game will load in an iframe
4. Use arrow keys or WASD to move
5. Press Space to jump

## 📝 Make Changes

The website uses **Hot Module Replacement (HMR)** - changes appear instantly!

### Edit the Homepage
- File: `client/src/pages/Home.tsx`
- Change title, description, colors, etc.
- Save and see changes immediately

### Edit Styles
- File: `client/src/index.css`
- Modify colors, fonts, animations
- Changes apply instantly

### Edit Game Embed
- File: `client/src/pages/Home.tsx` (search for `iframe`)
- Modify game size, position, or appearance

## 🏗️ Build for Production

```bash
pnpm build
```

This creates an optimized `dist/` folder ready for deployment.

## 🌐 Deploy to Vercel

### Quick Deploy (1 click)

1. Push to GitHub:
```bash
git add .
git commit -m "Your changes"
git push
```

2. Go to [Vercel.com](https://vercel.com)
3. Click **Add New** → **Project**
4. Select your GitHub repository
5. Click **Deploy**

Done! Your site is live! ✨

## 📁 Project Structure

```
client/
├── public/
│   ├── game/          ← Embedded game files
│   └── screenshots/   ← Game screenshots
├── src/
│   ├── pages/
│   │   └── Home.tsx   ← Main page (edit this!)
│   ├── index.css      ← Global styles (edit this!)
│   └── App.tsx        ← Routes & layout
└── index.html         ← HTML template
```

## 🎨 Customize Your Site

### Change Colors
Edit `client/src/index.css`:
```css
:root {
  --primary: #6B46C1;      /* Purple */
  --accent: #F97316;       /* Orange */
  --background: #0F172A;   /* Dark blue */
}
```

### Change Fonts
Edit `client/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap" rel="stylesheet" />
```

### Add Your Own Content
Edit `client/src/pages/Home.tsx` to customize:
- Headings and descriptions
- Feature cards
- Colors and styling
- Links and buttons

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
pnpm dev -- --port 3001
```

### Game Not Loading
1. Check browser console (F12)
2. Verify `client/public/game/index.html` exists
3. Check iframe path in `Home.tsx`

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)
- [Vercel Docs](https://vercel.com/docs)

## ✅ Deployment Checklist

Before deploying:
- [ ] Game loads and plays locally
- [ ] Website looks good on mobile
- [ ] All links work
- [ ] No console errors
- [ ] Build completes without errors

```bash
# Final check before deployment
pnpm check  # Type checking
pnpm build  # Production build
```

## 🎉 You're Ready!

Your website is ready to share with the world. Follow the [Deployment Guide](./DEPLOYMENT.md) to go live on Vercel!

---

**Need help?** Check the [README.md](./README.md) for more details.
