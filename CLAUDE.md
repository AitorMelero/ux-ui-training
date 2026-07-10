# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

`mele-astro-template` is a minimal Astro + TypeScript starter template with linting, formatting, and testing pre-configured. It currently contains a single "Hello World" page (`src/pages/index.astro`) and exists to be cloned/extended as the base for new Astro projects.

## Setup

- **Package manager:** pnpm (v11, pinned via `packageManager` in `package.json`). Do not use npm/yarn.
- **Node:** version pinned in `.nvmrc` (24.18.0).
- **Install:** `pnpm install`

## Commands

| Command              | What it does                                                      |
| -------------------- | ----------------------------------------------------------------- |
| `pnpm dev`           | Start Astro dev server                                            |
| `pnpm build`         | `astro check && astro build` (typecheck, then bundle)             |
| `pnpm preview`       | Preview production build                                          |
| `pnpm test`          | Vitest (watch mode)                                               |
| `pnpm test:coverage` | Vitest run once with v8 coverage                                  |
| `pnpm test:ui`       | Vitest UI mode                                                    |
| `pnpm check`         | `format:check` → `lint:js:check` → `test:coverage` (full CI gate) |
| `pnpm format:check`  | Prettier check                                                    |
| `pnpm format:fix`    | Prettier write                                                    |
| `pnpm lint:js:check` | ESLint check                                                      |
| `pnpm lint:js:fix`   | ESLint fix                                                        |

To run a single test file: `pnpm vitest run src/__tests__/index.test.ts`. To run tests matching a name: `pnpm vitest run -t "renders Hello World"`.

`.github/workflows/ci.yml` runs `pnpm check` then `pnpm build` on push/PR to `main` — this is the exact gate to satisfy before pushing.

## Architecture

- `src/pages/` — file-based routing; each `.astro` file is a route. Currently only `index.astro`.
- `src/__tests__/` — colocated test files (not next to source files, all grouped here).
- Astro components have no separate "logic" layer here yet — the frontmatter (`---` fence) holds any script, and the template below it is plain HTML with `{}` expressions.

### Testing approach

- Vitest is configured via `getViteConfig` from `astro/config` (see `vitest.config.ts`) so `.astro` imports resolve exactly as they would in the real Astro build — do not switch this to a plain Vitest config.
- Astro components are tested by rendering them with the Container API (`experimental_AstroContainer` from `astro/container`) and asserting against the rendered HTML string (see `src/__tests__/index.test.ts` for the pattern).
- Coverage is restricted to `src/**` and excludes `**/index.ts` barrel files and `**/__mocks__/**`.

## TypeScript

- Extends `astro/tsconfigs/strict`.

## ESLint

- Flat config (`eslint.config.js`): `.ts` files get `@eslint/js` + `typescript-eslint` recommended rules; `.astro` files get `eslint-plugin-astro` recommended rules.
- `@typescript-eslint/no-explicit-any` is an **error** — annotate types instead of reaching for `any`.
- Unused vars/args/caught errors are errors, except when prefixed with `_`.

## Prettier

- 4-space tabs, single quotes, trailing commas, 120 print width.
- `prettier-plugin-astro` formats `.astro` files.
- `@trivago/prettier-plugin-sort-imports` enforces import order: style imports (`.css`/`.scss`) → `@/*` aliases → relative imports, each group separated by a blank line.

## Important quirks

- `pnpm build` runs `astro check` **before** `astro build` — a type error blocks the bundle, it doesn't just warn.
- `pnpm check` is the full CI gate (format → lint → test coverage); run it before pushing.
- No pre-commit hooks or husky — checks only run in CI and on demand.
- **Never commit if `pnpm check` fails.** Run it before every commit; fix any format/lint/test failures first, and only commit once it passes clean.
