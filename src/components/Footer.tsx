import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top"><Logo /><span>Ideas take shape here.</span></div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Foldcraft Studio</span>
        <span>Independent by design.</span>
        <a href="#/">Back to top ↑</a>
      </div>
    </footer>
  )
}
