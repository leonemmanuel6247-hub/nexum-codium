import Reveal from './Reveal.jsx'
import { PRICING } from '../data.js'

export default function Pricing() {
  return (
    <section id="tarifs">
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">Tarifs</span>
          <h2>Une grille transparente</h2>
          <p>Commencez gratuitement, évoluez sans friction.</p>
        </div>
        <div className="pricing">
          {PRICING.map((plan) => (
            <Reveal key={plan.name} className={`price-card${plan.featured ? ' featured' : ''}`}>
              {plan.featured && <span className="rec-tag">Recommandé</span>}
              <h3>{plan.name}</h3>
              <div className="sub">{plan.sub}</div>
              <div className="amount">
                {plan.amount}
                {plan.amountSuffix && <small> {plan.amountSuffix}</small>}
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a href="#cta" className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`} style={{ width: '100%' }}>
                {plan.cta}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}