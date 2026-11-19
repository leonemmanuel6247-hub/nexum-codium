import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { PILLARS, CAPABILITIES } from '../data.js'

export function Pillars() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">One Core. Total Defense.</span>
          <h2>Les 4 piliers technologiques</h2>
          <p>Une architecture unifiée où chaque couche renforce la suivante.</p>
        </div>
        <div className="pillars">
          {PILLARS.map((pillar) => (
            <Reveal key={pillar.title} className="pillar">
              <div className="ico">
                <Icon name={pillar.icon} />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Capabilities() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">Core Capabilities</span>
          <h2>Fonctionnalités clés</h2>
        </div>
        <div className="cap-grid">
          {CAPABILITIES.map((cap) => (
            <Reveal key={cap.title} className="cap">
              <div className="ico">
                <Icon name={cap.icon} />
              </div>
              <div>
                <h4>{cap.title}</h4>
                <p>{cap.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}