# KTS Kavin Portfolio Website - Deployment Guide

## Overview
This is a professional portfolio website for KTS Kavin, a BJP Youth Wing leader in Tamil Nadu. The site is built with Next.js, TypeScript, shadcn UI, and Tailwind CSS.

## Technology Stack
- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **UI Library**: shadcn UI components
- **Styling**: Tailwind CSS
- **Image Optimization**: Next.js Image component
- **Forms**: React Hook Form with validation
- **SEO**: Next.js metadata API with Open Graph

## Project Structure
```
my-app/
├── src/
│   ├── app/                    # App Router pages
│   │   ├── layout.tsx         # Root layout with SEO metadata
│   │   ├── page.tsx           # Home page
│   │   ├── about/             # About page
│   │   ├── campaigns/         # Campaigns & Achievements
│   │   ├── vision/            # Vision & Goals
│   │   ├── gallery/           # Photo gallery
│   │   ├── get-involved/      # Volunteer registration
│   │   └── contact/           # Contact form
│   └── components/            # Reusable UI components
│       ├── ui/                # shadcn UI components
│       ├── Header.tsx         # Navigation header
│       ├── Footer.tsx         # Site footer
│       ├── Hero.tsx           # Hero section
│       ├── ContactForm.tsx    # Contact form
│       ├── VolunteerForm.tsx  # Volunteer registration
│       └── GalleryGrid.tsx    # Photo gallery with lightbox
├── public/
│   ├── Hero_img.jpeg          # Hero section image
│   └── collections/           # Gallery images
└── package.json
```

## Features
✅ **Responsive Design**: Mobile-first approach with Tailwind CSS
✅ **SEO Optimized**: Meta tags, Open Graph, Twitter cards
✅ **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
✅ **Contact Forms**: Fully functional with validation
✅ **Image Gallery**: Lightbox feature with categories
✅ **Social Integration**: Links to Instagram and X (Twitter)
✅ **Performance**: Next.js Image optimization and code splitting

## Local Development

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Instructions
1. **Clone or download the project**
   ```bash
   cd my-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Visit: http://localhost:3000
   - The site will automatically reload on changes

### Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment to Vercel (Recommended)

### Method 1: Deploy via GitHub
1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - KTS Kavin portfolio website"
   git branch -M main
   git remote add origin https://github.com/yourusername/kts-kavin-portfolio.git
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and deploy

3. **Configure Custom Domain** (Optional)
   - In Vercel dashboard, go to Project Settings > Domains
   - Add your custom domain
   - Update DNS records as instructed

### Method 2: Deploy via Vercel CLI
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## Environment Variables (Optional)
Create `.env.local` for any environment-specific configuration:
```env
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

## SEO Configuration
The site includes comprehensive SEO setup:
- **Meta titles and descriptions** for each page
- **Open Graph tags** for social media sharing
- **Twitter Card metadata**
- **Structured data** ready for implementation
- **Sitemap generation** (can be added)

## Content Management
To update content:

1. **Personal Information**: Edit `src/components/Hero.tsx` and `src/app/about/page.tsx`
2. **Contact Details**: Update `src/components/Footer.tsx` and `src/app/contact/page.tsx`
3. **Gallery Images**: Add images to `public/collections/` and update `src/app/gallery/page.tsx`
4. **Social Links**: Modify `src/components/SocialLinks.tsx`

## Performance Optimization
- ✅ Next.js Image optimization
- ✅ Code splitting and lazy loading
- ✅ Compressed images
- ✅ Minimal JavaScript bundles
- ✅ CSS optimization

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Security Considerations
- Form validation on both client and server side
- Input sanitization
- HTTPS enforced in production
- No sensitive data in client-side code

## Maintenance
- **Regular Updates**: Keep dependencies updated
- **Content Updates**: Regularly update achievements and campaigns
- **Image Optimization**: Compress new images before upload
- **Performance Monitoring**: Use Vercel Analytics

## Support & Contact
For technical support or questions about the website:
- **Developer**: Contact the development team
- **Content Updates**: Contact KTS Kavin's office
- **Email**: kavin95pri@gmail.com
- **Phone**: 99948-94844

## License
This website is developed for KTS Kavin's political activities and public service.

---

**Last Updated**: September 2025
**Version**: 1.0.0
**Framework**: Next.js 15.5.2
