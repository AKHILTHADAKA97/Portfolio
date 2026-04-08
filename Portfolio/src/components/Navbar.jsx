import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">Akhil Goud.</div>

        <button
          className="navbar-toggler"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`navbar-menu ${menuOpen ? 'mobile-active' : ''}`}>
          <ul className="navbar-links">
            <li>
              <Link to="/work" onClick={() => setMenuOpen(false)}>
                Work
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Clients
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
          </ul>
          <Link
            to="/letstart"
            className="navbar-cta cta-button"
            onClick={() => setMenuOpen(false)}
          >
            <div className="cta-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="M15 16l4-4" />
                <path d="M15 8l4 4" />
              </svg>
            </div>
            <div className="cta-text">Let's Collaborate</div>
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
