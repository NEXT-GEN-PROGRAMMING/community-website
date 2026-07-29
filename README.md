# NEXT-GEN Programmers — Community Website

> [!WARNING] 
> **Legacy Code — Draft v0.1**
> This is the initial commit and foundational draft of the NEXT-GEN Programmers website. Everything here is a starting point. Contributors and participants are free — and encouraged — to improve, refactor, and expand upon this codebase.

---

## 🧭 About

This is the official website for the **NEXT-GEN Programmers** Discord community. It serves as the public face of the community — a place where anyone can explore what the server is, discover member projects, learn about the team, and eventually contribute.

The website is designed to be **modern, interactive, and developer-focused** while staying **performant and easy to navigate**.

### Goals

- Showcase the community and what it stands for
- Highlight projects built by members
- Recognize core contributors, moderators, and admins
- Display live community activity and statistics
- Improve discoverability of the community outside Discord
- Create a central hub that complements the Discord server

---

## 🏗️ Tech Stack

### Frontend (`/client`)

| Technology | Purpose |
|---|---|
| [Nuxt 4](https://nuxt.com) | Vue-based framework — SSR/SSG, file-based routing, auto-imports |
| [TypeScript](https://typescriptlang.org) | Type safety across the entire codebase |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS framework |
| [Nuxt UI](https://ui.nuxt.com) | Pre-built accessible component library for Nuxt |
| [Motion for Vue](https://motion.vueuse.org) | Declarative animations and transitions |
| [Pinia](https://pinia.vuejs.org) | State management for Vue |
| [VueUse](https://vueuse.org) | Collection of essential Vue composition utilities |
| [Iconify](https://iconify.design) | Universal icon framework — thousands of icons |

### Backend (`/server`)

| Technology | Purpose |
|---|---|
| [Fastify](https://fastify.dev) | High-performance Node.js web framework |
| [TypeScript](https://typescriptlang.org) | Type safety for the API layer |
| [Prisma](https://prisma.io) | Type-safe ORM with auto-generated client and migrations |
| [PostgreSQL](https://postgresql.org) | Primary relational database |
| [Redis](https://redis.io) | Caching, sessions, and rate limiting |

### Infrastructure

| Technology | Purpose |
|---|---|
| [Docker](https://docker.com) | Containerization for all services |
| [Docker Compose](https://docs.docker.com/compose) | Multi-container orchestration (app + Postgres + Redis) |

---

## 📂 Project Structure

```
NEXTGEN/
├── client/                  # Frontend (Nuxt 4)
│   ├── app/
│   │   ├── components/      # Reusable Vue components
│   │   ├── composables/     # Vue composables (shared logic)
│   │   ├── layouts/         # Page layouts
│   │   ├── pages/           # File-based routing
│   │   ├── plugins/         # Nuxt plugins
│   │   └── assets/          # Static assets (images, fonts)
│   ├── public/              # Public static files
│   ├── nuxt.config.ts       # Nuxt configuration
│   ├── tailwind.config.ts   # Tailwind CSS configuration
│   ├── tsconfig.json        # TypeScript configuration
│   └── package.json
│
├── server/                  # Backend (Fastify)
│   ├── src/
│   │   ├── routes/          # API route handlers
│   │   ├── plugins/         # Fastify plugins
│   │   ├── services/        # Business logic
│   │   ├── middleware/       # Request middleware
│   │   ├── utils/           # Utility functions
│   │   └── index.ts         # Server entry point
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/      # Database migrations
│   ├── tsconfig.json
│   └── package.json
│
├── docker/                  # Docker configuration
│   ├── client.Dockerfile    # Frontend container
│   ├── server.Dockerfile    # Backend container
│   └── redis.conf           # Redis configuration (optional)
│
├── docker-compose.yml       # Full stack orchestration
├── .env.example             # Environment variable template
├── .gitignore
├── CONTRIBUTING.md          # Contribution guidelines
├── LICENSE
└── README.md                # You are here
```

---

## 📄 Pages

| Page | Route | Description |
|---|---|---|
| **Home** | `/` | Landing page — intro, Discord join CTA, community stats, server rules |
| **Members** | `/members` | Team showcase — owner, admins, moderators, core contributors |
| **Projects** | `/projects` | Community project showcase with filters |
| **Community** | `/community` | Server structure, announcements, shared resources |
| **FAQ** | `/faq` | Frequently asked questions |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) >= 20.x
- [pnpm](https://pnpm.io) (recommended) or npm
- [Docker](https://docker.com) & [Docker Compose](https://docs.docker.com/compose)

### Quick Start (Docker — Recommended)

```bash
# 1. Clone the repository
git clone https://github.com/nextgen-programmers/website.git
cd website

# 2. Copy environment variables
cp .env.example .env

# 3. Start everything with Docker Compose
docker compose up --build

# Frontend:  http://localhost:3000
# Backend:   http://localhost:8000
# Postgres:  localhost:5432
# Redis:     localhost:6379
```

### Manual Setup (Without Docker)

```bash
# Frontend
cd client
pnpm install
pnpm dev             # → http://localhost:3000

# Backend (in a separate terminal)
cd server
pnpm install
pnpm prisma generate # Generate Prisma client
pnpm prisma migrate dev # Run database migrations
pnpm dev             # → http://localhost:8000
```

---

## 🐳 Docker Services

| Service | Image | Port | Description |
|---|---|---|---|
| `client` | Custom (Nuxt) | `3000` | Frontend application |
| `server` | Custom (Fastify) | `8000` | Backend API |
| `postgres` | `postgres:16-alpine` | `5432` | PostgreSQL database |
| `redis` | `redis:7-alpine` | `6379` | Redis cache |

---

## 🔧 Environment Variables

Copy `.env.example` to `.env` and fill in the values:

```env
# Database
DATABASE_URL=postgresql://nextgen:nextgen@localhost:5432/nextgen_db

# Redis
REDIS_URL=redis://localhost:6379

# Server
PORT=8000
NODE_ENV=development

# Client
NUXT_PUBLIC_API_BASE=http://localhost:8000

# Discord (future integration)
DISCORD_INVITE_URL=https://discord.gg/nextgen
```

---

## 🤝 Contributing

We welcome contributions from everyone! Please read our **[Contributing Guide](CONTRIBUTING.md)** before submitting pull requests.

**Quick summary:**
- Fork → Branch → Code → Test → PR
- All PRs must pass CI tests
- Follow the commit convention
- Be respectful and constructive

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📌 Final Note

This document — and this codebase — is intended as a **starting point for discussion** rather than a fixed specification. Every member is encouraged to suggest improvements, challenge ideas, and contribute to the design and development process.

**This is legacy code. Make it better.** 🚀

---

*Built with ❤️ by the NEXT-GEN Programmers community.*
