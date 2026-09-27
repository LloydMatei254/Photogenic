# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub** ✅ (Already done!)
   - Your repo: https://github.com/LloydMatei254/Photogenic

2. **Deploy to Vercel:**
   - Visit: https://vercel.com/new
   - Sign in with GitHub
   - Click "Import Project"
   - Select your repository: `LloydMatei254/Photogenic`
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your site will be live at: `https://photogenic-[random].vercel.app`

3. **Redeploy after changes:**
   - Vercel automatically redeploys when you push to GitHub
   - Or manually redeploy from Vercel dashboard

## Troubleshooting Deployment Issues

### Issue: Landing page not showing / Images not loading

**Solution 1: Clear Build Cache**
1. Go to your Vercel project dashboard
2. Settings → General
3. Scroll to "Build & Development Settings"
4. Click "Clear Cache"
5. Redeploy

**Solution 2: Check Image Paths**
- All images should be in `public/images/`
- Paths in code should start with `/images/` (no "public")
- Example: `/images/hero/hero-main.jpg`

**Solution 3: Use Actual Images**
Current placeholder images are minimal JPGs. For better results:
1. Add your actual photographs to `public/images/`
2. Follow the structure in `public/images/README.md`
3. Push changes to GitHub
4. Vercel will auto-redeploy

### Issue: Build fails on Vercel

**Check Build Logs:**
1. Go to Vercel dashboard
2. Click your deployment
3. View "Building" or "Deployment" logs
4. Look for error messages

**Common fixes:**
- Ensure all dependencies are in `package.json`
- Run `npm run build` locally to test
- Check for TypeScript errors
- Verify all image files exist

### Issue: Environment variables not working

1. Go to Vercel project settings
2. Environment Variables
3. Add your variables (e.g., API keys)
4. Redeploy

## Deploy to Other Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### AWS Amplify

1. Go to AWS Amplify Console
2. Connect your GitHub repository
3. Select branch: `main`
4. Build settings (auto-detected)
5. Save and deploy

### Railway

1. Visit: https://railway.app
2. "New Project" → "Deploy from GitHub repo"
3. Select: `LloydMatei254/Photogenic`
4. Deploy

### Self-Hosted (VPS/Server)

```bash
# Build the project
npm run build

# Start production server
npm run start

# Or use PM2 for process management
npm install -g pm2
pm2 start npm --name "photogenic" -- start
pm2 save
pm2 startup
```

## Custom Domain Setup

### On Vercel:
1. Project Settings → Domains
2. Add your domain
3. Update DNS records (provided by Vercel)
4. Wait for DNS propagation (5-60 minutes)

### DNS Records Example:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Performance Optimization

1. **Add real images:**
   - Optimize before uploading (use tools like TinyPNG)
   - Recommended max size: 500KB per image

2. **Enable analytics:**
   - Vercel Analytics (built-in, free)
   - Google Analytics (add tracking code)

3. **Configure caching:**
   - Vercel handles this automatically
   - For custom hosting, configure CDN

## Monitoring

- **Vercel Dashboard:** Real-time deployment status
- **Analytics:** View traffic and performance
- **Logs:** Check runtime logs for errors

## Updating Your Site

```bash
# Make changes locally
git add .
git commit -m "Update: description of changes"
git push

# Vercel auto-deploys from GitHub
# Check deployment status in Vercel dashboard
```

## Getting Help

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **GitHub Issues:** Create an issue in your repo
- **Vercel Support:** support@vercel.com

## Checklist Before Going Live

- [ ] Replace placeholder images with real photos
- [ ] Update personal information (name, email, bio)
- [ ] Test all pages on mobile and desktop
- [ ] Check contact form functionality
- [ ] Add real social media links
- [ ] Set up custom domain (optional)
- [ ] Enable analytics (optional)
- [ ] Test portfolio filtering
- [ ] Test image lightbox
- [ ] Verify SEO metadata
- [ ] Check page load speed

Your site is production-ready! 🚀
