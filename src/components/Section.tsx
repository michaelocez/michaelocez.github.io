import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

interface SectionProps {
  id: string
  title: string
  children: ReactNode
}

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-16">
      <Reveal>
        <h2
          id={`${id}-heading`}
          className="text-xl font-bold tracking-tight sm:text-2xl"
        >
          {title}
        </h2>
        <div className="mt-6">{children}</div>
      </Reveal>
    </section>
  )
}
