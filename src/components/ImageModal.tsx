import { useEffect, useRef } from 'react'
import type { Project } from '@/content/portfolio'

interface ImageModalProps {
  project: Project
  index: number
  onIndexChange: (index: number) => void
  onClose: () => void
}

const FOCUSABLE = 'button:not([disabled]), a[href]'

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
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowRight') {
        onIndexChange((index + 1) % total)
      } else if (event.key === 'ArrowLeft') {
        onIndexChange((index - 1 + total) % total)
      } else if (event.key === 'Tab' && panelRef.current) {
        const items = panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
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
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, total, onIndexChange, onClose])

  if (!image) {
    return null
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} screenshots`}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
      />
      <div
        ref={panelRef}
        onClick={(event) => event.stopPropagation()}
        className="relative flex h-full max-h-full w-full max-w-5xl flex-col"
      >
        <div className="flex items-center justify-between gap-4">
          <p className="min-w-0 truncate text-sm font-medium text-zinc-100">
            {project.title}
            <span className="ml-2 text-zinc-400">
              {index + 1} / {total}
            </span>
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close screenshots"
            className="-mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-zinc-400 hover:bg-zinc-900 hover:text-zinc-100"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="mt-3 flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/60">
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <p className="mt-3 text-center text-sm leading-relaxed text-zinc-400">
          {image.alt}
        </p>

        <div className="mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => onIndexChange((index - 1 + total) % total)}
            aria-label="Previous screenshot"
            className="flex h-11 w-28 items-center justify-center rounded-md border border-zinc-700 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => onIndexChange((index + 1) % total)}
            aria-label="Next screenshot"
            className="flex h-11 w-28 items-center justify-center rounded-md border border-zinc-700 text-sm font-medium text-zinc-100 hover:bg-zinc-900"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
