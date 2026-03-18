# Aze Apps LLC Website Design Spec

## Overview

Company website for Aze Apps LLC at azeappsllc.com. A basic, clean marketing site showcasing the company and its mobile applications, starting with Tranqui - Bienestar emocional.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Output:** Static export (`output: 'export'`)
- **Deployment:** Vercel
- **Source Control:** GitHub

## Color Palette

Derived from the company logo:

- **Navy:** `#1B2A4A` — primary text, headings, navigation
- **Cream:** `#FDF6E3` — page backgrounds
- **White:** `#FFFFFF` — card backgrounds, contrast sections
- **Navy hover:** `#2A3F6A` — interactive hover states

## Typography

- Serif font for headings (to match logo style)
- Clean sans-serif for body text (system font stack or Inter)

## Pages

### Home (`/`)

- **Hero section:** AZE Apps logo (centered), tagline "We build apps that improve lives", CTA button linking to Apps page
- **What we do section:** Brief paragraph about Aze Apps LLC — mobile app development focused on wellbeing

### About (`/about`)

- **Company description:** Who Aze Apps LLC is, mission, values
- **Contact:** admin@apptranqui.com displayed as a mailto link

### Apps (`/apps`)

- **App card for Tranqui - Bienestar emocional:**
  - App icon/logo
  - App name and short description
  - App Store download badge/link: https://apps.apple.com/us/app/tranqui-bienestar-emocional/id6757107339
- Card layout designed to accommodate additional apps in the future

## Shared Components

### Navbar

- AZE Apps logo (left)
- Navigation links: Home, About, Apps (right)
- Responsive: hamburger menu on mobile

### Footer

- Copyright notice (Aze Apps LLC, current year)
- Contact email
- Navigation links
- Cream background with navy text

## Assets

- **Logo:** Provided by user (cream background, navy serif text "AZE Apps")
- **Logo file location:** `/public/logo.jpeg` (to be copied from user's source)

## Deployment

- GitHub repository: `azeappsllc-site` (to be created)
- Vercel project connected to GitHub repo
- Custom domain: azeappsllc.com (to be configured in Vercel)

## Language

- English only

## Responsive Design

- Mobile-first approach
- Breakpoints: mobile (default), tablet (md: 768px), desktop (lg: 1024px)
