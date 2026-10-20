import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { ArrowLink } from '../components/ArrowLink'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { projects, services, videoUrl } from '../data/site'

export function Home() {
  return (
    <>
      <section className="hero" id="top">
        <video className="hero-video" autoPlay muted loop playsInline poster="" aria-hidden="true">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <div className="hero-shade" />
        <NavBar route="/" light />
        <div className="hero-content">
          <div className="hero-top">
            <span className="hero-kicker">Independent creative studio / Est. 2026</span>
            <h1>Shaping visual<br />narratives, <em>one<br />pixel at a time.</em></h1>
          </div>
          <div className="hero-bottom">
            <div>
              <p>We turn ideas into identities, experiences, and moving images that feel impossible to ignore.</p>
              <a href="/projects" className="hero-cta">Explore work <ArrowUpRight size={18} /></a>
            </div>
            <a className="hero-scroll" href="/projects" aria-label="Explore projects">
              Scroll to explore <ArrowDown size={16} />
            </a>
          </div>
        </div>
        <div className="hero-index">FC—001 / A different perspective</div>
        <div className="hero-stamp" aria-hidden="true">
          <svg viewBox="0 0 120 120">
            <defs><path id="stamp-circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" /></defs>
            <text><textPath href="#stamp-circle">FOLDCRAFT STUDIO · FORM FOLLOWS FEELING · </textPath></text>
          </svg>
          <span>✳</span>
        </div>
      </section>

      <main>
        <div className="motion-rail" aria-hidden="true">
          <div className="motion-rail-track">
            {Array.from({ length: 4 }, (_, index) => (
              <span key={index}>Build the feeling <b>✳</b> Shape the story <b>✳</b> Move the idea <b>✳</b></span>
            ))}
          </div>
        </div>

        <section className="intro section-pad">
          <SectionLabel>Behind the fold</SectionLabel>
          <Reveal><h2>We believe the best ideas <span>make you feel something.</span></h2></Reveal>
          <div className="intro-bottom">
            <span className="intro-coordinate">ALWAYS CURIOUS / OPEN TO EVERYWHERE</span>
            <Reveal><p>Foldcraft is an independent creative studio working where strategy, design, and motion meet. We build expressive worlds for ambitious ideas, from the first sketch to the final frame.</p></Reveal>
            <ArrowLink href="/studio">Meet the studio</ArrowLink>
          </div>
        </section>

        <section className="work-preview section-pad" id="work">
          <div className="section-heading">
            <SectionLabel>Selected explorations</SectionLabel>
            <Reveal><h2>Work with<br /><em>something to say.</em></h2></Reveal>
            <p>Concept studies exploring the worlds we love to make.</p>
          </div>
          <div className="project-grid">
            {projects.slice(0, 2).map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
          </div>
          <div className="work-more"><ArrowLink href="/projects">See all projects</ArrowLink></div>
        </section>

        <section className="services section-pad">
          <SectionLabel>Ways we shape an idea</SectionLabel>
          <div className="services-layout">
            <Reveal className="services-intro">
              <h2>Every good idea deserves a world of its own<span className="accent-star">✳</span></h2>
              <p>From the spark to the final detail, we shape the whole experience.</p>
            </Reveal>
            <div className="service-list">
              {services.map(({ number, title, description }) => (
                <Reveal key={number}>
                  <div className="service-row">
                    <span>{number}</span>
                    <div><h3>{title}</h3><p>{description}</p></div>
                    <ArrowUpRight size={19} strokeWidth={1.4} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-band">
          <div className="contact-band-orbit" />
          <div className="contact-band-inner">
            <span>Have something in mind?</span>
            <h2>Let's unfold<br /><em>something new.</em></h2>
            <a href="/contact">Start a conversation <ArrowUpRight size={19} /></a>
          </div>
          <span className="contact-band-index">THE NEXT CHAPTER STARTS HERE / 004</span>
        </section>
      </main>
      <Footer />
    </>
  )
}
