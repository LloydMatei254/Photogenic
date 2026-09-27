# Lloyd Matsi Photography Portfolio

A professional photography portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a cinematic, editorial design focused on showcasing photography work with elegance and sophistication.

## Features

- **Modern Tech Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices
- **Image Optimization**: Next.js Image component with automatic optimization
- **Fullscreen Lightbox**: Keyboard navigation, smooth animations, mobile gestures
- **Portfolio Filtering**: Dynamic category filtering with smooth transitions
- **Photography Stories**: Blog-style stories section for sharing photography insights
- **Contact Form**: Validated form ready for email service integration
- **SEO Optimized**: Proper metadata, Open Graph tags, semantic HTML
- **Accessible**: ARIA labels, keyboard navigation, proper focus states
- **Animations**: Smooth Framer Motion animations and custom CSS transitions

## Project Structure

```
photogenic/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page with form
│   ├── portfolio/           # Portfolio gallery
│   │   └── [category]/     # Dynamic category pages
│   ├── services/            # Services page
│   ├── stories/             # Stories/blog section
│   │   └── [slug]/         # Individual story pages
│   ├── layout.tsx           # Root layout with fonts
│   ├── page.tsx             # Homepage
│   ├── not-found.tsx        # Custom 404
│   ├── error.tsx            # Error boundary
│   ├── loading.tsx          # Loading state
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Navbar.tsx           # Navigation bar
│   ├── MobileMenu.tsx       # Mobile navigation
│   ├── Footer.tsx           # Footer component
│   ├── PhotoCard.tsx        # Photo card with hover
│   ├── PhotoLightbox.tsx    # Fullscreen image viewer
│   ├── CategoryFilter.tsx   # Portfolio filter
│   ├── ContactForm.tsx      # Contact form
│   └── SectionHeading.tsx   # Reusable heading
├── data/                    # Data layer
│   ├── photographs.ts       # Photography data
│   ├── categories.ts        # Category definitions
│   ├── stories.ts           # Blog stories
│   └── services.ts          # Service offerings
├── types/                   # TypeScript types
│   └── index.ts            # Type definitions
├── public/images/          # Image assets
│   ├── hero/               # Hero images
│   ├── portfolio/          # Portfolio photos
│   ├── categories/         # Category covers
│   └── stories/            # Story covers
└── README.md               # This file
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd photogenic
```

2. Install dependencies:
```bash
npm install
```

3. Add your photographs:
   - Place your images in `public/images/` following the structure in `public/images/README.md`
   - Update image paths in `data/photographs.ts`, `data/categories.ts`, and `data/stories.ts`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Adding Photographs

Edit `data/photographs.ts`:

```typescript
{
  id: "1",
  title: "Your Photo Title",
  category: "portraits", // or street, landscapes, etc.
  image: "/images/portfolio/your-image.jpg",
  alt: "Description for accessibility",
  year: 2026,
  featured: true, // Show on homepage
  aspectRatio: "portrait", // or "landscape", "square"
}
```

### Adding Stories

Edit `data/stories.ts`:

```typescript
{
  id: "1",
  title: "Your Story Title",
  slug: "your-story-slug",
  description: "Brief description",
  coverImage: "/images/stories/cover.jpg",
  date: "Sep 26, 2026",
  readTime: "5 min read",
  category: "Photography",
}
```

### Customizing Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  'warm-white': '#FAF8F5',
  'warm-gray': '#D4CFCB',
  'soft-beige': '#E8E4DF',
}
```

### Updating Personal Information

- **Name**: Update in `app/layout.tsx` metadata and `components/Navbar.tsx`
- **Email**: Update in `components/Footer.tsx` and `app/contact/page.tsx`
- **Social Links**: Update in `components/Footer.tsx` and `components/MobileMenu.tsx`

## Connecting Email Service

The contact form is ready for integration with services like:

- [Resend](https://resend.com/)
- [SendGrid](https://sendgrid.com/)
- [Nodemailer](https://nodemailer.com/)

Update `components/ContactForm.tsx` to connect your preferred service.

## Building for Production

```bash
npm run build
npm run start
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect repository and deploy
- **AWS Amplify**: Import from Git provider
- **Self-hosted**: Build and run with Node.js

## Technologies

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Playfair Display** - Serif font
- **Inter** - Sans-serif font

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please open an issue on GitHub or contact hello@lloydmatsi.com

---

Built with passion for photography and clean code.
