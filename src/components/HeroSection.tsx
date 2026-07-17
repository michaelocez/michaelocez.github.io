function HeroSection() {
  return (
    <section className="hero-grid mx-auto grid w-full max-w-[1180px] gap-14 px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-24 lg:pb-32 lg:pt-32">
      <div className="max-w-[790px]">
        <h1 className="hero-title hero-reveal">
          Hi, I&apos;m <span>Michael.</span>
        </h1>

        <p className="hero-copy hero-reveal max-w-[650px]">
          I&apos;m a developer with a background in Computer Science and
          Statistics, building full-stack applications, interactive
          experiences, and data-driven projects.
        </p>

        <div className="hero-actions hero-reveal flex flex-wrap gap-3">
          <a className="primary-link" href="#work">
            Explore my work <span aria-hidden="true">{'↓'}</span>
          </a>
          <a
            className="secondary-link"
            href="mailto:michaelhuang329@gmail.com"
          >
            Contact me
          </a>
        </div>
      </div>

      <aside className="hero-meta hero-reveal" aria-label="Profile summary">
        <div>
          <p className="meta-label">Based in</p>
          <p className="meta-value">New Zealand</p>
        </div>
        <div>
          <p className="meta-label">Focus</p>
          <p className="meta-value">Full-stack development &amp; data</p>
        </div>
        <div>
          <p className="meta-label">Currently</p>
          <p className="meta-value">Open to graduate opportunities</p>
        </div>
      </aside>
    </section>
  )
}

export default HeroSection
