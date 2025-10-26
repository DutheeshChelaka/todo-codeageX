import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { api } from './api/client'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import type { Task } from './types'
import logo from './assets/image.png'
import AnimatedBackground from './components/AnimatedBackground'

export default function App() {
  const qc = useQueryClient()

  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => (await api.get<Task[]>('/tasks')).data
  })

  const complete = useMutation({
    mutationFn: async (id: number) => (await api.patch(`/tasks/${id}/complete`)).data,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] })
  })

  const create = useMutation({
    mutationFn: async (payload: { title: string; description: string }) =>
      (await api.post('/tasks', payload)).data,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['tasks'] })
  })

  return (
    <div className="min-h-screen text-slate-900">
    <AnimatedBackground />      
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:py-4">
          <div className="flex items-center gap-3 animate-fade-right">
            <img
              src={logo}
              alt="Company logo"
              className="h-9 w-auto shrink-0 rounded-md ring-1 ring-slate-200"
              width={36}
              height={36}
              loading="eager"
              decoding="async"
            />
            <div className="leading-tight">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                Todo Tasks
              </h1>
              <p className="mt-0.5 text-xs sm:text-sm text-slate-600">
                Create tasks · view newest 5 pending · mark done
              </p>
            </div>
          </div>

          <span className="hidden md:inline-flex rounded-full border border-indigo-200 bg-indigo-50/80 px-3 py-1 text-[11px] font-medium text-indigo-700 shadow-sm animate-pop">
            React • TypeScript • Postgres • Docker
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-8 md:py-10 pb-20">
        <section className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="card p-5 animate-fade-up" style={{ animationDelay: '60ms' }}>
              <h2 className="mb-3 text-lg font-semibold">Add a Task</h2>
              <TaskForm
                onCreate={(title, description) => create.mutate({ title, description })}
                loading={create.isPending}
              />
              <p className="mt-3 text-xs text-slate-500">
                Title ≤ 120 chars. Description is required.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="card p-5 animate-fade-up" style={{ animationDelay: '120ms' }}>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Pending (Newest 5)</h2>
                <span className="text-xs text-slate-600">
                  {isLoading ? 'Loading…' : (tasks?.length ?? 0)} shown
                </span>
              </div>

              {isError && (
                <div className="mb-3 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                  Failed to load tasks. Please try again.
                </div>
              )}

              <TaskList
                loading={isLoading}
                tasks={tasks || []}
                onDone={(id) => complete.mutate(id)}
              />

              <p className="mt-4 text-xs text-slate-500">
                Completed tasks are hidden from this list.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="fixed inset-x-0 bottom-0 z-10 border-t border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-5xl px-5 py-3 text-xs text-slate-500">
          Built for the take-home assessment • Responsive • Accessible • Production-ready.
        </div>
      </footer>
    </div>
  )
}
