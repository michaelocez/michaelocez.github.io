import type { ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  className?: string
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} className={cn('reveal', className)}>
      {children}
    </div>
  )
}
