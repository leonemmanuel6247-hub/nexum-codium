import { useEffect, useMemo, useState } from 'react'
import { useAsciiFrames } from './useAsciiFrames.js'

export default function AsciiRunner({
  src,
  label,
  fps = 14,
  charWidth = 6,
  fontSize,
  maxWidth,
  title,
  active = true,
  chromeless = false,
}) {
  const data = useAsciiFrames(src, active)
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    if (!data || !active) return undefined
    let raf
    let last = performance.now()
    const interval = 1000 / fps
    let acc = 0

    function tick(now) {
      acc += now - last
      last = now
      if (acc >= interval) {
        acc = 0
        setFrame((f) => (f + 1) % data.frames.length)
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [data, active, fps])

  const current = useMemo(() => {
    if (!data) return ''
    return data.frames[frame] || data.frames[0]
  }, [data, frame])

  if (chromeless) {
    return (
      <pre className="ascii-art ascii-chromeless" style={{ fontSize: fontSize || charWidth }} aria-hidden="true">
        {current}
      </pre>
    )
  }

  if (!data) {
    return (
      <div className="ascii-panel" style={{ width: maxWidth }}>
        <div className="ascii-head">
          <span className="ascii-led" />
          <span className="ascii-title">{title || label}</span>
        </div>
        <div className="ascii-loading">chargement de {label}...</div>
      </div>
    )
  }

  const width = data.width * charWidth + 24
  return (
    <div className="ascii-panel" style={{ width: maxWidth || width }}>
      <div className="ascii-head">
        <span className="ascii-led" />
        <span className="ascii-title">{title || label}</span>
        <span className="ascii-meter">
          <b>{label}</b>
        </span>
      </div>
      <pre className="ascii-art" style={{ fontSize: charWidth }}>
        {current}
      </pre>
    </div>
  )
}