interface LogoProps {
  light?: boolean
}

export function Logo({ light = false }: LogoProps) {
  return (
    <a href="#/" className={`brand-mark ${light ? 'text-white' : 'text-ink'}`} aria-label="Foldcraft home">
      Foldcraft<span className="brand-dot">.</span>
    </a>
  )
}
