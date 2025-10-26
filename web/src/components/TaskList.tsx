import TaskCard from './TaskCard'
import type { Task } from '../types'

export default function TaskList({
  tasks, onDone, loading
}: {
  tasks: Task[]; onDone: (id: number) => void; loading?: boolean
}) {
  if (loading) {
    return (
      <div className="grid gap-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="animate-pulse space-y-2">
              <div className="h-4 w-1/3 rounded bg-slate-200/80"></div>
              <div className="h-3 w-2/3 rounded bg-slate-200/60"></div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (!tasks.length) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 bg-white px-6 py-10 text-center animate-fade-up">
        <div className="mx-auto mb-2 h-10 w-10 rounded-full bg-indigo-100"></div>
        <p className="text-sm text-slate-600">No pending tasks. Add your first one on the left.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-3">
      {tasks.map((t, i) => (
        <TaskCard key={t.id} task={t} onDone={() => onDone(t.id)} delayMs={i * 60} />
      ))}
    </div>
  )
}
