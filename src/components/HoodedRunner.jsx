export default function HoodedRunner({ speed = 1 }) {
  const runSpeed = `${Math.max(0.28, Math.min(0.7, 0.58 / speed)).toFixed(2)}s`

  return (
    <div className="runner-wrapper" style={{ '--run-speed': runSpeed }}>
      <div className="speed-lines">
        <span style={{ top: '28%', left: '58%', width: 88, animationDelay: '0s' }} />
        <span style={{ top: '42%', left: '62%', width: 110, animationDelay: '0.18s' }} />
        <span style={{ top: '56%', left: '54%', width: 76, animationDelay: '0.36s' }} />
        <span style={{ top: '70%', left: '60%', width: 96, animationDelay: '0.54s' }} />
        <span style={{ top: '84%', left: '52%', width: 70, animationDelay: '0.72s' }} />
      </div>
      <svg viewBox="0 0 240 240" className="runner-svg" role="img" aria-label="Opérateur en capuche en course">
        <circle cx="115" cy="115" r="86" className="runner-aura" />
        <g className="leg-back">
          <path d="M112 132 L86 168 L104 198" className="limb-stroke" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="arm-back">
          <path d="M118 92 L88 118 L72 106" className="limb-stroke" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="torso-group">
          <path d="M102 86 C118 82, 134 92, 132 134 L104 136 C100 116, 98 98, 102 86 Z" className="hoodie-body" />
          <path d="M98 86 C92 64, 108 46, 132 50 C146 53, 152 66, 146 80 C136 86, 116 88, 98 86 Z" className="hoodie-cowl" />
          <path d="M126 60 C136 61, 142 68, 139 76 C131 77, 125 72, 126 60 Z" className="face-shadow" />
          <line x1="129" y1="67" x2="138" y2="68" className="visor-accent" />
        </g>
        <g className="leg-front">
          <path d="M122 132 L152 158 L140 192" className="limb-stroke-front" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="arm-front">
          <path d="M124 94 L154 114 L168 98" className="limb-stroke-front" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  )
}