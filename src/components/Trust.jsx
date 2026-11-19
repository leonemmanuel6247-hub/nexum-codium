import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import { INTEGRATIONS, TRUST_ITEMS, FAQ_ITEMS } from '../data.js'

export function IntegrationsTrust() {
  return (
    <section id="api">
      <div className="wrap">
        <div className="split">
          <Reveal className="panel">
            <h3>Intégrations & Écosystème</h3>
            <p>Nexum Codium s'insère dans votre stack existante sans réécriture.</p>
            <div className="int-badges">
              {INTEGRATIONS.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </Reveal>
          <Reveal className="panel">
            <h3>Trust Center</h3>
            <p>Certifications, conformité et programme de divulgation responsables.</p>
            <div className="trust-list">
              {TRUST_ITEMS.map((item) => (
                <div className="trust-item" key={item.title}>
                  <div className="shield">
                    <Icon name="shield" />
                  </div>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">FAQ Technique</span>
          <h2>Questions fréquentes</h2>
        </div>
        <Reveal className="faq">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = open === index
            return (
              <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
                <button className="faq-q" type="button" onClick={() => setOpen(isOpen ? null : index)}>
                  {item.q}
                  <Icon name="chevron" className="chev" />
                </button>
                <div className="faq-a">
                  <p>{item.a}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}

export function CTA() {
  return (
    <section id="cta">
      <div className="wrap">
        <Reveal className="cta-banner">
          <h2>Prêt à passer à la vitesse du code ?</h2>
          <p>
            Lancez un diagnostic gratuit de votre infrastructure en moins de 10 minutes. Aucune carte bancaire,
            aucun agent à installer sur vos serveurs critiques avant validation.
          </p>
          <div className="hero-ctas">
            <a href="#" className="btn btn-primary">
              Lancer un audit gratuit
            </a>
            <a href="#" className="btn btn-ghost">
              Parler à un expert
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}