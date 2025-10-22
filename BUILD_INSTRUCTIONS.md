# Build Instructions

This is a **Next.js** monorepo project with the frontend in the `frontend/` directory.

## Build Commands

All build commands should be run from the root directory:

```bash
# Development
npm run dev        # Start Next.js dev server on port 3000

# Production Build
npm run build      # Build the Next.js app
npm run start      # Start the production server

# Other Commands
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checking
```

## Project Structure

- `frontend/` - Next.js application
  - `src/app/` - Next.js App Router pages
  - `src/components/` - React components
  - `src/lib/` - Utilities and hooks
- `api/` - Python backend API
- `docs/` - Documentation

## Important Notes

1. This is NOT a Vite project - it uses Next.js
2. All npm scripts in root `package.json` delegate to `frontend/package.json`
3. The app runs on `http://localhost:3000` by default
4. Build output uses Next.js standalone mode for Docker optimization

## Troubleshooting

If build fails:
1. Ensure you're in the project root directory
2. Run `npm install` to install dependencies
3. Check that `frontend/node_modules` exists
4. Verify Node.js version is 18+ 

## Docker Build

The project uses Docker with Next.js standalone output mode.
See `Dockerfile` and `docker-compose.*.yml` for container setup.
