import { useState } from 'react'

export default function TaskForm({
  onCreate,
  loading
}: {
  onCreate: (title: string, description: string) => void
  loading?: boolean
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [touched, setTouched] = useState(false)

  const titleErr = touched && !title.trim()
  const descErr = touched && !description.trim()

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setTouched(true)
    if (!title.trim() || !description.trim()) return
    onCreate(title.trim(), description.trim())
    setTitle(''); setDescription(''); setTouched(false)
  }

  return (
    <form onSubmit={submit} className="grid space-y-3">
      <div>
        <label htmlFor="title" className="text-[13px] font-medium text-slate-800">Title</label>
        <input
          id="title"
          className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none shadow-sm
                      focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 mt-1 ${titleErr ? 'border-red-300 ring-2 ring-red-100' : ''}`}
          placeholder="e.g., Study"
          value={title}
          onChange={e=>setTitle(e.target.value)}
          maxLength={120}
          onBlur={() => setTouched(true)}
        />
        {titleErr && <p className="mt-1 text-xs text-red-600">Title is required.</p>}
      </div>

      <div>
        <label htmlFor="description" className="text-[13px] font-medium text-slate-800">Description</label>
        <textarea
          id="description"
          className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none shadow-sm
                      focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 mt-1 min-h-[96px] ${descErr ? 'border-red-300 ring-2 ring-red-100' : ''}`}
          placeholder="Add a short task description..."
          value={description}
          onChange={e=>setDescription(e.target.value)}
          onBlur={() => setTouched(true)}
        />
        {descErr && <p className="mt-1 text-xs text-red-600">Description is required.</p>}
      </div>

      <div className="pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={loading}
        >
          {loading ? 'Adding…' : 'Add Task'}
        </button>
      </div>
    </form>
  )
}
