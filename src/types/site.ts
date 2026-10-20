export type Route = '/' | '/projects' | '/studio' | '/contact'

export type ProjectArtKey = 'aether' | 'monogram' | 'forma'

export interface NavItem {
  label: string
  href: Route
}

export interface Project {
  number: string
  name: string
  category: string
  year: string
  type: string
  art: ProjectArtKey
  description: string
  scope: readonly string[]
}

export interface Service {
  number: string
  title: string
  description: string
}

export interface Principle {
  title: string
  description: string
}
