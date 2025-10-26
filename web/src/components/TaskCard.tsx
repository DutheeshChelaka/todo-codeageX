import type { Task } from '../types'

export default function TaskCard({
  task,
  onDone,
  delayMs = 0
}: {
  task: Task
  onDone: () => void
  delayMs?: number
}) {
  return (
    <article
      className="card p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-within:ring-2 focus-within:ring-indigo-300 animate-fade-up"
      style={{ animationDelay: `${delayMs}ms` }}
      aria-label={`Task ${task.title}`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <h3 className="text-base sm:text-lg font-semibold text-slate-900">{task.title}</h3>
        <button
          onClick={onDone}
          className="inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs font-medium text-slate-800 transition hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
          aria-label="Mark task as done"
        >
          Done
        </button>
      </div>

      <p className="mt-1 text-sm text-slate-700">{task.description}</p>
      <p className="mt-2 text-xs text-slate-500">Created {new Date(task.created_at).toLocaleString()}</p>
    </article>
  )
}
