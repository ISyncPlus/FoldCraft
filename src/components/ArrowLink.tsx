import type { ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'

interface ArrowLinkProps {
  href: string
  children: ReactNode
  light?: boolean
}

export function ArrowLink({ href, children, light = false }: ArrowLinkProps) {
  return (
    <a href={href} className={`arrow-link ${light ? 'arrow-link-light' : ''}`}>
      {children}<span><ArrowUpRight size={21} strokeWidth={1.6} /></span>
    </a>
  )
}
