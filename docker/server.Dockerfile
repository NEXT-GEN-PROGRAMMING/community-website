# ============================================
# Server Dockerfile
# Framework: Fastify (Node.js) + Prisma
# ============================================

# Base Stage 
FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# Install OpenSSL for Prisma
RUN apk add --no-cache openssl

WORKDIR /app/server

# Dependencies Stage 
FROM base AS deps
COPY server/package.json server/pnpm-lock.yaml ./
COPY server/prisma ./prisma
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate

# Development Stage 
FROM base AS development
COPY --from=deps /app/server/node_modules ./node_modules
# Source code is mounted via docker-compose volume
EXPOSE 8000
CMD ["pnpm", "dev"]

# Builder Stage 
FROM base AS builder
COPY server/ ./
COPY --from=deps /app/server/node_modules ./node_modules
RUN pnpm build
# Prune dev dependencies for production
RUN pnpm install --prod --frozen-lockfile
RUN pnpm prisma generate

# Production Stage 
FROM base AS production
ENV NODE_ENV=production

COPY --from=builder /app/server/package.json ./
COPY --from=builder /app/server/node_modules ./node_modules
COPY --from=builder /app/server/dist ./dist
COPY --from=builder /app/server/prisma ./prisma

EXPOSE 8000
CMD ["pnpm", "start"]
