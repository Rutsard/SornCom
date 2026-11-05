# Modern Online Judge & Python Learning Platform (programming.in.th inspired)

> Designed for **POSN Computer Camp 1 (สอวน. คอมพิวเตอร์ ค่าย 1)** & **University Engineering ComProg**.

---

## 🏗️ 1. Architecture & Database Isolation (Decoupled Design)

The system enforces a **strictly decoupled database architecture** to isolate educational and user state from competitive problem and judging engines:

```
                          ┌──────────────────────────┐
                          │   Next.js App (Web/API)   │
                          │     Port 3000 / 3001     │
                          └─────────────┬────────────┘
                                        │
           ┌────────────────────────────┼───────────────────────────┐
           │                            │                           │
           ▼                            ▼                           ▼
 ┌───────────────────┐        ┌───────────────────┐       ┌───────────────────┐
 │      core_db      │        │     judge_db      │       │    redis_store    │
 │ (PostgreSQL:5432) │        │ (PostgreSQL:5433) │       │   (Redis:6379)    │
 ├───────────────────┤        ├───────────────────┤       ├───────────────────┤
 │ Users & Auth      │        │ Problem Tasks     │       │ Submission Queue  │
 │ Learning Tracks   │        │ Test Cases        │       │ Rate Limiting     │
 │ Lessons & Modules │        │ Submissions       │       │ Verdict Pub/Sub   │
 │ Progress Tracking │        │ Grading Verdicts  │       └───────────────────┘
 └───────────────────┘        └───────────────────┘                 │
                                                                    ▼
                                                          ┌───────────────────┐
                                                          │   Judge0 Server   │
                                                          │  (Sandboxed Grader│
                                                          │     Port 2358)    │
                                                          └───────────────────┘
```

### Configurable Environment Connection Strings
Configurable independently via `.env` or external managed databases:
- `CORE_DATABASE_URL="postgresql://core_admin:core_secure_password_9921@localhost:5432/core_db?schema=public"`
- `JUDGE_DATABASE_URL="postgresql://judge_admin:judge_secure_password_9921@localhost:5433/judge_db?schema=public"`
- `REDIS_URL="redis://localhost:6379"`
- `JUDGE0_API_URL="http://localhost:2358"`

---

## ⚡ 2. Tech Stack

- **Frontend & App Engine:** Next.js 14 (App Router), TypeScript, Tailwind CSS, KaTeX.
- **Client Execution:** `@monaco-editor/react` + **Pyodide** (WebAssembly CPython 3.12 runtime) for instant in-browser sample execution and live stdio redirection with `numpy` & `pandas` dynamic loading.
- **Server Auto-Grader:** Redis-queued worker connected to self-hosted **Judge0** / isolated execution container with strict Time Limit (ms) and Memory Limit (MB).
- **ORM:** Dual independent Prisma schemas (`prisma/core.prisma` and `prisma/judge.prisma`) generating to distinct namespaces (`@prisma-core/client` and `@prisma-judge/client`).

---

## 🎯 3. Key Tracks & Features

### Tracks
1. **POSN Computer Camp 1 (สอวน. คอมพิวเตอร์ ค่าย 1):**
   - Focus: Modular arithmetic, standard I/O efficiency, time limits (1.0s), discrete algorithms.
   - Includes **Code Tracing Mode** (Paper Exam simulation) with locked code execution to predict standard outputs.
2. **University Engineering ComProg:**
   - Focus: Sensor data array processing, anomaly filtering ($[\mu - 2\sigma, \mu + 2\sigma]$), Min-Max normalization, and NumPy integration.

### programming.in.th Style Features
- **Task Table (`/tasks`):** Filter by Track, tags, difficulty, and search.
- **Split-Screen Workspace (`/tasks/[id]`):**
  - Left Pane: Markdown + KaTeX math rendering, copyable sample inputs/outputs, and 1-click "Load to Pyodide".
  - Right Pane: Monaco Python editor, "Run Sample (Pyodide)" button, and "Submit to Judge" button.
- **Verdict Breakdown:** Test case boxes and verdict string in classic format:
  - `P`: Passed (Green)
  - `-`: Wrong Answer (Red)
  - `T`: Time Limit Exceeded (Yellow)
  - `X`: Runtime Error (Purple)
  - e.g., `[PPPPPPPPPP]` or `[PP-PTPPP]`.

---

## 🚀 4. Getting Started

### 1. Boot Databases via Docker Compose
```bash
docker compose up -d
```
Starts `core_db` (5432), `judge_db` (5433), `redis_store` (6379), and `judge0` (2358).

### 2. Generate Prisma Clients & Seed Data
```bash
# Generate both clients
npm run prisma:generate

# Push schemas to PostgreSQL
npm run prisma:push

# Seed POSN 0001 and Engineering ENG01 tasks
npm run db:seed
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.
