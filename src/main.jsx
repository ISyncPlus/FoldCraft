import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Menu, X } from 'lucide-react'
import './index.css'

const videoUrl = '/hero.mp4'
const email = 'hello@foldcraft.studio'
const nav = [
  ['Home', '/'],
  ['Projects', '/projects'],
  ['Studio', '/studio'],
  ['Reach Us', '/contact'],
]

const projects = [
  {
    number: '01', name: 'Aether', category: 'Identity / Packaging', year: '2026',
    type: 'Independent concept', art: 'aether',
    description: 'A quiet identity for a considered fragrance house. Earthy restraint meets a sense of the unexpected.',
    scope: ['Strategy', 'Visual identity', 'Packaging'],
  },
  {
    number: '02', name: 'Monogram', category: 'Editorial / Digital', year: '2026',
    type: 'Independent concept', art: 'monogram',
    description: 'An editorial platform built around the pleasure of looking closer, with a flexible visual language for stories in motion.',
    scope: ['Art direction', 'Digital', 'Motion'],
  },
  {
    number: '03', name: 'Forma', category: 'Campaign / Motion', year: '2026',
    type: 'Independent concept', art: 'forma',
    description: 'A sculptural campaign that gives everyday objects a new point of view through form, rhythm, and color.',
    scope: ['Concept', 'Campaign', 'Motion'],
  },
]

function useRoute() {
  const read = () => window.location.hash.replace(/^#/, '') || '/'
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const onHash = () => { setRoute(read()); window.scrollTo({ top: 0, behavior: 'instant' }) }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

function Reveal({ children, className = '', delay = 0 }) {
  const [visible, setVisible] = useState(false)
  const ref = React.useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.disconnect() }
    }, { threshold: 0.12 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>
}

function Logo({ light = false }) {
  return <a href="#/" className={`brand-mark ${light ? 'text-white' : 'text-ink'}`} aria-label="Foldcraft home">Foldcraft<span className="brand-dot">.</span></a>
}

function NavBar({ light = false }) {
  const [open, setOpen] = useState(false)
  const route = useRoute()
  useEffect(() => setOpen(false), [route])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])
  return <>
    <header className={`site-nav ${light || open ? 'nav-light' : 'nav-dark'}`}>
      <div className="nav-left">
        <Logo light={light || open} />
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={href} href={`#${href}`} className={route === href ? 'active' : ''}>{label}</a>)}
        </nav>
      </div>
      <a href="#/contact" className={`nav-talk ${light ? 'nav-talk-light' : 'nav-talk-dark'}`}>Let's Talk <ArrowUpRight size={15} strokeWidth={1.8} /></a>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <Menu className={`menu-icon ${open ? 'icon-out' : 'icon-in'}`} size={23} />
        <X className={`menu-icon ${open ? 'icon-in' : 'icon-out'}`} size={23} />
      </button>
    </header>
    <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`} aria-hidden={!open} inert={!open}>
      <nav aria-label="Mobile navigation">
        <span className="menu-eyebrow">Explore Foldcraft</span>
        {nav.map(([label, href], i) => <a key={href} href={`#${href}`} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${110 + i * 65}ms` : '0ms' }}>{label}<ArrowUpRight size={22} /></a>)}
        <a className="mobile-contact" href="#/contact" onClick={() => setOpen(false)}>Start a project <ArrowRight size={18} /></a>
      </nav>
      <p>Independent creative studio<br />Brand, digital, and motion.</p>
    </div>
  </>
}

function ArrowLink({ href, children, light = false }) {
  return <a href={href} className={`arrow-link ${light ? 'arrow-link-light' : ''}`}>{children}<span><ArrowUpRight size={21} strokeWidth={1.6} /></span></a>
}

function SectionLabel({ number, children }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span></div>
}

function ProjectArt({ art }) {
  return <div className={`project-art art-${art}`} aria-hidden="true">
    {art === 'aether' && <><div className="aether-orbit" /><div className="aether-bottle"><span>AETHER</span><small>EAU DE PARFUM</small></div><span className="art-caption">FEEL SOMETHING NEW</span></>}
    {art === 'monogram' && <><div className="mono-grid" /><span className="mono-big">M<span>○</span></span><span className="mono-side">NOTHING<br />STAYS STILL.</span><span className="mono-bottom">MONOGRAM · ISSUE 01</span></>}
    {art === 'forma' && <><div className="forma-disc" /><div className="forma-pill" /><span className="forma-type">for<br />ma</span><span className="forma-bottom">OBJECTS OF ATTENTION</span></>}
  </div>
}

