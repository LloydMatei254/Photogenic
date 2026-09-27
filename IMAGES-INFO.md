# Photography Images - Unsplash Integration

## ✨ What's Implemented

Your portfolio now uses **professional photography from Unsplash** - a free stock photo service with high-quality images.

### Current Setup:

**Hero Images:**
- Landing page: Stunning landscape with photographer silhouette
- About page: Portrait-style outdoor scene
- Services page: Camera equipment close-up
- CTA section: Beautiful evening/golden hour scene

**Portfolio Photos:**
- 12 professional photographs across all categories
- Mix of portraits, street, landscapes, events, lifestyle
- High-resolution, optimized for web
- Automatically cached by Next.js Image component

**Categories:**
- Each category has a representative cover image
- Portraits, Street, Events, Landscapes, Lifestyle

**Stories:**
- 3 beautiful cover images for blog posts
- Themed for photography, learning, and creativity

## 📸 Image Sources

All images are from [Unsplash.com](https://unsplash.com) - a free (do-whatever-you-want) license.

**Attribution:** While not legally required, it's good practice to credit photographers. You can add credits in your footer or About page if you'd like.

## 🔄 Want to Use Your Own Photos?

### Option 1: Replace Unsplash URLs (Keep Remote Loading)

Edit these files and replace the Unsplash URLs with your own hosted images:
- `data/photographs.ts` - Portfolio photos
- `data/categories.ts` - Category covers
- `data/stories.ts` - Story covers
- `app/page.tsx` - Hero and CTA images
- `app/about/page.tsx` - About hero and profile
- `app/services/page.tsx` - Services hero

### Option 2: Use Local Images

1. Add your photos to `public/images/` folder
2. Update the paths in the data files from:
   ```typescript
   image: "https://images.unsplash.com/..."
   ```
   to:
   ```typescript
   image: "/images/portfolio/your-photo.jpg"
   ```

3. Update `next.config.ts` - you can remove the Unsplash remote pattern if using only local images

## 🎨 Image Requirements

**Hero Images:**
- Size: 1920x1080 or larger
- Format: JPG, WebP, or PNG
- Landscape orientation
- High contrast for text readability

**Portfolio Images:**
- Size: 800-1200px on longest side
- Format: JPG or WebP recommended
- Mixed aspect ratios for visual interest
- File size: Under 500KB each (optimized)

**Category Covers:**
- Size: 800x1200 (portrait orientation works well)
- Should represent the category style
- High quality, professional look

**Story Covers:**
- Size: 1200x800 (landscape)
- Engaging, story-relevant images
- Good for social sharing

## 🚀 Performance

Next.js automatically:
- Optimizes images on-the-fly
- Serves them in modern formats (WebP/AVIF)
- Lazy loads images as you scroll
- Caches for fast loading

Unsplash CDN provides:
- Global edge caching
- Automatic resizing
- Fast delivery worldwide

## 📝 Legal & Attribution

**Unsplash License:**
- Free to use for any project
- No attribution required (but appreciated)
- Can be used commercially
- Cannot be sold as-is or compete with Unsplash

**If using your own photos:**
- Ensure you have the rights to use them
- If photographing people, get model releases
- Respect copyright laws

## 🔧 Technical Details

**Next.js Image Configuration:**
- Remote patterns enabled for `images.unsplash.com`
- Automatic optimization enabled
- Multiple device sizes supported
- Modern format conversion (WebP, AVIF)

**Image Loading:**
- Priority loading for hero images (LCP optimization)
- Lazy loading for below-the-fold images
- Blur placeholders for smooth loading
- Responsive sizing for all screen sizes

## 💡 Tips for Best Results

1. **Consistency:** Use a consistent style across your portfolio
2. **Quality:** Only use high-resolution, well-composed photos
3. **Variety:** Mix different subjects and compositions
4. **Optimization:** Compress images before uploading
5. **Testing:** Check loading speed and appearance on mobile

## 🆘 Troubleshooting

**Images not loading on Vercel:**
- Verify `next.config.ts` includes the remote pattern
- Check browser console for errors
- Ensure URLs are accessible

**Slow loading:**
- Images are automatically optimized by Next.js
- First load may be slower, subsequent loads are cached
- Consider using smaller source images

**Want different images:**
- Browse Unsplash and copy new image URLs
- Add `?w=1200&q=80` to optimize: `photo-id?w=1200&q=80`
- Replace in your data files

---

Your portfolio is now live with beautiful professional photography! 📸✨
