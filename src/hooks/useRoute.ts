import { useEffect, useState } from 'react'
import type { Route } from '../types/site'

const routes: readonly Route[] = ['/', '/projects', '/studio', '/contact']

function readRoute(): Route {
  const route = window.location.hash.replace(/^#/, '') || '/'
  return routes.includes(route as Route) ? route as Route : '/'
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(readRoute)

  useEffect(() => {
    const onHashChange = () => {
      setRoute(readRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}
