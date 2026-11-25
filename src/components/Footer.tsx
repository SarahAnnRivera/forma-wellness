
import { Link, useLocation } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const { pathname } = useLocation()
  const isLightPage =
  ['/move', '/restore', '/refresh'].includes(pathname) ||
  pathname.startsWith('/product/')

  return (
    <footer className={`forma-footer ${isLightPage ? 'footer-light' : ''}`}>
      <Link to="/" className="footer-brand">
        FORMA
      </Link>

      <nav className="footer-links" aria-label="Footer navigation">
        <a href="mailto:contact@formaprivatewellness.com">
          Contact Us
        </a>

        <Link to="/privacy">
          Privacy Policy
        </Link>

        <Link to="/affiliate-disclosure">
          Affiliate Disclosure
        </Link>
      </nav>

      <span className="footer-copyright">
        © {new Date().getFullYear()} FORMA Private Wellness
      </span>
    </footer>
  )
}
