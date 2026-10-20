import { ArrowLink } from '../components/ArrowLink'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { PageIntro } from '../components/PageIntro'
import { Reveal } from '../components/Reveal'
import { SectionLabel } from '../components/SectionLabel'
import { principles } from '../data/site'

export function Studio() {
  return (
    <div className="inner-page">
      <NavBar route="/studio" />
      <main>
        <PageIntro
          eyebrow="Inside Foldcraft"
          title={<>Curious minds.<br /><em>Considered craft.</em></>}
          description="Foldcraft is a creative practice for ideas that ask for a fresh perspective. We bring clarity to complexity and character to the details."
        />
        <section className="studio-visual section-pad">
          <Reveal><div className="studio-art"><div className="studio-circle" /><div className="studio-square" /><span>F / C</span><small>MAKE SPACE FOR NEW IDEAS</small></div></Reveal>
        </section>
        <section className="studio-story section-pad">
          <SectionLabel>Our perspective</SectionLabel>
          <div className="studio-story-grid">
            <Reveal><h2>Made to move<br />people <em>forward.</em></h2></Reveal>
            <Reveal delay={120}>
              <p>We see design as a way of connecting people to ideas. The strongest work does more than look good: it gives a story shape, a feeling form, and a brand a place in the world.</p>
              <p>Our approach is collaborative, curious, and deliberate. We ask better questions, follow the interesting details, and make every choice count.</p>
            </Reveal>
          </div>
        </section>
        <section className="principles section-pad">
          <SectionLabel>How we work</SectionLabel>
          <div className="principle-grid">
            {principles.map(({ title, description }, index) => (
              <Reveal delay={index * 90} key={title}>
                <span>0{index + 1}</span><h3>{title}</h3><p>{description}</p>
              </Reveal>
            ))}
          </div>
        </section>
        <section className="next-page section-pad">
          <span>Seen enough?</span>
          <h2>Now let's make<br /><em>something together.</em></h2>
          <ArrowLink href="/contact">Get in touch</ArrowLink>
        </section>
      </main>
      <Footer />
    </div>
  )
}
