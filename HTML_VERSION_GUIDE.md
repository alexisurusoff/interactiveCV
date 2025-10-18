# Simple HTML Version - Quick Start Guide

## 📄 What is this?

`index.html` is a **standalone, single-file version** of your portfolio that works without any build tools, npm, or React. Just open it in any web browser!

## 🚀 How to Use

### Option 1: Open Directly in Browser
1. Download `index.html` from the repository
2. Double-click the file
3. It opens in your default browser - Done! ✅

### Option 2: Host on Any Web Server
```bash
# Upload index.html to any web hosting service:
- GitHub Pages (free)
- Netlify Drop (free, drag & drop)
- Any FTP/cPanel hosting
- Vercel static files
```

### Option 3: Use with GitHub Pages (Free Hosting)
1. Go to your repository settings
2. Click "Pages" in the left sidebar
3. Source: Select "main" branch
4. Root directory: `/` (root)
5. Click Save
6. Your site will be live at: `https://alexisurusoff.github.io/interactiveCV/index.html`

## ✨ Features

✅ **No Build Required** - Pure HTML, CSS, JavaScript
✅ **Bilingual** - English ↔ Spanish toggle
✅ **Responsive** - Works on all devices
✅ **Self-Contained** - All styles and scripts inline
✅ **Fast Loading** - No external dependencies
✅ **Works Offline** - After first load

## 🎨 Customization

To customize, edit `index.html`:

### Change Colors
Look for this section in the `<style>` tag:
```css
body {
    background: linear-gradient(to bottom right, #020617, #0f172a, #020617);
    color: #f1f5f9;
}
```

### Update Content
All content has `data-en` and `data-es` attributes:
```html
<span data-en="English Text" data-es="Texto en Español">English Text</span>
```

### Change Photo
Replace the image URL in the hero section:
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Alexis Urusoff">
```

## 📱 Mobile Responsive

The page automatically adapts to:
- 📱 Mobile phones (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🌐 Browser Compatibility

Works on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📦 File Size

- **Size**: ~29KB
- **Load Time**: < 1 second on most connections

## 🆚 Difference from React Version

| Feature | React Version | HTML Version |
|---------|---------------|--------------|
| Build Required | Yes (yarn build) | No |
| Dependencies | Many packages | None |
| File Size | ~2MB (built) | 29KB |
| Customization | Component-based | Direct HTML edit |
| Hot Reload | Yes | Manual refresh |
| Best For | Development | Quick deployment |

## 💡 When to Use Each Version

### Use HTML Version (`index.html`) When:
- Quick deployment needed
- Simple hosting (GitHub Pages, Netlify)
- No build tools available
- Maximum compatibility needed
- Sharing via email/USB

### Use React Version (`frontend/`) When:
- Active development
- Adding complex features
- Using component libraries
- Need hot reload
- Planning frequent updates

## 🔗 Links

- **React Version**: See `frontend/` directory
- **GitHub Repository**: https://github.com/alexisurusoff/interactiveCV
- **Deployment Guide**: See `VERCEL_DEPLOYMENT_GUIDE.md`

---

## Quick Test

To test locally:
```bash
# Option 1: Python
cd /app
python3 -m http.server 8000
# Open: http://localhost:8000/index.html

# Option 2: Node.js
npx http-server
# Open: http://localhost:8080/index.html

# Option 3: Just double-click index.html!
```

---

**Both versions are fully functional. Choose based on your needs!** 🎉
