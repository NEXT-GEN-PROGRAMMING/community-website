# NEXTGEN Client

This is the frontend client for the NEXTGEN application, built with [Nuxt](https://nuxt.com/) and [Vue](https://vuejs.org/).

## Features

- **Framework**: Nuxt 4 (with `app/` directory structure) & Vue 3
- **Styling**: Tailwind CSS v4 & Nuxt UI v3
- **State Management**: Pinia
- **Utilities**: VueUse
- **Testing**: Vitest & Vue Test Utils

## Setup

Make sure to install dependencies using `pnpm`:

```bash
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Locally preview the production build:

```bash
pnpm preview
```

## Linting & Testing

Run ESLint to check for code issues:

```bash
pnpm lint
```

### Testing with Vitest

We use **Vitest** for testing our frontend components and logic.

```bash
# Run all tests
pnpm test

# Run tests in watch mode (recommended for development)
pnpm vitest

# Run tests with coverage
pnpm vitest run --coverage
```
