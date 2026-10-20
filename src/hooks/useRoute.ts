import { useEffect, useState } from 'react'
import type { Route } from '../types/site'

const routes: readonly Route[] = ['/', '/projects', '/studio', '/contact']

function readRoute(): Route {
  const route = window.location.pathname || '/'
  return routes.includes(route as Route) ? route as Route : '/'
}

export function useRoute() {
  const [route, setRoute] = useState<Route>(readRoute)

  useEffect(() => {
    const onPopState = () => {
      setRoute(readRoute())
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  return route
}
