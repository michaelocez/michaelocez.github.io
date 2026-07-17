import { useEffect, useRef } from 'react'
import type { PointerEventHandler } from 'react'

function usePointerGlow(): PointerEventHandler<HTMLDivElement> {
  const pointerFrame = useRef<number | null>(null)
  const pointerPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    return () => {
      if (pointerFrame.current !== null) {
        cancelAnimationFrame(pointerFrame.current)
      }
    }
  }, [])

  return (event) => {
    if (event.pointerType !== 'mouse') return

    pointerPosition.current = { x: event.clientX, y: event.clientY }
    if (pointerFrame.current !== null) return

    const container = event.currentTarget
    pointerFrame.current = requestAnimationFrame(() => {
      const { x, y } = pointerPosition.current
      container.style.setProperty('--pointer-x', `${x}px`)
      container.style.setProperty('--pointer-y', `${y}px`)
      pointerFrame.current = null
    })
  }
}

export default usePointerGlow
