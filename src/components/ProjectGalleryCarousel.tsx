import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import type { ProjectGalleryImage } from '../types/portfolio'

type ProjectGalleryCarouselProps = {
  items: ProjectGalleryImage[]
  projectTitle: string
}

function ProjectGalleryCarousel({
  items,
  projectTitle,
}: ProjectGalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const preloadedImages = useRef(new Map<string, HTMLImageElement>())
  const activeItem = items[activeIndex]

  useEffect(() => {
    if (items.length < 2) {
      return
    }

    const adjacentIndexes = new Set([
      (activeIndex - 1 + items.length) % items.length,
      (activeIndex + 1) % items.length,
    ])

    adjacentIndexes.forEach((index) => {
      const source = items[index].src

      if (preloadedImages.current.has(source)) {
        return
      }

      const image = new Image()
      image.decoding = 'async'
      image.src = source
      void image.decode().catch(() => undefined)
      preloadedImages.current.set(source, image)
    })
  }, [activeIndex, items])

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? items.length - 1 : currentIndex - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === items.length - 1 ? 0 : currentIndex + 1,
    )
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault()
      showPrevious()
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault()
      showNext()
    }
  }

  return (
    <section
      className="project-gallery"
      aria-label={`${projectTitle} visual tour`}
      aria-roledescription="carousel"
      onKeyDown={handleKeyDown}
    >
      <div className="project-gallery__viewport">
        <img
          className={`project-gallery__image${
            activeItem.orientation === 'portrait'
              ? ' project-gallery__image--portrait'
              : ''
          }`}
          src={activeItem.src}
          alt={activeItem.alt}
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="project-gallery__toolbar">
        <button type="button" onClick={showPrevious}>
          <span aria-hidden="true">{'\u2190'}</span> Previous
        </button>

        <p className="project-gallery__caption" aria-live="polite">
          {activeItem.caption}
        </p>

        <button type="button" onClick={showNext}>
          Next <span aria-hidden="true">{'\u2192'}</span>
        </button>
      </div>

      <div className="project-gallery__pagination-group">
        <ol className="project-gallery__pagination" aria-label="Choose a slide">
          {items.map((item, index) => (
            <li key={item.caption}>
              <button
                type="button"
                aria-label={`Show slide ${index + 1}: ${item.caption}`}
                aria-current={index === activeIndex ? 'true' : undefined}
                onClick={() => setActiveIndex(index)}
              />
            </li>
          ))}
        </ol>

        <p className="project-gallery__counter" aria-hidden="true">
          {activeIndex + 1} / {items.length}
        </p>
      </div>
    </section>
  )
}

export default ProjectGalleryCarousel