function ProjectCard({ project, index }) {
  return <Reveal delay={index * 100} className="project-card">
    <a href="#/projects" aria-label={`View ${project.name} project`}>
      <div className="project-image"><ProjectArt art={project.art} /><span className="project-hover">Explore<br />concept <ArrowUpRight size={20} /></span></div>
      <div className="project-meta">
        <div><span className="project-number">{project.number} / {project.type}</span><h3>{project.name}</h3><p>{project.category}</p></div>
        <span className="project-arrow"><ArrowUpRight size={21} strokeWidth={1.6} /></span>
      </div>
    </a>
  </Reveal>
}

function Footer() {
  return <footer className="footer">
    <div className="footer-top"><Logo /><span>Ideas take shape here.</span></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Foldcraft Studio</span><span>Independent by design.</span><a href="#/">Back to top ↑</a></div>
  </footer>
}

function Home() {
  return <>
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline poster="" aria-hidden="true"><source src={videoUrl} type="video/mp4" /></video>
      <div className="hero-shade" />
      <NavBar light />
      <div className="hero-content">
        <div className="hero-top"><span className="hero-kicker">Independent creative studio / Est. 2026</span><h1>Shaping visual<br />narratives, <em>one<br />pixel at a time.</em></h1></div>
        <div className="hero-bottom"><div><p>We turn ideas into identities, experiences, and moving images that feel impossible to ignore.</p><a href="#/projects" className="hero-cta">Explore work <ArrowUpRight size={18} /></a></div><a className="hero-scroll" href="#/projects" aria-label="Explore projects">Scroll to explore <ArrowDown size={16} /></a></div>
      </div>
      <div className="hero-index">FC—001 / A different perspective</div>
      <div className="hero-stamp" aria-hidden="true"><svg viewBox="0 0 120 120"><defs><path id="stamp-circle" d="M 60,60 m -45,0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" /></defs><text><textPath href="#stamp-circle">FOLDCRAFT STUDIO · FORM FOLLOWS FEELING · </textPath></text></svg><span>✳</span></div>
    </section>

    <main>
      <div className="motion-rail" aria-hidden="true"><div className="motion-rail-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>Build the feeling <b>✳</b> Shape the story <b>✳</b> Move the idea <b>✳</b></span>)}</div></div>
      <section className="intro section-pad">
        <SectionLabel number="01 /">A little about us</SectionLabel>
        <Reveal><h2>We believe the best ideas <span>make you feel something.</span></h2></Reveal>
        <div className="intro-bottom"><span className="intro-coordinate">ALWAYS CURIOUS / OPEN TO EVERYWHERE</span><Reveal><p>Foldcraft is an independent creative studio working where strategy, design, and motion meet. We build expressive worlds for ambitious ideas, from the first sketch to the final frame.</p></Reveal><ArrowLink href="#/studio">Meet the studio</ArrowLink></div>
      </section>

      <section className="work-preview section-pad" id="work">
        <div className="section-heading"><SectionLabel number="02 /">Selected explorations</SectionLabel><Reveal><h2>Work with<br /><em>something to say.</em></h2></Reveal><p>Concept studies exploring the worlds we love to make.</p></div>
        <div className="project-grid">{projects.slice(0, 2).map((p, i) => <ProjectCard key={p.name} project={p} index={i} />)}</div>
        <div className="work-more"><ArrowLink href="#/projects">See all projects</ArrowLink></div>
      </section>

      <section className="services section-pad">
        <SectionLabel number="03 /">What we do</SectionLabel>
        <div className="services-layout"><Reveal className="services-intro"><h2>Every good idea deserves a world of its own<span className="accent-star">✳</span></h2><p>From the spark to the final detail, we shape the whole experience.</p></Reveal><div className="service-list">
          {[['01', 'Brand identity', 'Distinctive systems built to be seen, felt, and remembered.'], ['02', 'Digital experiences', 'Thoughtful websites and digital spaces with character.'], ['03', 'Art direction', 'A clear visual point of view across every touchpoint.'], ['04', 'Motion & content', 'Movement that gives the story another dimension.']].map(([n, title, desc]) => <Reveal key={n}><div className="service-row"><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight size={19} strokeWidth={1.4} /></div></Reveal>)}
        </div></div>
      </section>

      <section className="contact-band"><div className="contact-band-orbit" /><div className="contact-band-inner"><span>Have something in mind?</span><h2>Let's unfold<br /><em>something new.</em></h2><a href="#/contact">Start a conversation <ArrowUpRight size={19} /></a></div><span className="contact-band-index">THE NEXT CHAPTER STARTS HERE / 004</span></section>
    </main>
    <Footer />
  </>
}

