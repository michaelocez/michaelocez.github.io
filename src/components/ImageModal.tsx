import { useEffect, useRef } from 'react'
import type { Project } from '@/content/portfolio'

interface ImageModalProps {
  project: Project
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

export function ImageModal({
  project,
  index,
  onIndexChange,
  onClose,
}: ImageModalProps) {
  const total = project.images.length
  const image = project.images[index]
  const closeRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        onIndexChange((index + 1) % total)
      } else if (event.key === 'ArrowLeft') {
        onIndexChange((index - 1 + total) % total)
      } else if (event.key === 'Tab' && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href]',
        )
        const first = items[0]
        const last = items[items.length - 1]
        if (!first || !last) {
          return
        }
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    window.addEventListener('keydown', onKeyDown)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [index, total, onIndexChange, onClose])

  if (!image) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} screenshots`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
    >
      <div
        aria-hidden="true"
        onClick={onClose}
        className="absolute inset-0 bg-black/70"
      />
      <div ref={panelRef} className="relative flex max-h-full w-full max-w-4xl flex-col rounded-lg border border-zinc-800 bg-zinc-950 p-4 sm:p-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="text-sm font-medium text-zinc-100">
            {project.title} ({index + 1} of {total})
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close screenshots"
            className="rounded-md border border-zinc-700 px-3 py-1 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Close
          </button>
        </div>
        <div className="flex h-[50vh] items-center justify-center rounded-md border border-zinc-800 sm:h-[60vh]">
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-contain"
          />
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button
            type="button"
            onClick={() => onIndexChange((index - 1 + total) % total)}
            aria-label="Previous screenshot"
            className="w-24 shrink-0 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Previous
          </button>
          <p className="min-w-0 flex-1 text-center text-sm text-zinc-400">
            {image.alt}
          </p>
          <button
            type="button"
            onClick={() => onIndexChange((index + 1) % total)}
            aria-label="Next screenshot"
            className="w-24 shrink-0 rounded-md border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
