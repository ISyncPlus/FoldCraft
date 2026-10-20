import type { NavItem, Principle, Project, Service } from '../types/site'

export const videoUrl = '/hero.mp4'
export const email = 'hello@foldcraft.studio'

export const navItems: readonly NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'Studio', href: '/studio' },
  { label: 'Reach Us', href: '/contact' },
]

export const projects: readonly Project[] = [
  {
    number: '01',
    name: 'Aether',
    category: 'Identity / Packaging',
    year: '2026',
    type: 'Independent concept',
    art: 'aether',
    description: 'A quiet identity for a considered fragrance house. Earthy restraint meets a sense of the unexpected.',
    scope: ['Strategy', 'Visual identity', 'Packaging'],
  },
  {
    number: '02',
    name: 'Monogram',
    category: 'Editorial / Digital',
    year: '2026',
    type: 'Independent concept',
    art: 'monogram',
    description: 'An editorial platform built around the pleasure of looking closer, with a flexible visual language for stories in motion.',
    scope: ['Art direction', 'Digital', 'Motion'],
  },
  {
    number: '03',
    name: 'Forma',
    category: 'Campaign / Motion',
    year: '2026',
    type: 'Independent concept',
    art: 'forma',
    description: 'A sculptural campaign that gives everyday objects a new point of view through form, rhythm, and color.',
    scope: ['Concept', 'Campaign', 'Motion'],
  },
]

export const services: readonly Service[] = [
  { number: '01', title: 'Brand identity', description: 'Distinctive systems built to be seen, felt, and remembered.' },
  { number: '02', title: 'Digital experiences', description: 'Thoughtful websites and digital spaces with character.' },
  { number: '03', title: 'Art direction', description: 'A clear visual point of view across every touchpoint.' },
  { number: '04', title: 'Motion & content', description: 'Movement that gives the story another dimension.' },
]

export const principles: readonly Principle[] = [
  { title: 'Listen closely', description: 'Every project begins with understanding what matters and what makes it different.' },
  { title: 'Explore freely', description: 'We test unexpected directions and find the tension that makes an idea memorable.' },
  { title: 'Make with intent', description: 'We refine every element until the whole experience feels unmistakably itself.' },
]
