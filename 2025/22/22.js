//Busqueda en profundidad ( Depth-First Search - DFS )
function canEscapeDFS(maze) {
  const stack = []
  const visited = new Set()
  const rows = maze.length
  const cols = maze[0].length
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === 'S') {
        stack.push([i, j])
        visited.add(`${i},${j}`)
        break
      }
    }
  }

  while (stack.length > 0) {
    const [row, col] = stack.pop() //<== Quitar el ultimo elemento que se agrego
    for (const [x, y] of directions) {
      if (
        row + x >= 0 &&
        row + x < rows &&
        col + y >= 0 &&
        col + y < cols &&
        !visited.has(`${row + x},${col + y}`)
      ) {
        const cell = maze[row + x][col + y]
        if (cell === 'E') {
          return true
        } else {
          if (cell === '.') {
            stack.push([row + x, col + y])
            visited.add(`${row + x},${col + y}`)
          }
        }
      }
    }
  }
  return false
}

//Busqueda en anchura ( Breadth-First Search - BFS )
function canEscapeBFS(maze) {
  const stack = []
  const visited = new Set()
  const rows = maze.length
  const cols = maze[0].length
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ]

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (maze[i][j] === 'S') {
        stack.push([i, j])
        visited.add(`${i},${j}`)
        break
      }
    }
    if (stack.length > 0) break
  }

  while (stack.length > 0) {
    const [row, col] = stack.shift() //<== Quitar el primero elemento que se agrego
    for (const [x, y] of directions) {
      if (
        row + x >= 0 &&
        row + x < rows &&
        col + y >= 0 &&
        col + y < cols &&
        !visited.has(`${row + x},${col + y}`)
      ) {
        const cell = maze[row + x][col + y]
        if (cell === 'E') {
          return true
        } else {
          if (cell === '.') {
            stack.push([row + x, col + y])
            visited.add(`${row + x},${col + y}`)
          }
        }
      }
    }
  }
  return false
}
