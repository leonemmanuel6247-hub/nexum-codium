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
            charWidth="clamp(4px, 0.5vw, 11px)"
            active={!reducedMotion}
            chromeless
          />
        </div>
        <div className="ascii-figure ascii-figure-right">
          <AsciiRunner
            src="/ascii/hooded.json"
            label="hooded"
            fps={1}
            charWidth="clamp(3.4px, 0.42vw, 9px)"
            active={!reducedMotion}
            chromeless
          />
        </div>
      </div>
    </>
  )
}