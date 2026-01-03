function findUnsafeGifts(warehouse) {
  let unsafe = 0
  const row = warehouse.length
  const col = warehouse[0].length
  const directions = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ]
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (warehouse[i][j] === '*') {
        const safe = directions.some(([dx, dy]) => {
          const x = i + dx
          const y = j + dy
          if (x >= 0 && y >= 0 && x < row && y < col) {
            return warehouse[x][y] === '#'
          }
        })
        if (!safe) unsafe++
      }
    }
  }
  return unsafe
}
