import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { navItems } from '../data/site'
import type { Route } from '../types/site'
import { Logo } from './Logo'

interface NavBarProps {
  route: Route
  light?: boolean
}

export function NavBar({ route, light = false }: NavBarProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [route])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header className={`site-nav ${light || open ? 'nav-light' : 'nav-dark'}`}>
        <div className="nav-left">
          <Logo light={light || open} />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(({ label, href }) => (
              <a key={href} href={href} className={route === href ? 'active' : ''}>{label}</a>
            ))}
          </nav>
        </div>
        <a href="/contact" className={`nav-talk ${light ? 'nav-talk-light' : 'nav-talk-dark'}`}>
          Let's Talk <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Menu className={`menu-icon ${open ? 'icon-out' : 'icon-in'}`} size={23} />
          <X className={`menu-icon ${open ? 'icon-in' : 'icon-out'}`} size={23} />
        </button>
      </header>
      <div className={`mobile-menu ${open ? 'mobile-menu-open' : ''}`} aria-hidden={!open} inert={!open}>
        <nav aria-label="Mobile navigation">
          <span className="menu-eyebrow">Explore Foldcraft</span>
          {navItems.map(({ label, href }, index) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${110 + index * 65}ms` : '0ms' }}
            >
              {label}<ArrowUpRight size={22} />
            </a>
          ))}
          <a className="mobile-contact" href="/contact" onClick={() => setOpen(false)}>
            Start a project <ArrowRight size={18} />
          </a>
        </nav>
        <p>Independent creative studio<br />Brand, digital, and motion.</p>
      </div>
    </>
  )
}
