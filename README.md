# 🏠 Estatein - Real Estate Platform

![Estatein Banner](https://github.com/user-attachments/assets/25ecf646-7854-44e5-ab41-9184572fdb4f)

> Modern real estate platform built with Next.js 14, TypeScript, and Tailwind CSS featuring dynamic property listings and interactive user experience.

**🌐 Live Demo**: [https://estatein-seven.vercel.app/](https://estatein-seven.vercel.app/)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Development](#development)

## Overview

Estatein is a full-featured real estate platform that demonstrates modern web development practices. The application includes property listings, individual property pages, agent profiles, service portfolios, and lead generation capabilities.

## Features

### Core Functionality
- 🏠 **Property Listings** - Browse properties with interactive carousels
- 📄 **Individual Property Pages** - Detailed property views with specifications
- 👥 **Agent Profiles** - Contact information and agent details
- 📞 **Contact Forms** - Lead generation with form validation
- ❓ **FAQ System** - Interactive question and answer sections
- 📱 **Responsive Design** - Mobile-first approach for all devices

### Technical Features
- ⚡ **Dynamic Routing** - SEO-optimized individual property pages (`/property/[id]`)
- 🎨 **Interactive Components** - Custom carousels with Embla Carousel
- 🔍 **SEO Optimization** - Meta tags and semantic HTML structure
- 📊 **Data Management** - Centralized data layer with TypeScript interfaces
- 🎯 **Form Handling** - Contact forms with client-side validation

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: React 18 with Hooks
- **Carousels**: Embla Carousel with Autoplay
- **Icons**: Custom SVG components
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/estatein.git
   cd estatein
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── app/                    # Next.js 14 App Router
│   ├── about-us/          # About page
│   ├── contact-us/        # Contact page with layout
│   ├── faq/               # FAQ page
│   ├── properties/        # Properties listing page
│   ├── property/[id]/     # Dynamic property pages
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
│
├── components/            # Reusable UI components
│   ├── ui/               # Basic UI elements
│   ├── SVGs.tsx          # Icon components
│   └── Statistics.tsx    # Statistics display
│
├── containers/           # Page-specific sections
│   ├── about-us/        # About page components
│   ├── footer/          # Footer with navigation
│   ├── header/          # Header with mobile menu
│   └── home/            # Homepage sections
│
├── data/                # Data layer
│   └── properties.ts    # Property data and utilities
│
└── utils/               # Utility functions
    └── lib.ts           # Tailwind utilities
```

## Development

### Key Development Patterns

- **Component Architecture**: Atomic design with reusable components
- **TypeScript**: Strict typing for better development experience
- **Dynamic Routing**: Next.js App Router with dynamic parameters
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **State Management**: React hooks for component state

### Code Quality

- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting with Tailwind CSS plugin
- **TypeScript**: Strict type checking enabled
- **Component Organization**: Clear separation of concerns

## License

This project is created for portfolio demonstration purposes. All code and design implemented by Abdelrahman Abdelmoaty.

---

*Built with passion by **Abdelrahman Abdelmoaty***