function findUniqueToy(toy) {
  const mapToy = new Map()
  for (const char of toy) {
    const lowerCaseChar = char.toLowerCase()
    const frequencyToy = mapToy.get(lowerCaseChar) || 0
    mapToy.set(lowerCaseChar, frequencyToy + 1)
  }
  for (const char of toy) {
    const lowerCaseChar = char.toLowerCase()
    if (mapToy.get(lowerCaseChar) === 1) {
      return char
    }
  }
  return ''
}
