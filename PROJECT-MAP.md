# SU-TYPE — Project Map

An offline-first typing SaaS (English typing tutor) built with Next.js 15, React 19, and Tailwind CSS.

**Location on this computer:** `C:\Users\umar\Documents\English Platform\su-type\`

> Note: `C:\Users\umar\Documents\English Platform\` (the parent folder) also contains some project files at its root. The real, complete project is the `su-type` subfolder; everything you run/edit is inside it.

---

## Top-level folders

| Folder | Purpose |
|---|---|
| `app/` | All pages & routes (Next.js App Router) |
| `components/` | Reusable UI + feature components |
| `lib/` | Core logic: engine, offline storage, cloud, theme, games |
| `engine/` | Core typing engine + gamification logic (see table below) |
| `data/` | Static content: word lists, passages, curriculum, missions |
| `prisma/` | Database schema (cloud backend) |
| `public/` | Static assets: service worker, PWA manifest |
| `scripts/` | Dev utilities (icon generation) |
| `tests/` | Unit tests (101 passing) |

## Key files at the root

| File | Purpose |
|---|---|
| `package.json` | Scripts: `dev` (port 3000), `build`, `start`, `typecheck`, `test` |
| `next.config.mjs` | Build config; `distDir` = `.next` (dev) or `.next-prod` (prod via `SUTYPE_DIST_DIR`) |
| `tailwind.config.ts` | Tailwind theme (color vars, key-press, etc.) |
| `tsconfig.json` | TypeScript config |
| `.next` / `.next-prod` | Dev and production build output |

## `app/` — routes

- `app/page.tsx` — landing page
- `app/login/`, `app/signup/`, `app/pricing/`, `app/privacy/`, `app/terms/`, `app/help/`, `app/about/` — public pages
- `app/app/` — the logged-in app:
  - `dashboard`, `practice`, `learn`, `lessons`, `games`, `tests`, `missions`, `statistics`, `records`, `profile`, `achievements`, `leaderboard`, `online`, `races`, `classroom`, `assignments`, `settings`
- `app/api/` — server endpoints: `auth`, `classrooms`, `health`, `leaderboard`, `races`, `sync`
- `app/globals.css` — global styles incl. theme palettes (light/dark/bw + moods sunset, ocean, forest, grape)
- `app/layout.tsx` — root layout; inline theme resolver for `su-type-theme` storage key

## `components/` — UI

| Folder | Purpose |
|---|---|
| `dashboard/` | Dashboard widgets, page headers |
| `typing/` | Typing engine UI (text editor, keyboard, metrics) |
| `games/` | Falling-word games (Falling Words, Word Defender, Survival) |
| `lessons/` | Lesson rendering |
| `layout/` | Topbar, sidebar, command palette |
| `marketing/` | Landing-page components incl. `theme-toggle` |
| `ui/` | Base UI: card, button, input, switch, select, slider, skeleton |
| `feedback/` | Toasts/alerts etc. |

## `engine/` — core logic (typing engine + gamification)

| File | Purpose |
|---|---|
| `typing/engine.ts` | Typing engine: `createEngine`, `press`, `backspace`, `isComplete`, `computeSessionMetrics` |
| `typing/keyboard.ts` | Keyboard layout definitions |
| `typing/keyInput.ts` | Key input handling |
| `typing/metrics.ts` | WPM / accuracy / KPH metrics |
| `typing/textGen.ts` | Practice text generation |
| `typing/textSegments.ts` | Text segmentation for lessons |
| `gamification/achievements.ts` | Achievement evaluation |
| `gamification/levels.ts` | Level/XP logic |
| `gamification/missions.ts` | Mission evaluation |
| `gamification/streaks.ts` | Daily streak logic |
| `analytics/aggregate.ts` | Analytics aggregation |
| `analytics/keyStats.ts` | Per-key statistics |
| `analytics/recommendations.ts` | Personalized recommendations |

## `lib/` — logic

| File/Folder | Purpose |
|---|---|
| `games.ts` | Game helpers: `nearestFaller`, `activeFallerId`, `Faller` |
| `theme.ts` | Theme model: `THEMES` (light/dark/bw/sunset/ocean/forest/grape), `readTheme`, `applyTheme`, `nextTheme` |
| `sound.ts` | Key-press sounds |
| `permissions.ts` | Permission checks |
| `types.ts` | Shared TypeScript types (`AppSettings`, `UserProfile`, …) |
| `utils.ts` | Shared utilities (`cn`) |
| `offline/` | Offline-first storage: `db.ts` (IndexedDB), `store.ts` (state), `backup.ts`, `data.ts`, `missions.ts`, `progress.ts` |
| `cloud/` | `client.ts` — cloud sync client |
| `server/` | Cloud backend: `store.ts` (JSON DB), `auth.ts` (users/ApiError), `sync.ts`, `races.ts` |
| `sync/` | `queue.ts` — sync queue |

## `data/` — content

| File | Purpose |
|---|---|
| `words.ts` | Word lists |
| `passages.ts` | Practice passages |
| `curriculum.ts` | Lesson curriculum |
| `missions.ts` | Mission definitions |
| `achievements.ts` | Achievement definitions |
| `cloud.json` | Cloud/backend user database (JSON file backend) |

## `tests/` — unit tests (101 passing)

Top-level suites: `engine`, `games`, `metrics`, `missions`, `streaks`, `textgen`, `textSegments`, `typingMaster`, `achievements`.
Server suites: `tests/server/` → `auth`, `races`, `store`, `sync`.

## Servers

| Server | URL | Port | Build |
|---|---|---|---|
| Dev | http://localhost:3000 | 3000 | `.next` (hot-reload) |
| Prod | http://localhost:3789 | 3789 | `.next-prod` (started with `SUTYPE_DIST_DIR=.next-prod`) |

## Key commands

```powershell
npm.cmd run dev              # dev server on :3000
npm.cmd run typecheck        # TypeScript check
npm.cmd test                 # run unit tests
$env:SUTYPE_DIST_DIR=".next-prod"; npm.cmd run build
npm.cmd run start -- -p 3789 # prod server (with SUTYPE_DIST_DIR set)
```