# Nufar's Portfolio

A modern portfolio website built with Next.js and Tailwind CSS, featuring a clean and professional design.

## Features

- **About**: Personal introduction and background
- **Learning**: A collection of books and learning resources
- **Thought**: Personal blog and thoughts section
- **Work**: Showcase of projects and professional experience
- **Skills**: Technical skills and expertise
- **Contact**: Professional contact information and social links

## Tech Stack

- Next.js 15.3.1
- React
- Tailwind CSS
- TypeScript
- Simple Icons for social media and technology icons

## Getting Started

### Prerequisites

- Node.js (v22.14.0 or later)
- npm or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
pnpm run dev
```

The site will be available at `http://localhost:3000` (or the next available port if 3000 is in use).

## Project Structure

- `/src/app`: Main application pages and layouts
- `/src/components`: Reusable React components
- `/public`: Static assets and images
- `/src/data`: Content data files

## Configuration

### Updating Content

1. **About Section**: Edit `src/app/about/page.tsx`
2. **Learning Section**: Edit `src/app/learning/page.tsx`
3. **Thought Section**: Edit `src/app/thought/page.tsx`
4. **Work Section**: Edit `src/app/work/page.tsx`

### Social Links

Update social media links in `src/components/links.tsx`. Each link object should have:
- `icon`: Icon component from `@icons-pack/react-simple-icons`
- `href`: URL to your social profile

### Skills

Update skills in `src/data/skills.ts`. Each skill category should have:
- `field`: Category name
- `skills`: Array of skills with `skill` (name) and `icon` properties

## Development

The project uses Next.js 15.3.1 with the following features:
- Server-side rendering
- Static site generation
- TypeScript support
- Tailwind CSS for styling
- Modern ES modules

## Styling

This project uses styling components from [Neobrutalism](https://neobrutalism.dev/), a collection of modern UI components with a distinctive design aesthetic. Visit their [styling documentation](https://neobrutalism.dev/styling) for more information about the design system.