function PageIntro({ eyebrow, title, description }) {
  return <div className="page-intro section-pad"><span className="page-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
}

function Projects() {
  return <div className="inner-page"><NavBar /><main>
    <PageIntro eyebrow="01 / Selected explorations" title={<>Ideas in <em>their element.</em></>} description="A collection of independent concept studies showing how strategy, image, and movement can come together to create a distinct point of view." />
    <section className="project-list section-pad">{projects.map((p, i) => <div className={`project-feature feature-${i}`} key={p.name}><Reveal><ProjectArt art={p.art} /></Reveal><Reveal delay={100} className="feature-copy"><div className="feature-count">{p.number} / 03 <span>{p.type}</span></div><h2>{p.name}</h2><p>{p.description}</p><div className="scope-list">{p.scope.map(s => <span key={s}>{s}</span>)}</div></Reveal></div>)}</section>
    <section className="next-page section-pad"><span>What's next?</span><h2>Bring your idea<br /><em>into focus.</em></h2><ArrowLink href="#/contact">Let's talk</ArrowLink></section>
  </main><Footer /></div>
}

function Studio() {
  return <div className="inner-page"><NavBar /><main>
    <PageIntro eyebrow="02 / The studio" title={<>Curious minds.<br /><em>Considered craft.</em></>} description="Foldcraft is a creative practice for ideas that ask for a fresh perspective. We bring clarity to complexity and character to the details." />
    <section className="studio-visual section-pad"><Reveal><div className="studio-art"><div className="studio-circle" /><div className="studio-square" /><span>F / C</span><small>MAKE SPACE FOR NEW IDEAS</small></div></Reveal></section>
    <section className="studio-story section-pad"><SectionLabel number="01 /">Our perspective</SectionLabel><div className="studio-story-grid"><Reveal><h2>Made to move<br />people <em>forward.</em></h2></Reveal><Reveal delay={120}><p>We see design as a way of connecting people to ideas. The strongest work does more than look good: it gives a story shape, a feeling form, and a brand a place in the world.</p><p>Our approach is collaborative, curious, and deliberate. We ask better questions, follow the interesting details, and make every choice count.</p></Reveal></div></section>
    <section className="principles section-pad"><SectionLabel number="02 /">How we work</SectionLabel><div className="principle-grid">{[['Listen closely', 'Every project begins with understanding what matters and what makes it different.'], ['Explore freely', 'We test unexpected directions and find the tension that makes an idea memorable.'], ['Make with intent', 'We refine every element until the whole experience feels unmistakably itself.']].map(([title, body], i) => <Reveal delay={i * 90} key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{body}</p></Reveal>)}</div></section>
    <section className="next-page section-pad"><span>Seen enough?</span><h2>Now let's make<br /><em>something together.</em></h2><ArrowLink href="#/contact">Get in touch</ArrowLink></section>
  </main><Footer /></div>
}

function Contact() {
  const [copied, setCopied] = useState(false)
  const copy = async () => { try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000) } catch { window.location.href = `mailto:${email}` } }
  return <div className="inner-page"><NavBar /><main>
    <PageIntro eyebrow="03 / Reach us" title={<>Great things begin<br />with <em>a conversation.</em></>} description="Have a brand to build, a story to tell, or an idea still taking shape? We'd love to hear it." />
    <section className="contact-main section-pad"><div className="contact-orbit"><div /><span>LET'S MAKE SOMETHING GOOD</span></div><div className="contact-details"><span className="tiny-label">New business & collaborations</span><a className="email-link" href={`mailto:${email}`}>{email}<ArrowUpRight size={31} strokeWidth={1.4} /></a><button className="copy-email" type="button" onClick={copy}>{copied ? <Check size={16} /> : null}{copied ? 'Copied to clipboard' : 'Copy email address'}</button><p>Tell us what you have in mind, where you are in the process, and what you hope to make happen. We'll take it from there.</p></div></section>
    <section className="contact-note section-pad"><span>Small note, big ideas.</span><p>We work across time zones and disciplines. The best place to begin is a simple hello.</p></section>
  </main><Footer /></div>
}

function App() {
  const route = useRoute()
  useEffect(() => { document.title = `${route === '/' ? 'Ideas made tangible' : route === '/projects' ? 'Projects' : route === '/studio' ? 'Studio' : 'Reach Us'} — Foldcraft` }, [route])
  return <div className="font-geist app">{route === '/projects' ? <Projects /> : route === '/studio' ? <Studio /> : route === '/contact' ? <Contact /> : <Home />}</div>
}

createRoot(document.getElementById('root')).render(<App />)
