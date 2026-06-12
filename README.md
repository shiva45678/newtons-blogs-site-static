# Newton's Group Blogs - Static Website

A professional, responsive static website for Newton's Group showcasing blogs and content for Newton's AI, Hospitals, HMS, and NEET PG platforms.

## 📋 Overview

This is a **pure static HTML/CSS/JavaScript website** with no build process or backend dependencies. It's optimized for GitHub Pages deployment and can be hosted on any static hosting platform.

**Live Demo**: https://github.com/shiva45678/newtons-blogs-site-static

## 🚀 Quick Start

### Option 1: Local Development

1. Clone the repository:
```bash
git clone https://github.com/shiva45678/newtons-blogs-site-static.git
cd newtons-blogs-site-static
```

2. Open `index.html` in your browser:
```bash
# On macOS
open index.html

# On Windows
start index.html

# On Linux
xdg-open index.html
```

### Option 2: Using a Local Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if installed)
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
newtons-blogs-site-static/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── CNAME               # Custom domain configuration
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

**That's it!** No build tools, no dependencies, no complexity.

## ✨ Features

- **Responsive Design**: Mobile-first approach that works on all devices
- **Professional Layout**: Hero section, brand sections, blog grid, CTA, and footer
- **Blog Filtering**: Filter posts by category (AI, Hospitals, HMS, NEET PG)
- **Smooth Animations**: CSS animations and transitions for polished UX
- **Fast Loading**: No build process, minimal CSS/JS
- **SEO Ready**: Semantic HTML structure
- **Accessibility**: Proper heading hierarchy and semantic elements

## 🎨 Design

- **Color Scheme**: Deep medical blue, vibrant cyan, warm healthcare green
- **Typography**: Poppins (headings), Inter (body text)
- **Layout**: Modern, asymmetric sections with alternating text/image
- **Animations**: Smooth scroll, hover effects, staggered card reveals

## 📝 Customization

### Update Blog Posts

Edit the `blogPosts` array in `script.js`:

```javascript
const blogPosts = [
    {
        id: 1,
        title: "Your Post Title",
        excerpt: "Your post excerpt...",
        category: "ai", // or "hospitals", "hms", "neetpg"
        date: "June 12, 2026",
        author: "Author Name",
        image: "https://your-image-url.jpg",
    },
    // Add more posts...
];
```

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #1e40af;        /* Deep medical blue */
    --accent: #06b6d4;         /* Vibrant cyan */
    --secondary: #10b981;      /* Healthcare green */
    /* ... more variables ... */
}
```

### Update Content

Edit the HTML sections in `index.html`:
- Hero section
- Brand sections
- Footer links
- CTA section

## 🚀 Deployment

### GitHub Pages

1. **Create a new GitHub repository**: `newtons-blogs-site-static`

2. **Push this code**:
```bash
git remote add origin https://github.com/YOUR-USERNAME/newtons-blogs-site-static.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose `main` branch and `/` (root) folder
   - Click Save

4. **Configure Custom Domain**:
   - In Pages settings, enter `blogs.newtons.in`
   - Click Save
   - Update your domain registrar's DNS records:

```
A Records:
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

5. **Enable HTTPS**:
   - Check "Enforce HTTPS" in Pages settings
   - Wait 5-10 minutes for SSL certificate

### Other Hosting Platforms

This static site can be deployed to any platform:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **AWS S3**: Upload files to S3 bucket
- **Cloudflare Pages**: Connect GitHub repo
- **Any traditional web host**: FTP upload

## 📊 Performance

- **No Build Process**: Instant deployment
- **Minimal Dependencies**: Just HTML, CSS, JavaScript
- **Fast Loading**: Optimized images and CSS
- **No Server Required**: Pure static files
- **Excellent Lighthouse Scores**: Fast, accessible, SEO-friendly

## 🔧 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎯 SEO

- Semantic HTML structure
- Proper heading hierarchy
- Meta tags in HTML
- Open Graph support ready
- Mobile-friendly design

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

To contribute:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For questions or issues:
- Check the GitHub Issues page
- Review the code comments
- Contact Newton's Group support

## 🎉 Getting Started Tips

1. **Test Locally First**: Always test changes locally before pushing
2. **Use Browser DevTools**: Test responsive design with device emulation
3. **Check Performance**: Use Google Lighthouse to audit performance
4. **Keep It Simple**: The beauty of this approach is its simplicity
5. **Backup Before Changes**: Always commit to git before major changes

## 📚 Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)

---

**Made with ❤️ for Newton's Group**

© 2026 Newton's Group. All rights reserved.
