import { externalLinks } from '../data/portfolio'

function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1180px] items-center justify-between px-6 py-5 md:px-10">
      <a className="wordmark" href="#top" aria-label="Portfolio home">
        MH
      </a>

      <nav aria-label="Social links">
        <ul className="flex items-center gap-5 sm:gap-8">
          {externalLinks.map((link) => (
            <li key={link.label}>
              <a
                className="nav-link"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label} <span aria-hidden="true">{'↗'}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
