import type { ProjectArtKey } from '../types/site'

interface ProjectArtProps {
  art: ProjectArtKey
}

export function ProjectArt({ art }: ProjectArtProps) {
  return (
    <div className={`project-art art-${art}`} aria-hidden="true">
      {art === 'aether' && (
        <>
          <div className="aether-orbit" />
          <div className="aether-bottle"><span>AETHER</span><small>EAU DE PARFUM</small></div>
          <span className="art-caption">FEEL SOMETHING NEW</span>
        </>
      )}
      {art === 'monogram' && (
        <>
          <div className="mono-grid" />
          <span className="mono-big">M<span>○</span></span>
          <span className="mono-side">NOTHING<br />STAYS STILL.</span>
          <span className="mono-bottom">MONOGRAM · ISSUE 01</span>
        </>
      )}
      {art === 'forma' && (
        <>
          <div className="forma-disc" />
          <div className="forma-pill" />
          <span className="forma-type">for<br />ma</span>
          <span className="forma-bottom">OBJECTS OF ATTENTION</span>
        </>
      )}
    </div>
  )
}
