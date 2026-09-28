import { useEffect, useRef } from 'react'

const SPARK_COUNT = 8
const DURATION_MS = 450

interface Spark {
  x: number
  y: number
  angle: number
  distance: number
  start: number
}

export function GlobalSparks() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return
    }
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      return
    }
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const sparks: Spark[] = []
    let raf = 0

    function frame() {
      ctx?.clearRect(0, 0, window.innerWidth, window.innerHeight)
      const now = performance.now()
      const color = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? '212 212 216'
        : '63 63 70'
      let alive = false
      for (const spark of sparks) {
        const t = (now - spark.start) / DURATION_MS
        if (t >= 1) {
          continue
        }
        alive = true
        const eased = 1 - Math.pow(1 - t, 3)
        const dist = spark.distance * eased
        const len = 10 * (1 - t)
        const inner = Math.max(dist - len, 0)
        ctx?.beginPath()
        if (ctx) {
          ctx.strokeStyle = `rgb(${color} / ${(1 - t).toFixed(3)})`
          ctx.lineWidth = 2
          ctx.moveTo(
            spark.x + Math.cos(spark.angle) * inner,
            spark.y + Math.sin(spark.angle) * inner,
          )
          ctx.lineTo(
            spark.x + Math.cos(spark.angle) * dist,
            spark.y + Math.sin(spark.angle) * dist,
          )
          ctx.stroke()
        }
      }
      for (let i = sparks.length - 1; i >= 0; i--) {
        if (now - (sparks[i]?.start ?? 0) >= DURATION_MS) {
          sparks.splice(i, 1)
        }
      }
      raf = alive ? requestAnimationFrame(frame) : 0
    }

    const onClick = (event: MouseEvent) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }
      if ((event.target as HTMLElement).closest('a,button')) {
        return
      }
      const now = performance.now()
      for (let i = 0; i < SPARK_COUNT; i++) {
        sparks.push({
          x: event.clientX,
          y: event.clientY,
          angle: (Math.PI * 2 * i) / SPARK_COUNT + Math.random() * 0.4,
          distance: 26 + Math.random() * 22,
          start: now,
        })
      }
      if (!raf) {
        raf = requestAnimationFrame(frame)
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
      raf = 0
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 h-full w-full"
    />
  )
}
