function matchGloves(gloves) {
  const colorsMap = new Map()
  const colors = []
  for (const { color, hand } of gloves) {
    if (!colorsMap.has(color)) colorsMap.set(color, { R: 0, L: 0 })
    colorsMap.get(color)[hand]++
  }
  for (const [color, hand] of colorsMap) {
    const quantity = Math.min(hand.L, hand.R)
    colors.push(...Array(quantity).fill(color))
  }
  return colors
}
