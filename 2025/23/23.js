function minStepsToDeliver(map) {
  const rows = map.length
  const cols = map[0].length
  const start = []
  const houses = []
  let steps = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === 'S') start.push(i, j)
      if (map[i][j] === 'G') houses.push([i, j])
    }
  }

  function getDistance(house) {
    const [x, y] = start
    const stack = [[x, y, 0]]
    const visited = new Set(`${x},${y}`)
    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ]
    while (stack.length > 0) {
      const [row, col, step] = stack.shift()
      if (row === house[0] && col === house[1]) return step

      for (const [x, y] of directions) {
        if (
          row + x >= 0 &&
          row + x < rows &&
          col + y >= 0 &&
          col + y < cols &&
          !visited.has(`${row + x},${col + y}`)
        ) {
          const cell = map[row + x][col + y]
          if (cell !== '#') {
            stack.push([row + x, col + y, step + 1])
            visited.add(`${row + x},${col + y}`)
          }
        }
      }
    }
    return -1
  }
  for (const house of houses) {
    const distance = getDistance(house)
    if (distance === -1) return -1
    steps += distance
  }
  return steps
}
