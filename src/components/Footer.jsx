import Logo from './Logo.jsx'

const COLUMNS = [
  {
    title: 'Produit',
    links: [
      { label: 'Plateforme', href: '#platforme' },
      { label: 'Zero-Trust', href: '#zero-trust' },
      { label: 'Tarifs', href: '#tarifs' },
      { label: 'API', href: '#api' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Statut', href: '#' },
      { label: 'Bug Bounty', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Entreprise',
    links: [
      { label: 'À propos', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Trust Center', href: '#' },
      { label: 'Carrières', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-about">
            <a href="#top" className="brand">
              <Logo />
              <span>
                Nexum<em>Codium</em>
              </span>
            </a>
            <p>Le lien sécurisé entre votre code et la maîtrise technique de votre défense.</p>
            <span className="system-status">
              <span className="led" />
              System Status : All Systems Operational
            </span>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h5>{col.title}</h5>
              <ul>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span className="signature">
            Conçu et développé par <strong>Leon Astarte</strong>
          </span>
          <div className="legal">
            <a href="#">Mentions légales</a>
            <a href="#">Confidentialité</a>
            <a href="#">RGPD</a>
            <a href="#">Sécurité</a>
          </div>
        </div>
      </div>
    </footer>
  )
}