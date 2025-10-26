# Todo Tasks — Full-Stack Take-Home

**Stack:** React + TypeScript + Vite • Node + Express + PostgreSQL • Docker • Tailwind

## Run (Docker)
\`\`\`bash
cp .env.example .env
docker compose up --build
\`\`\`
- Web: http://localhost:5173
- API health: http://localhost:8080/health
- API OpenAPI JSON: http://localhost:8080/api/docs.json

## Local Dev
\`\`\`bash
docker compose up -d db
(cd api && npm i && npm run dev)   # http://localhost:8080
(cd web && npm i && npm run dev)   # http://localhost:5173
\`\`\`

## API
- POST \`/api/tasks\` {title, description}
- GET  \`/api/tasks\`  (newest 5 pending)
- PATCH \`/api/tasks/:id/complete\`

## Notes
- Modules architecture
- Zod validation, index on \`created_at\`, graceful shutdown
- Tailwind v4, responsive, accessible, subtle animations, fixed footer
