# Contributing to NEXT-GEN Programmers Website

First off — **thank you for considering contributing!** 🎉

This is a community-driven project and every contribution matters, whether it's fixing a typo, reporting a bug, or building an entire feature.

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Workflow](#-development-workflow)
- [Branch Naming Convention](#-branch-naming-convention)
- [Commit Convention](#-commit-convention)
- [Pull Request Process](#-pull-request-process)
- [Code Style & Standards](#-code-style--standards)
- [Testing Requirements](#-testing-requirements)
- [Issue Guidelines](#-issue-guidelines)
- [Project Structure](#-project-structure)
- [Need Help?](#-need-help)

---

## 🤝 Code of Conduct

By contributing, you agree to uphold our community values:

- **Be respectful** — Treat everyone with kindness and professionalism.
- **Be constructive** — Offer helpful feedback, not criticism without solutions.
- **Be inclusive** — Welcome contributors of all skill levels and backgrounds.
- **Be patient** — Reviewers are volunteers. Give them time.

Violations may result in your contributions being rejected or your access being revoked.

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

| Tool | Version | Purpose |
|---|---|---|
| [Node.js](https://nodejs.org) | >= 20.x | JavaScript runtime |
| [pnpm](https://pnpm.io) | >= 10.x | Package manager (preferred) |
| [Docker](https://docker.com) | Latest | Container runtime |
| [Docker Compose](https://docs.docker.com/compose) | v2+ | Multi-container orchestration |
| [Git](https://git-scm.com) | Latest | Version control |

### Setup

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/website.git
cd website

# 3. Add upstream remote
git remote add upstream https://github.com/nextgen-programmers/website.git

# 4. Copy environment variables
cp .env.example .env

# 5. Start with Docker (recommended)
docker compose up --build

# OR start manually
cd client && pnpm install && pnpm dev
cd server && pnpm install && pnpm prisma generate && pnpm dev
```

---

## 🔄 Development Workflow

```
1. Sync with upstream    →  git fetch upstream && git merge upstream/main
2. Create a branch       →  git checkout -b feat/my-feature
3. Make changes          →  Write code, add tests
4. Run linter            →  pnpm lint
5. Run tests             →  pnpm test
6. Commit (conventional) →  git commit -m "feat: add member search"
7. Push                  →  git push origin feat/my-feature
8. Open an Issue         →  write about the changes to be done or changes made  
9. Open a Pull Request   →  Target the `main` branch
10. Link the PR          →  Link the PR in the issue if changes have been made (only if applicable)
```

### Keep Your Fork in Sync

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```

---

## 🌿 Branch Naming Convention

Use descriptive, prefixed branch names:

| Prefix | Purpose | Example |
|---|---|---|
| `feat/` | New feature | `feat/member-search` |
| `fix/` | Bug fix | `fix/navbar-mobile-overflow` |
| `docs/` | Documentation only | `docs/update-api-readme` |
| `style/` | Styling / UI changes | `style/dark-mode-colors` |
| `refactor/` | Code restructuring | `refactor/api-routes` |
| `test/` | Adding or updating tests | `test/auth-middleware` |
| `chore/` | Maintenance / config | `chore/update-dependencies` |
| `hotfix/` | Critical production fix | `hotfix/db-connection-leak` |

**Rules:**
- Use lowercase with hyphens (kebab-case)
- Keep it short but descriptive
- Include the issue number if applicable: `feat/42-member-search`

---

## 📝 Commit Convention

We follow the **[Conventional Commits](https://www.conventionalcommits.org)** specification.

### Format

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|---|---|
| `feat` | A new feature |
| `fix` | A bug fix |
| `docs` | Documentation changes only |
| `style` | Code style changes (formatting, whitespace — not CSS) |
| `refactor` | Code change that neither fixes a bug nor adds a feature |
| `test` | Adding or modifying tests |
| `chore` | Build process, tooling, or dependency changes |
| `perf` | Performance improvements |
| `ci` | CI/CD configuration changes |
| `revert` | Reverts a previous commit |

### Scopes

Use the area of the codebase you're changing:

- `client` — Frontend (Nuxt)
- `server` — Backend (Fastify)
- `db` — Database / Prisma schema
- `docker` — Docker configuration
- `deps` — Dependencies
- `config` — Configuration files

### Examples

```bash
# Good ✅
git commit -m "feat(client): add member profile cards with role badges"
git commit -m "fix(server): resolve race condition in auth middleware"
git commit -m "docs: update contributing guide with test requirements"
git commit -m "chore(deps): upgrade nuxt to v4.1.0"
git commit -m "refactor(server): extract validation into shared utility"
git commit -m "test(server): add unit tests for project routes"

# Bad ❌
git commit -m "fixed stuff"
git commit -m "updates"
git commit -m "WIP"
git commit -m "asdfasdf"
```

### Rules

- Use the **imperative mood** ("add feature" not "added feature")
- **Do not** capitalize the first letter of the description
- **Do not** end the description with a period
- Keep the subject line under **72 characters**
- Reference related issues in the footer: `Closes #42`

---

## 🔀 Pull Request Process

### Before Opening a PR

- [ ] Your branch is up to date with `main`
- [ ] Code compiles without errors (`pnpm build`)
- [ ] Linter passes with no warnings (`pnpm lint`)
- [ ] **All existing tests pass** (`pnpm test`)
- [ ] New features include corresponding tests
- [ ] You've tested your changes locally
- [ ] You've checked for any breaking changes
- [ ] Documentation is updated if needed

### PR Title

Follow the same **Conventional Commits** format:

```
feat(client): add project showcase filtering
fix(server): handle null avatar in member response
```

### PR Description Template

Your PR description should include:

```markdown
## What does this PR do?
A clear description of the changes and why they're needed.

## Related Issue
Closes #<issue-number>

## Type of Change
- [ ] 🐛 Bug fix (non-breaking change that fixes an issue)
- [ ] ✨ New feature (non-breaking change that adds functionality)
- [ ] 💥 Breaking change (fix or feature causing existing functionality to change)
- [ ] 📝 Documentation update
- [ ] 🎨 Style / UI change
- [ ] ♻️ Refactor (no functional changes)
- [ ] ✅ Test (adding or updating tests)
- [ ] 🔧 Chore (tooling, config, dependencies)

## Screenshots (if UI changes)
Before | After

## Checklist
- [ ] My code follows the project's code style
- [ ] I have performed a self-review of my code
- [ ] I have added tests that prove my fix/feature works
- [ ] All new and existing tests pass
- [ ] I have updated the documentation accordingly
```

### Review Process

1. At least **1 approval** is required to merge
2. All CI checks must be **green** (lint, tests, build)
3. No unresolved review comments
4. Branch must be up to date with `main`
5. Squash merge is preferred for clean history

### What Gets a PR Rejected?

- Failing tests or lint errors
- No test coverage for new features
- Unclear or missing PR description
- Unrelated changes mixed into one PR
- Force-pushed over review comments without discussion
- Code that doesn't follow project conventions

---

## 🎨 Code Style & Standards

### General

- **TypeScript** — Use strict TypeScript everywhere. No `any` unless absolutely necessary and documented.
- **ESLint** — Follow the project's ESLint configuration. Run `pnpm lint` before committing.
- **Prettier** — Code formatting is handled by Prettier. Don't fight it.
- **File naming** — Use `kebab-case` for files and directories.
- **Component naming** — Use `PascalCase` for Vue components.

### Frontend (Nuxt / Vue)

- Use the **Composition API** with `<script setup lang="ts">`
- Use **Pinia** for global state — don't prop-drill more than 2 levels
- Keep components **small and focused** — split when a component exceeds ~150 lines
- Use **VueUse** composables before writing custom ones
- Use **Nuxt UI** components before building custom UI
- Use **Tailwind CSS** utilities — avoid inline styles or custom CSS unless necessary
- All pages must have proper **SEO meta tags** (use `useHead` or `useSeoMeta`)

### Backend (Fastify)

- Use **Fastify plugins** for modular route registration
- Define **JSON schemas** for request/response validation
- Use **Prisma** for all database operations — no raw SQL unless justified
- Handle errors consistently with proper HTTP status codes
- Add **JSDoc comments** to exported functions and route handlers
- Keep route handlers thin — business logic goes in `services/`

### Database

- Never modify existing migrations — create new ones
- Add descriptive names to migrations: `pnpm prisma migrate dev --name add_member_bio_field`
- Always include `@map` and `@@map` in Prisma schema for explicit table/column naming

---

## 🧪 Testing Requirements

### PR Must Pass All Tests

**No exceptions.** If your PR breaks existing tests, it will not be merged.

### What to Test

| Area | What to Test | Tool |
|---|---|---|
| **Backend routes** | Request/response validation, status codes, edge cases | Vitest |
| **Backend services** | Business logic, data transformations | Vitest |
| **Frontend components** | Rendering, user interactions, props | Vitest + Vue Test Utils |
| **Frontend pages** | Route rendering, SEO meta | Nuxt Test Utils |
| **API integration** | End-to-end API flows | Vitest |

### Running Tests

```bash
# Run all tests
pnpm test

# Run with coverage
pnpm test:coverage

# Run specific test file
pnpm test -- path/to/test.spec.ts

# Watch mode during development
pnpm test:watch
```

### Test File Naming

- Place test files next to the source: `my-service.ts` → `my-service.spec.ts`
- Or in a `__tests__/` directory within the same folder
- Use `.spec.ts` extension for all test files

### Minimum Coverage

We aim for meaningful coverage, not 100%. Focus on:

- **Critical business logic** — Must be tested
- **API endpoints** — Must have happy path + error tests
- **Utility functions** — Must be tested
- **UI components** — Test user-facing behavior, not implementation details

---

## 🐛 Issue Guidelines

### Reporting Bugs

Use the **Bug Report** issue template and include:

- Clear, descriptive title
- Steps to reproduce
- Expected behavior vs actual behavior
- Screenshots or logs (if applicable)
- Environment details (browser, OS, Node version)

### Requesting Features

Use the **Feature Request** issue template and include:

- Clear description of the feature
- Why it's needed / what problem it solves
- Proposed implementation approach (if you have one)
- Mockups or wireframes (if UI-related)

### Issue Labels

| Label | Meaning |
|---|---|
| `good first issue` | Great for newcomers |
| `help wanted` | Community help welcome |
| `bug` | Something isn't working |
| `feature` | New feature request |
| `enhancement` | Improvement to existing feature |
| `documentation` | Documentation improvements |
| `priority: high` | Needs attention soon |
| `priority: low` | Nice to have, no rush |
| `wontfix` | Decided against implementing |

---

## 📁 Project Structure

When adding files, follow the existing structure:

```
client/app/
├── components/
│   ├── common/          # Shared UI components (Button, Card, etc.)
│   ├── home/            # Homepage-specific components
│   ├── members/         # Members page components
│   ├── projects/        # Projects page components
│   └── layout/          # Layout components (Navbar, Footer)
├── composables/         # Shared Vue composables
├── pages/               # File-based routes
├── layouts/             # Page layouts
└── assets/              # Static assets

server/src/
├── routes/              # Route handlers (grouped by domain)
│   ├── members/
│   ├── projects/
│   └── health/
├── services/            # Business logic
├── plugins/             # Fastify plugins (auth, cors, etc.)
├── middleware/           # Request middleware
└── utils/               # Shared utilities
```

---

## ❓ Need Help?

- **Discord** — Ask in the `#website-devs` channel
- **Issues** — Open an issue with the `question` label
- **Discussions** — Use GitHub Discussions for ideas and proposals

Don't be afraid to ask! We were all beginners once. The only bad question is the one you don't ask. 💬

---

**Happy contributing!** 🚀

*— The NEXT-GEN Programmers Team*
