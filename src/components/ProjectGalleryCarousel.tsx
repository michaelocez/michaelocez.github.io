import { useState } from 'react'
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
  const activeItem = items[activeIndex]

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
        />
      </div>

      <div className="project-gallery__toolbar">
        <button type="button" onClick={showPrevious}>
          <span aria-hidden="true">{'\u2190'}</span> Previous
        </button>

        <p className="project-gallery__caption" aria-live="polite">
          <span>
            {activeIndex + 1} / {items.length}
          </span>
          {activeItem.caption}
        </p>

        <button type="button" onClick={showNext}>
          Next <span aria-hidden="true">{'\u2192'}</span>
        </button>
      </div>

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
    </section>
  )
}

export default ProjectGalleryCarousel
