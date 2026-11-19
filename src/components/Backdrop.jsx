import SpaceCanvas from './SpaceCanvas.jsx'
import AsciiRunner from './ascii/AsciiRunner.jsx'

export default function Backdrop({ theme, reducedMotion }) {
  return (
    <>
      <div id="nexum-backdrop" className="backdrop" aria-hidden="true">
        <SpaceCanvas theme={theme} reducedMotion={reducedMotion} />
      </div>

      <div className="ascii-stage" aria-hidden="true">
        <div className="ascii-figure ascii-figure-left">
          <AsciiRunner
            src="/ascii/forrest.json"
            label="forrest"
            fps={18}
            charWidth="clamp(3px, 0.38vw, 8px)"
            active={!reducedMotion}
            chromeless
          />
        </div>
        <div className="ascii-figure ascii-figure-right">
          <AsciiRunner
            src="/ascii/hooded.json"
            label="hooded"
            fps={1}
            charWidth="clamp(2.5px, 0.3vw, 6px)"
            active={!reducedMotion}
            chromeless
          />
        </div>
      </div>
    </>
  )
}