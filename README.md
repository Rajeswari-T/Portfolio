# Durga Talluri Portfolio

A modern, responsive personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui. Showcases projects, experience, skills, and more.

## Features

- Clean, accessible, and modern UI/UX
- Light/dark mode toggle
- Animated sections with Framer Motion
- Responsive design for all devices
- Easy to customize static data (see `src/data/`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>
cd my-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view your portfolio.

## Project Structure

- `src/components/` - Reusable UI, layout, and section components
- `src/data/` - Static data for projects, skills, experience, etc.
- `src/styles/` - Tailwind and custom CSS
- `public/` - Static assets (favicon, images, resume, etc.)

## Customization

- Update your info, projects, and skills in the files under `src/data/`
- Replace `public/ProfilePhoto.png` and `public/resume.pdf` with your own
- Edit styles in `src/styles/` or tweak Tailwind config as needed
- Favicon: Replace `public/favicon.ico` with your own (see [favicon.io](https://favicon.io/))

## Tech Stack

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Deployment

You can deploy this project to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy the contents of the `dist/` folder.

## License

This project is open source and free to use for personal portfolios.
