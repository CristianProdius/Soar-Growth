# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Startup Landing Page built with Next.js 15, React 19, TailwindCSS v4, Shadcn UI, and Motion (Framer Motion). The project is a modern SaaS landing page showcasing AI startup services.

## Development Commands

### Package Manager
- Uses `pnpm` as the package manager
- Install dependencies: `pnpm install`

### Development & Build
- Development server with Turbopack: `pnpm dev`
- Production build: `pnpm build`
- Start production server: `pnpm start`
- Type checking: `pnpm ts` (runs `tsc --noEmit`)
- Linting: `pnpm lint` (runs ESLint with Next.js config)

### Recommended Development Flow
- For development: `pnpm dev`
- For production testing: `pnpm build && pnpm start`

## Architecture & Structure

### Core Technologies
- **Next.js 15**: App Router architecture with TypeScript
- **React 19**: Latest React features
- **TailwindCSS v4**: Modern utility-first CSS with PostCSS
- **Shadcn UI**: Component library for consistent UI patterns
- **Motion**: Animation library (successor to Framer Motion)
- **Radix UI**: Headless UI primitives

### Project Structure
```
src/
├── app/                   # Next.js app router
│   ├── layout.tsx        # Root layout with metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── ui/              # Shadcn UI components (button, drawer)
│   ├── hero-section.tsx  # Landing page hero
│   ├── features.tsx      # Features showcase
│   ├── testimonials.tsx  # Customer testimonials
│   ├── call-to-action.tsx # CTA section
│   ├── logo-ticker.tsx   # Brand logos animation
│   ├── site-header.tsx   # Navigation header
│   ├── site-footer.tsx   # Footer component
│   ├── icons.tsx         # Icon components
│   └── action-button.tsx # Action button component
├── assets/              # Static assets (images, icons)
│   ├── avatars/         # User avatars
│   ├── brands/          # Brand logos
│   └── *.png, *.svg     # Various images
├── lib/
│   └── utils.ts         # Utility functions (cn function for classes)
├── hooks/
│   └── use-relative-mouse-position.ts # Custom hook for animations
├── types/
│   └── assets.d.ts      # TypeScript asset declarations
└── site-config.ts       # Site configuration and metadata
```

### Key Architecture Patterns
- **Component-based**: Landing page sections as reusable components
- **TypeScript**: Full type safety with strict configuration
- **CSS-in-JS**: TailwindCSS with utility classes and custom animations
- **Motion-first**: Extensive use of animations for user engagement
- **SEO-optimized**: Metadata configuration in layout.tsx and site-config.ts

### Styling System
- TailwindCSS v4 with PostCSS configuration
- Custom animations with Motion library
- Shadcn UI components for consistent design patterns
- Utility-first approach with `cn()` function for conditional classes

### Development Patterns
- Path alias `@/*` maps to `src/*`
- Site configuration centralized in `site-config.ts`
- Component composition for landing page sections
- Custom hooks for interactive animations
- TypeScript strict mode enabled