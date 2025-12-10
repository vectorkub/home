# Vectorkub Services

Professional web services including website development, payment systems, authentication, and AI solutions.

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Update the values as needed:
     ```
     NEXT_PUBLIC_ACCOUNT_CENTER_URL=https://account.vectorkub.com
     ```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

To create a production build:

```bash
npm run build
npm run start
```

## Features

- **Theme System**: Light/Dark/System theme support with dropdown menu
- **Account Center Integration**: Seamless redirect to Vectorkub Account Center
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Product Showcase**: Interactive product cards with SVG icons
- **Service Pages**: Dedicated pages for each service offering

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_ACCOUNT_CENTER_URL` | URL for the Vectorkub Account Center | `https://account.vectorkub.com` |

## Tech Stack

- Next.js 16 (with Turbopack)
- TypeScript
- Tailwind CSS
- Framer Motion
- Theme-aware color system