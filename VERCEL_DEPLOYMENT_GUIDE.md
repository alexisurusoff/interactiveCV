# 📘 Vercel Deployment Guide for Alexis Urusoff Portfolio

## Step-by-Step Deployment Instructions

### Prerequisites
- A GitHub account
- A Vercel account (sign up free at [vercel.com](https://vercel.com))
- Your portfolio files ready

---

## Step 1: Prepare Your Project for Deployment

### 1.1 Create necessary configuration files

Create a file named `vercel.json` in the root of your frontend directory:

```json
{
  "buildCommand": "cd frontend && yarn build",
  "outputDirectory": "frontend/build",
  "devCommand": "cd frontend && yarn start",
  "installCommand": "cd frontend && yarn install"
}
```

### 1.2 Update package.json (if needed)

Ensure your `/app/frontend/package.json` has the correct build script:
```json
{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test"
  }
}
```

---

## Step 2: Push to GitHub

### 2.1 Initialize Git repository
```bash
cd /app
git init
git add .
git commit -m "Initial commit: Alexis Urusoff Portfolio"
```

### 2.2 Create a new repository on GitHub
1. Go to [github.com](https://github.com) and log in
2. Click the "+" icon in the top right
3. Select "New repository"
4. Name it: `alexis-portfolio` (or any name you prefer)
5. Keep it Public or Private (your choice)
6. DO NOT initialize with README, .gitignore, or license
7. Click "Create repository"

### 2.3 Push your code to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/alexis-portfolio.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

## Step 3: Deploy to Vercel

### 3.1 Sign up / Log in to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" (or "Log In" if you have an account)
3. Choose "Continue with GitHub" for easiest setup

### 3.2 Import Your Project
1. Once logged in, click "Add New..." → "Project"
2. You'll see a list of your GitHub repositories
3. Find `alexis-portfolio` (or whatever you named it)
4. Click "Import"

### 3.3 Configure Project Settings

**Framework Preset:** Create React App

**Root Directory:** `frontend`
- Click "Edit" next to Root Directory
- Enter: `frontend`
- This tells Vercel your React app is in the frontend folder

**Build Settings:**
- Build Command: `yarn build` (should auto-detect)
- Output Directory: `build` (should auto-detect)
- Install Command: `yarn install` (should auto-detect)

**Environment Variables:** 
- You don't need any for this frontend-only app!

### 3.4 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for the build to complete
3. You'll see a success screen with your live URL! 🎉

---

## Step 4: Get Your Live URL

Once deployed, you'll get a URL like:
```
https://alexis-portfolio-xyz123.vercel.app
```

You can customize this:
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add a custom domain (if you own one) or edit the vercel subdomain

---

## Step 5: Test Your Live Site

Visit your URL and verify:
- ✅ Portfolio loads correctly
- ✅ Language toggle works (EN ↔ ES)
- ✅ All sections display properly
- ✅ Navigation works smoothly
- ✅ Contact form opens email client when submitted
- ✅ All images load
- ✅ Responsive on mobile devices

---

## Step 6: Future Updates

Whenever you make changes:

```bash
# Make your changes to the code
git add .
git commit -m "Description of your changes"
git push origin main
```

Vercel will **automatically redeploy** your site within 1-2 minutes! 🚀

---

## Troubleshooting

### Issue: Build fails on Vercel
**Solution:** Check that:
- Root directory is set to `frontend`
- Build command is `yarn build`
- All dependencies are in package.json

### Issue: Page shows blank or errors
**Solution:** 
- Check browser console for errors
- Verify all import paths are correct
- Make sure PUBLIC_URL is not set in .env

### Issue: Images not loading
**Solution:**
- Ensure image URLs are accessible (not localhost)
- Check that all images are using the full URL from customer-assets.emergentagent.com

---

## Custom Domain Setup (Optional)

### If you have a domain (e.g., alexisurusoff.com):

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Click "Add Domain"
3. Enter your domain: `alexisurusoff.com` and `www.alexisurusoff.com`
4. Follow Vercel's DNS configuration instructions
5. Update your domain registrar's DNS settings:
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.19`

Wait 10-60 minutes for DNS propagation.

---

## Alternative: Deploy with Vercel CLI

If you prefer command-line deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to your project
cd /app/frontend

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (your account)
# - Link to existing project? N
# - What's your project's name? alexis-portfolio
# - In which directory is your code located? ./
# - Want to modify settings? N

# For production deployment:
vercel --prod
```

---

## Performance Tips

Your portfolio is already optimized, but here are extra tips:

1. **Enable Vercel Analytics** (free):
   - Go to Project Settings → Analytics
   - Enable Web Analytics
   - See visitor insights!

2. **Add SEO Meta Tags** (future enhancement):
   - Add meta description, og:image, etc. in `public/index.html`

3. **Enable Edge Network**:
   - Vercel automatically uses their global CDN
   - Your site loads fast worldwide!

---

## Summary

✅ **Frontend-only deployment** - No backend needed
✅ **Automatic deployments** - Push to GitHub = auto-deploy
✅ **Free hosting** - Vercel free tier is generous
✅ **HTTPS included** - Automatic SSL certificate
✅ **Contact form** - Uses mailto: (opens user's email client)
✅ **Bilingual** - English & Spanish language toggle
✅ **Responsive** - Works on all devices

---

## Need Help?

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: support@vercel.com
- GitHub Help: [docs.github.com](https://docs.github.com)

---

**Your portfolio is ready to impress the world! 🚀**

Good luck with your deployment!
