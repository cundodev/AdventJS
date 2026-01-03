function findGiftPath(workshop, gift) {
  if (workshop === gift) return []
  if (typeof workshop !== 'object') return []
  const depth = Object.entries(workshop)
  for (const [key, value] of depth) {
    if (value === gift) {
      return [key]
    }
    const path = findGiftPath(value, gift)
    if (path.length > 0) {
      return [key, ...path]
    }
  }
  return []
}
