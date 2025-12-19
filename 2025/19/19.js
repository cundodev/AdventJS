function revealSantaRoute(routes) {
  if (routes.length === 0) return []

  const mapping = new Map(routes)
  let currentCity = routes[0][0]
  const route = [currentCity]

  while (mapping.has(currentCity)) {
    currentCity = mapping.get(currentCity)
    route.push(currentCity)
  }

  return route
}