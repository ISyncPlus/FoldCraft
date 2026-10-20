import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { PageIntro } from '../components/PageIntro'
import { email } from '../data/site'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="inner-page">
      <NavBar route="/contact" />
      <main>
        <PageIntro
          eyebrow="03 / Reach us"
          title={<>Great things begin<br />with <em>a conversation.</em></>}
          description="Have a brand to build, a story to tell, or an idea still taking shape? We'd love to hear it."
        />
        <section className="contact-main section-pad">
          <div className="contact-orbit"><div /><span>LET'S MAKE SOMETHING GOOD</span></div>
          <div className="contact-details">
            <span className="tiny-label">New business & collaborations</span>
            <a className="email-link" href={`mailto:${email}`}>{email}<ArrowUpRight size={31} strokeWidth={1.4} /></a>
            <button className="copy-email" type="button" onClick={copyEmail}>
              {copied && <Check size={16} />}{copied ? 'Copied to clipboard' : 'Copy email address'}
            </button>
            <p>Tell us what you have in mind, where you are in the process, and what you hope to make happen. We'll take it from there.</p>
          </div>
        </section>
        <section className="contact-note section-pad">
          <span>Small note, big ideas.</span>
          <p>We work across time zones and disciplines. The best place to begin is a simple hello.</p>
        </section>
      </main>
      <Footer />
    </div>
  )
}
