import { useEffect, useMemo, useRef, useState } from 'react'
import { useInView, useReducedMotion } from '../hooks/useTheme.js'

const FW_POOL = [
  { t: 'ACCEPT  tcp 10.0.0.5:443 -> edge-01 (tls1.3)', c: 'tag-ok' },
  { t: 'DROP    tcp 185.220.101.4:51234 -> api:8080 (scan)', c: 'tag-err' },
  { t: 'BLOCK   udp 45.12.9.77:1900 -> broadcast (ssdp)', c: 'tag-warn' },
  { t: 'ACCEPT  tcp 10.0.0.12:5432 -> db-01 (mtls)', c: 'tag-ok' },
  { t: 'ALERT   tcp 103.4.55.2:40122 -> auth:22 (bruteforce)', c: 'tag-warn' },
  { t: 'ACCEPT  tcp 10.0.0.9:6379 -> cache (ztrust)', c: 'tag-ok' },
  { t: 'DROP    tcp 89.248.165.3:33333 -> rdp (rdp-scan)', c: 'tag-err' },
  { t: 'BLOCK   tcp 192.168.4.7:8080 -> k8s-api (policy)', c: 'tag-warn' },
]

const BEH_POOL = [
  { t: 'profil normal  u=sre-04  score=0.02  action=allow', c: 'tag-ok' },
  { t: 'anomalie       u=svc-x   score=0.91  action=isolate', c: 'tag-err' },
  { t: 'bascule        node-07  score=0.44  action=observe', c: 'tag-warn' },
  { t: 'profil normal  u=deploy  score=0.06  action=allow', c: 'tag-ok' },
  { t: 'exfil pattern  u=svc-y   score=0.88  action=block', c: 'tag-err' },
  { t: 'lateral move   u=guest   score=0.72  action=quarantine', c: 'tag-warn' },
  { t: 'profil normal  u=ci-bot  score=0.01  action=allow', c: 'tag-ok' },
]

const TABS = [
  { id: 'net', label: 'Flux Réseau' },
  { id: 'fw', label: 'Logs Pare-feu' },
  { id: 'beh', label: 'Analyse Comportementale' },
]

function pad(n) {
  return String(n).padStart(2, '0')
}

function stamp(date) {
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

function useAnimatedNumber(target, active, duration = 1800, decimals = 0, suffix = '') {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!active) return undefined
    let frame
    const start = performance.now()
    function tick(now) {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, target, duration])

  if (decimals) return `${value.toFixed(decimals)}${suffix}`
  return `${Math.floor(value).toLocaleString('fr-FR')}${suffix}`
}

function LiveLogs({ pool, interval }) {
  const reducedMotion = useReducedMotion()
  const [items, setItems] = useState([])

  useEffect(() => {
    function makeItem() {
      const item = pool[Math.floor(Math.random() * pool.length)]
      return { ...item, time: stamp(new Date()), key: Math.random().toString(36).slice(2) }
    }
    setItems(Array.from({ length: 6 }, makeItem))
    if (reducedMotion) return undefined
    const id = setInterval(() => {
      setItems((prev) => [...prev.slice(-8), makeItem()])
    }, interval)
    return () => clearInterval(id)
  }, [pool, interval, reducedMotion])

  return (
    <div className="panel-inner">
      {items.map((item) => (
        <div className="log-line" key={item.key}>
          <span className="tag-info">[{item.time}] </span>
          <span className={item.c}>{item.t}</span>
        </div>
      ))}
    </div>
  )
}

function NetworkChart({ active }) {
  const reducedMotion = useReducedMotion()
  const [bars, setBars] = useState(() => Array.from({ length: 32 }, () => 8))

  useEffect(() => {
    if (!active) return undefined
    function refresh() {
      setBars(Array.from({ length: 32 }, () => 18 + Math.random() * 78))
    }
    refresh()
    if (reducedMotion) return undefined
    const id = setInterval(refresh, 1800)
    return () => clearInterval(id)
  }, [active, reducedMotion])

  return (
    <div className="panel-inner">
      <div className="chart-wrap">
        {bars.map((h, i) => (
          <div className="bar" key={i} style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  )
}

export default function SOC() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.25 })
  const [tab, setTab] = useState('net')
  const [sync, setSync] = useState(() => stamp(new Date()))

  const threats = useAnimatedNumber(14892, inView)
  const latency = useAnimatedNumber(3.8, inView, 1600, 1, ' ms')

  useEffect(() => {
    const id = setInterval(() => setSync(stamp(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  const panel = useMemo(() => {
    if (tab === 'net') return <NetworkChart active={inView} />
    if (tab === 'fw') return <LiveLogs pool={FW_POOL} interval={2200} />
    return <LiveLogs pool={BEH_POOL} interval={2000} />
  }, [tab, inView])

  return (
    <section id="soc">
      <div className="wrap">
        <div className="section-head reveal in">
          <span className="section-tag">Live Threat Monitor</span>
          <h2>Centre des Opérations de Sécurité</h2>
          <p>
            Télémétrie en temps réel de votre périmètre : menaces, latence de confinement et posture de défense,
            unifiées dans une seule console.
          </p>
        </div>
        <div className="soc reveal in" id="console" ref={ref}>
          <div className="soc-head">
            <span className="status-pill">
              <span className="led" />
              STATUT : BOUCLIER ACTIF
            </span>
            <span className="soc-sync">Dernière synchronisation : {sync}</span>
          </div>
          <div className="soc-metrics">
            <div className="metric">
              <div className="val">0</div>
              <div className="lbl">Faille critique active</div>
            </div>
            <div className="metric">
              <div className="val">{threats}</div>
              <div className="lbl">Menaces neutralisées (24h)</div>
            </div>
            <div className="metric">
              <div className="val">{latency}</div>
              <div className="lbl">Temps moyen de confinement</div>
            </div>
          </div>
          <div className="tabs" role="tablist">
            {TABS.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                className={`tab${tab === t.id ? ' active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="tab-panel" role="tabpanel" key={tab}>
            {panel}
          </div>
        </div>
      </div>
    </section>
  )
}