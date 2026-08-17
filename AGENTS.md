# AGENTS.md

## Setup

- **Package manager:** pnpm (v11). Do not use npm/yarn.
- **Node:** 24.18.0 (see `.nvmrc`).
- **Install:** `pnpm install`.

## Commands

| Command              | What it does                                                 |
| -------------------- | ------------------------------------------------------------ |
| `pnpm dev`           | Start Astro dev server                                       |
| `pnpm build`         | `astro check && astro build` (typecheck, then bundle)        |
| `pnpm preview`       | Preview production build                                     |
| `pnpm test`          | Vitest (watch mode)                                          |
| `pnpm test:coverage` | Vitest run with v8 coverage                                  |
| `pnpm test:ui`       | Vitest UI mode                                               |
| `pnpm check`         | `format:check` → `lint:js:check` → `test:coverage` (CI gate) |
| `pnpm format:fix`    | Prettier write                                               |
| `pnpm lint:js:fix`   | ESLint fix                                                   |

## Project structure

- `src/pages/index.astro` — Hello World page.
- `src/__tests__/` — colocated test files.
- `.github/workflows/ci.yml` — runs `pnpm check` and `pnpm build` on push/PR to `main`.

## TypeScript

- Extends `astro/tsconfigs/strict`.

## ESLint

- Flat config (`eslint.config.js`), `.ts` files plus `eslint-plugin-astro` recommended rules for `.astro` files.
- **`@typescript-eslint/no-explicit-any` is an error** — annotate types instead.
- Unused vars error, except when prefixed with `_`.

## Prettier

- 4-space tabs, single quotes, trailing commas, 120 print width.
- **`prettier-plugin-astro`** formats `.astro` files.
- **Import sorting** (`@trivago/prettier-plugin-sort-imports`): css/scss → `@/*` → relative imports, separated by blank lines.

## Testing

- Vitest, configured via `getViteConfig` from `astro/config` so `.astro` component imports resolve correctly.
- Astro components are rendered with the Container API (`experimental_AstroContainer` from `astro/container`) and asserted against the rendered HTML string.
- Coverage excludes: `dist/`, `coverage/`, `node_modules/`, `**/index.ts`, `**/__mocks__/**`.

## Important quirks

- `build` runs `astro check` **before** `astro build` — a type error blocks the bundle.
- `check` is the full CI gate: format → lint → test coverage. Run before push.
- No pre-commit hooks or husky.

<!-- CODEGRAPH_START -->

## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tool** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them, including dynamic-dispatch hops grep can't follow. Name a file or symbol in the query to read its current line-numbered source. If it's listed but deferred, load it by name via tool search.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` prints the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->
