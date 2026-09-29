# FX Safety Solutions

Marketing website for FX Safety Solutions, a fire safety and protection equipment supplier serving Medchal Malkajgiri District, Telangana.

The site presents the company, fire safety services, products, safety equipment, maintenance offerings, and contact details in a responsive single-page experience.

## Tech Stack

- React 19
- TypeScript
- TanStack Start and TanStack Router
- Vite
- Tailwind CSS
- Radix UI primitives
- Lucide React icons
- Bun for dependency management and scripts

## Getting Started

### Prerequisites

- Node.js 18 or newer
- [Bun](https://bun.sh/) recommended

### Install dependencies

```bash
bun install
```

If Bun is not available, install dependencies with the package manager of your choice. The committed `bun.lock` file is the source of truth for Bun installs.

### Start the development server

```bash
bun run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `bun run dev` | Start the Vite development server |
| `bun run build` | Create a production build |
| `bun run build:dev` | Create a development-mode build |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint across the project |
| `bun run format` | Format project files with Prettier |

## Project Structure

```text
src/
├── assets/                 Product and site imagery
├── components/
│   ├── site/               Page sections, navigation, branding, and business data
│   └── ui/                 Reusable Radix-based UI components
├── hooks/                  Shared React hooks
├── lib/                    Utilities and error handling
├── routes/
│   ├── __root.tsx          Application root route
│   └── index.tsx           Single-page site route
├── router.tsx              TanStack Router configuration
├── server.ts               TanStack Start server entry
├── start.ts                Client entry point
└── styles.css              Global styles and theme tokens
```

Business content and catalog data are centralized in `src/components/site/data.ts`. The main page is assembled from sections in `src/components/site/Sections.tsx`.

## Production Build

Build the site and check the generated output with:

```bash
bun run build
bun run preview
```

## Deployment

The project is configured as a Vite/TanStack Start application. Use the deployment target's standard Node-compatible build process and serve the generated production output according to that platform's Vite or TanStack Start integration.

## Business Contact

FX Safety Solutions

6-97, Shutter No. 2, Opp. Indian Oil Pump, Basaragadi Village, Medchal Malkajgiri District, Telangana 501401

Phone: 74580 23037 / 93812 15876