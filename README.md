# Open Notebook

An Open Source implementation of Notebook LM with more flexibility and features.

## Quick Start

### Using Docker (Recommended)

```bash
# Full deployment with all services
docker-compose -f docker-compose.full.yml up

# Development mode
docker-compose -f docker-compose.dev.yml up

# Single container mode
docker-compose -f docker-compose.single.yml up
```

### Local Development

#### Prerequisites
- Node.js 18+ 
- Python 3.11+
- npm or yarn

#### Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server  
npm run start
```

The frontend will be available at `http://localhost:3000`

#### Backend Setup

See `api/` directory for Python backend setup instructions.

## Project Structure

This is a monorepo containing:

- **frontend/** - Next.js web application
- **api/** - Python FastAPI backend
- **docs/** - Documentation
- **migrations/** - Database migrations

## Build Instructions

See [BUILD_INSTRUCTIONS.md](./BUILD_INSTRUCTIONS.md) for detailed build information.

## Features

- 📝 Privacy-focused research and knowledge management
- 🤖 AI-powered chat with multiple model support
- 📚 Notebook organization system
- 🔍 Advanced search capabilities
- 🎙️ Podcast generation
- 🔄 Source transformations
- 🌙 Dark/Light theme support

## Configuration

Environment variables can be configured in `.env` file. See `.env.example` for available options.

## Documentation

Detailed documentation is available in the `docs/` directory:

- [Getting Started](docs/getting-started/index.md)
- [Deployment](docs/deployment/index.md)
- [Features](docs/features/index.md)
- [Development](docs/development/index.md)

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

See [LICENSE](LICENSE) for license information.
