import { ArrowUpRight } from 'lucide-react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { ProjectArt } from '../components/ProjectArt'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/site'

export function Projects() {
  return (
    <div className="inner-page">
      <NavBar route="/projects" />
      <main>
        <section className="projects-intro section-pad">
          <div className="projects-intro-meta">
            <span>Foldcraft archive</span>
            <span>Self-initiated / 2026</span>
          </div>
          <h1><span>Ideas in</span><em>their element.</em></h1>
          <div className="projects-intro-foot">
            <p>A collection of independent concept studies showing how strategy, image, and movement can come together to create a distinct point of view.</p>
            <div className="projects-index" aria-label="Projects in this collection">
              <span><b>Ae</b> Aether</span>
              <span><b>Mo</b> Monogram</span>
              <span><b>Fo</b> Forma</span>
            </div>
          </div>
          <div className="projects-count" aria-hidden="true"><strong>03</strong><span>studies<br />in motion</span></div>
        </section>
        <section className="project-list section-pad">
          {projects.map((project, index) => (
            <div className={`project-feature feature-${index}`} key={project.name}>
              <Reveal><ProjectArt art={project.art} /></Reveal>
              <Reveal delay={100} className="feature-copy">
                <div className="feature-count">{project.number} / 03 <span>{project.type}</span></div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="scope-list">{project.scope.map((item) => <span key={item}>{item}</span>)}</div>
              </Reveal>
            </div>
          ))}
        </section>
        <section className="project-outro section-pad">
          <span className="project-outro-note">The archive has room for what comes next.</span>
          <h2><span>Bring your idea</span><em>into focus.</em></h2>
          <div className="project-outro-bottom">
            <p>Start with the unfinished version.<br />We’ll find the shape together.</p>
            <a href="/contact" className="project-outro-link">
              <span>Start a project</span><ArrowUpRight size={27} strokeWidth={1.4} />
            </a>
          </div>
          <div className="project-outro-mark" aria-hidden="true"><span>F</span><i>+</i><span>C</span></div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
