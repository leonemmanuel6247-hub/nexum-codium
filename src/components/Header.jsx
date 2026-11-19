import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { NAV_LINKS } from '../data.js'

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <div className="wrap">
        <nav>
          <a href="#top" className="brand" aria-label="Nexum Codium - accueil">
            <Logo />
            <span>
              Nexum<em>Codium</em>
            </span>
          </a>
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={onToggleTheme}
              aria-label="Basculer le thème clair/sombre"
              title="Changer de thème"
            >
              <Icon name={theme === 'dark' ? 'moon' : 'sun'} />
            </button>
            <a href="#console" className="btn btn-ghost hide-sm">
              Connexion Console
            </a>
            <a href="#cta" className="btn btn-primary">
              Audit Gratuit
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}