import { useTheme, useReducedMotion } from './hooks/useTheme.js'
import Backdrop from './components/Backdrop.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import SOC from './components/SOC.jsx'
import Comparison from './components/Comparison.jsx'
import { Pillars, Capabilities } from './components/Features.jsx'
import { Sectors, SocialProof } from './components/Sectors.jsx'
import Pricing from './components/Pricing.jsx'
import { IntegrationsTrust, FAQ, CTA } from './components/Trust.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const reducedMotion = useReducedMotion()

  return (
    <>
      <Backdrop theme={theme} reducedMotion={reducedMotion} />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="top">
        <Hero />
        <SOC />
        <Comparison />
        <Pillars />
        <Capabilities />
        <Sectors />
        <SocialProof />
        <Pricing />
        <IntegrationsTrust />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}