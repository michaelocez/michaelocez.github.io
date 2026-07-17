import type { CSSProperties } from 'react'

function createStars(count: number) {
  let seed = 329
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0
    return seed / 4294967296
  }

  return Array.from({ length: count }, (_, index) => ({
    id: index,
    style: {
      '--star-x': `${(2 + random() * 96).toFixed(2)}%`,
      '--star-y': `${(3 + random() * 94).toFixed(2)}%`,
      '--star-size': `${(0.8 + random() * 1.4).toFixed(2)}px`,
      '--star-delay': `${(-random() * 10).toFixed(2)}s`,
      '--star-duration': `${(5 + random() * 7).toFixed(2)}s`,
    } as CSSProperties,
  }))
}

const stars = createStars(40)

function BackgroundEffects() {
  return (
    <>
      <div className="star-field" aria-hidden="true">
        {stars.map((star) => (
          <span className="star" key={star.id} style={star.style} />
        ))}
      </div>
      <div className="pointer-glow" aria-hidden="true" />
    </>
  )
}

export default BackgroundEffects
