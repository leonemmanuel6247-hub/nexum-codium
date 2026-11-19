export default function Hero() {
  return (
    <section className="hero" id="platforme">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <span className="badge">Système de défense autonome v4.2</span>
            <h1>
              Sécurisez votre infrastructure à la <span className="hl">vitesse du code</span>.
            </h1>
            <p className="lead">
              Nexum Codium combine l'intelligence artificielle prédictive et l'isolation Zero-Trust pour
              neutraliser les intrusions en temps réel, avant qu'elles n'atteignent votre noyau.
            </p>
            <div className="hero-ctas">
              <a href="#console" className="btn btn-primary">
                Lancer un diagnostic
              </a>
              <a href="#soc" className="btn btn-ghost">
                Voir la démo interactive
              </a>
            </div>
          </div>
          <div className="hero-visual" />
        </div>
      </div>
    </section>
  )
}