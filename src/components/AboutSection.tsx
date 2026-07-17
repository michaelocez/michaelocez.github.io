import { technicalProfile } from '../data/portfolio'

function AboutSection() {
  return (
    <section
      className="about-section mx-auto w-full max-w-[1180px] px-6 py-20 md:px-10 md:py-28"
      id="about"
    >
      <p className="section-kicker">Background</p>
      <h2 className="section-title">About</h2>

      <div className="about-layout">
        <div className="about-copy">
          <p>
            I&apos;m a recent Computer Science graduate with a minor in
            Statistics from the University of Canterbury. My studies and
            projects have given me experience across full-stack development,
            interactive software, and statistical analysis.
          </p>
        </div>

        <div className="technical-profile">
          <h3>Technical profile</h3>
          <div className="skill-groups">
            {technicalProfile.map((group) => (
              <div className="skill-group" key={group.label}>
                <h4>{group.label}</h4>
                <ul aria-label={group.label}>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
