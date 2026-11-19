import Reveal from './Reveal.jsx'
import { SECTORS, LOGOS, CASES } from '../data.js'

export function Sectors() {
  return (
    <section id="secteurs">
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">Who We Protect</span>
          <h2>Secteurs protégés</h2>
        </div>
        <div className="sectors">
          {SECTORS.map((sector) => (
            <Reveal key={sector.title} className="sector">
              <h4>
                <span className="d" />
                {sector.title}
              </h4>
              <p>{sector.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SocialProof() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">Preuves Sociales</span>
          <h2>Ils nous font confiance</h2>
        </div>
        <Reveal className="logos">
          {LOGOS.map((logo) => (
            <span key={logo}>{logo}</span>
          ))}
        </Reveal>
        <div className="cases">
          {CASES.map((item) => (
            <Reveal key={item.quote} className="case">
              <div className="quote">{item.quote}</div>
              <div className="who">{item.who}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}