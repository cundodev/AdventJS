function maxDepth(s) {
  let currentDepth = 0
  let maxDepth = 0
  for (let bracket of s) {
    if (bracket === '[') {
      currentDepth++
      maxDepth = Math.max(maxDepth, currentDepth)
    } else if (bracket === ']') {
      if (currentDepth === 0) return -1
      currentDepth--
    }
  }
  if (currentDepth > 0) return -1
  return maxDepth
}
