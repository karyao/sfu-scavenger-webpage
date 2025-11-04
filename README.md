# SFU Scavenger Hunt Webpage

This is a [Next.js](https://nextjs.org) project for the SFU Scavenger Hunt mobile app showcase.

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/components/` - React components for each section
- `src/styles/` - Component-specific CSS files
- `src/app/` - Next.js app directory
- `public/` - Static assets (images, APK files, ZIP files, etc.)

## Adding Content

### 1. Team Effort Breakdown

Edit `src/components/Team.tsx` to add team member contributions.

### 2. App APK

- Place your APK file in the `public/` directory
- Update the link in `src/components/APK.tsx` to point to your APK file

### 3. Diagrams Presentation

- Place your presentation file (PDF, PPTX, etc.) in the `public/` directory
- Update the link in `src/components/Diagrams.tsx` to point to your file

### 4. Presentation Video

- Update the YouTube video ID in `src/components/Video.tsx`
- Replace `dQw4w9WgXcQ` in the iframe src with your actual YouTube video ID
- The video will be embedded and playable directly on the page

### 5. Project ZIP

- Place your project ZIP file in the `public/` directory
- Update the link in `src/components/ProjectZip.tsx` to point to your ZIP file

## Color Scheme

The project uses the following color palette (defined in `src/app/globals.css`):

- Dark: `#130303`
- Cream: `#fffaf4`
- Orange: `#d68057`
- Red: `#a6192e`
- Beige: `#d3c5bb`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and deploy

## Special Instructions

- Make sure all files referenced (APK, diagrams, ZIP) are in the `public/` directory
- Update the YouTube video ID before deploying
- Test all links and navigation before submission
