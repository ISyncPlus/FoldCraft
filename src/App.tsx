import { useEffect } from 'react'
import { useRoute } from './hooks/useRoute'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Studio } from './pages/Studio'
import type { Route } from './types/site'

const pageTitles: Record<Route, string> = {
  '/': 'Ideas made tangible',
  '/projects': 'Projects',
  '/studio': 'Studio',
  '/contact': 'Reach Us',
}

export default function App() {
  const route = useRoute()

  useEffect(() => {
    document.title = `${pageTitles[route]} — Foldcraft`
  }, [route])

  return (
    <div className="font-geist app">
      {route === '/projects' ? <Projects /> : route === '/studio' ? <Studio /> : route === '/contact' ? <Contact /> : <Home />}
    </div>
  )
}
