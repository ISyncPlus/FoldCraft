import type { ReactNode } from 'react'

interface PageIntroProps {
  eyebrow: string
  title: ReactNode
  description: string
}

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <div className="page-intro section-pad">
      <span className="page-eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
