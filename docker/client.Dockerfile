# ============================================
# Client Dockerfile
# Framework: Nuxt 4 (Vue)
# ============================================

# Base Stage 
FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app/client

# Dependencies Stage 
FROM base AS deps
COPY client/package.json client/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Development Stage 
FROM base AS development
COPY --from=deps /app/client/node_modules ./node_modules
# Source code is mounted via docker-compose volume
EXPOSE 3000
CMD ["pnpm", "dev", "--host", "0.0.0.0"]

# Builder Stage 
FROM base AS builder
COPY client/ ./
COPY --from=deps /app/client/node_modules ./node_modules
RUN pnpm build

# Production Stage 
FROM base AS production
ENV NODE_ENV=production
# In Nuxt, the standalone server build is output to .output/server
COPY --from=builder /app/client/.output ./.output

EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
