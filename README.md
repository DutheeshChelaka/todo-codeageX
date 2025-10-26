# Todo Tasks
React + TS + Vite • Node + Express + PG • Docker • Tailwind
## Screenshots

### Landing (empty state)
![Start UI](docs/screenshots/01-start.png)

### Validation states
**Title required**  
![Title validation](docs/screenshots/02-title-validation.png)

**Description required**  
![Description validation](docs/screenshots/03-description-validation.png)

### Creating & listing tasks
**First task added**  
![Task added](docs/screenshots/04-task-added.png)

**Newest 5 pending (sorted desc)**  
![Five tasks shown](docs/screenshots/05-five-tasks.png)

### After completing tasks (empty again)
![Empty state](docs/screenshots/06-empty-state.png)

## Quick start (Docker)
cp .env.example .env
docker compose up --build
- Web: http://localhost:5173
- API: http://localhost:8080/health

## Local dev
docker compose up -d db
(cd api && npm i && npm run dev)   # :8080
(cd web && npm i && npm run dev)   # :5173

## Tech decisions
- Modules architecture (api/modules/tasks/*)
- Validation via zod, typed controllers/services
- DB pooling, migration-on-boot, index on created_at
- Tailwind v4, accessible focus & reduced-motion support
- Fixed footer + animated background (CPU-light)

## API
POST /api/tasks {title, description}
GET  /api/tasks
PATCH /api/tasks/:id/complete



