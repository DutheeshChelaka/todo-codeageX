export const openapi = {
  openapi: "3.0.3",
  info: { title: "Todo API", version: "1.0.0" },
  paths: {
    "/api/tasks": {
      get:  { summary: "List tasks",  responses: { 200: { description: "OK" } } },
      post: { summary: "Create task", responses: { 201: { description: "Created" } } }
    },
    "/api/tasks/{id}/complete": {
      patch: { summary: "Complete task", responses: { 204: { description: "No Content" } } }
    }
  }
} as const;
