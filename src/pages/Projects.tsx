import { ArrowLink } from '../components/ArrowLink'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { PageIntro } from '../components/PageIntro'
import { ProjectArt } from '../components/ProjectArt'
import { Reveal } from '../components/Reveal'
import { projects } from '../data/site'

export function Projects() {
  return (
    <div className="inner-page">
      <NavBar route="/projects" />
      <main>
        <PageIntro
          eyebrow="01 / Selected explorations"
          title={<>Ideas in <em>their element.</em></>}
          description="A collection of independent concept studies showing how strategy, image, and movement can come together to create a distinct point of view."
        />
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
        <section className="next-page section-pad">
          <span>What's next?</span>
          <h2>Bring your idea<br /><em>into focus.</em></h2>
          <ArrowLink href="#/contact">Let's talk</ArrowLink>
        </section>
      </main>
      <Footer />
    </div>
  )
}
