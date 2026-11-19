import { useEffect, useRef, useState } from 'react'
import { HERO_BASH_LINES } from '../data.js'
import { useReducedMotion } from '../hooks/useTheme.js'

export default function HeroTerminal({ onSpeedChange, compact = false }) {
  const reducedMotion = useReducedMotion()
  const [lines, setLines] = useState([])

  useEffect(() => {
    if (reducedMotion) {
      setLines(HERO_BASH_LINES.map((l, i) => ({ ...l, partial: l.t, id: i })))
      return undefined
    }

    let cancelled = false
    let timeouts = []

    function schedule(fn, delay) {
      const id = setTimeout(fn, delay)
      timeouts.push(id)
    }

    function run() {
      setLines([])
      let lineIdx = 0
      let charIdx = 0

      function tick() {
        if (cancelled) return
        if (lineIdx >= HERO_BASH_LINES.length) {
          schedule(() => {
            if (cancelled) return
            lineIdx = 0
            charIdx = 0
            if (onSpeedChange) onSpeedChange(1)
            run()
          }, 3200)
          return
        }
        const line = HERO_BASH_LINES[lineIdx]
        if (charIdx === 0 && onSpeedChange) {
          onSpeedChange(line.c === 'prompt' ? 1.35 : 1)
        }
        charIdx += 1
        const partial = line.t.slice(0, charIdx)
        setLines((prev) => {
          const next = prev.slice(0, lineIdx)
          next[lineIdx] = { ...line, partial, id: lineIdx }
          return compact ? next.slice(-6) : next
        })
        if (charIdx >= line.t.length) {
          lineIdx += 1
          charIdx = 0
          schedule(tick, line.c === 'prompt' ? 320 : 420)
        } else {
          schedule(tick, line.c === 'prompt' ? 16 : 9)
        }
      }
      tick()
    }

    run()
    return () => {
      cancelled = true
      timeouts.forEach((id) => clearTimeout(id))
      timeouts = []
    }
  }, [reducedMotion, onSpeedChange])

  return (
    <div className={`terminal${compact ? ' compact' : ''}`} aria-label="Terminal de démonstration">
      <div className="terminal-bar">
        <span className="dot r" />
        <span className="dot y" />
        <span className="dot g" />
        <span className="title">nexum@sec-runner:~/ops</span>
      </div>
      <div className="terminal-body">
        {lines.map((line) => (
          <div key={line.id} className={line.c}>
            {line.partial}
          </div>
        ))}
        <span className="cursor" />
      </div>
    </div>
  )
}