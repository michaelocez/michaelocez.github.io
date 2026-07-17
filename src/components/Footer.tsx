import { externalLinks } from '../data/portfolio'

const currentYear = new Date().getFullYear()

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-main mx-auto grid w-full max-w-[1180px] gap-12 px-6 py-14 md:px-10 md:py-16">
        <div className="footer-identity">
          <h2 className="footer-title">Contact</h2>
          <p className="footer-name">Michael H</p>
          <p className="footer-location">New Zealand</p>
        </div>

        <nav className="footer-social" aria-label="Social and contact links">
          <h3>Social</h3>
          <ul className="footer-links">
            {externalLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label} <span aria-hidden="true">{'↗'}</span>
                </a>
              </li>
            ))}
            <li>
              <a href="mailto:michaelhuang329@gmail.com">Email</a>
            </li>
          </ul>
        </nav>

        <div className="footer-meta">
          <p>&copy; {currentYear}</p>
          <a href="#top">
            Back to top <span aria-hidden="true">{'↑'}</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
