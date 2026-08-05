# NEXTGEN Server

This is the backend server for the NEXTGEN application, built with [Fastify](https://fastify.dev/) and [Prisma](https://www.prisma.io/).

## Features

- **Framework**: Fastify v5
- **Database ORM**: Prisma v7 (using `@prisma/adapter-pg` pure JS driver)
- **Validation**: Zod
- **API Documentation**: Swagger UI
- **Language**: TypeScript 7

## Setup

Make sure to install dependencies using `pnpm`:

```bash
pnpm install
```

You will also need to configure your environment variables. Copy the `.env.example` from the root directory into this `server/` directory and rename it to `.env`.

## Database

Push the Prisma schema to the database:

```bash
pnpm db:push
```

## Development Server

Start the development server in watch mode:

```bash
pnpm dev
```

## Production

Build the application for production:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

## Linting & Testing

Run ESLint to check for code issues:

```bash
pnpm lint
```

### Testing with Vitest

We use **Vitest** for testing our backend routes and services.

```bash
# Run all tests
pnpm test

# Run tests in watch mode (recommended for development)
pnpm vitest

# Run tests with coverage
pnpm vitest run --coverage
```
