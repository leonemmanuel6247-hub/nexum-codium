import Reveal from './Reveal.jsx'

export default function Comparison() {
  return (
    <section id="zero-trust">
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">L'urgence cybernétique</span>
          <h2>
            Une attaque toutes les 39 secondes.
            <br />
            Vos pare-feu traditionnels ont déjà un temps de retard.
          </h2>
        </div>
        <Reveal className="compare-grid">
          <div className="compare-card bad">
            <h3>Approche classique</h3>
            <ul>
              <li>Détection post-intrusion, une fois le mal déjà fait</li>
              <li>Alertes manuelles saturées et priorisées à la main</li>
              <li>Temps de réaction mesuré en heures</li>
              <li>Règles statiques dépassées par les attaques Zero-Day</li>
            </ul>
          </div>
          <div className="compare-card good">
            <h3>Approche Nexum Codium</h3>
            <ul>
              <li>Détection prédictive au niveau du code et des flux</li>
              <li>Confinement automatisé par script, sans intervention humaine</li>
              <li>Temps de réaction mesuré en millisecondes</li>
              <li>Vérification continue Zero-Trust sur chaque requête</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}