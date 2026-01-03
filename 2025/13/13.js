function runFactory(factory) {
  const rows = factory.length
  const cols = factory[0] ? factory[0].length : 0
  let x = 0
  let y = 0
  const route = new Set()
  const moves = {
    '>': [0, 1],
    '<': [0, -1],
    '^': [-1, 0],
    'v': [1, 0],
  }
  while (x >= 0 && x < rows && y >= 0 && y < cols) {
    const move = factory[x][y]
    if (move === '.') return 'completed'
    const position = `${x},${y}`
    if (route.has(position)) return 'loop'
    route.add(position)
    const [dx, dy] = moves[move]
    x += dx
    y += dy
  }

  return 'broken'
}
