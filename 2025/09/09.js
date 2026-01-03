function moveReno(board, moves) {
  const matrix = board.trim().split('\n')

  const rowLength = matrix.length
  const colLength = matrix[0].length

  let xRobot = 0
  let yRobot = 0

  const dx = { U: -1, D: 1, L: 0, R: 0 }
  const dy = { U: 0, D: 0, L: -1, R: 1 }

  for (let i = 0; i < rowLength; i++) {
    const y = matrix[i].indexOf('@')
    if (y !== -1) {
      xRobot = i
      yRobot = y
      break
    }
  }

  for (const move of moves) {
    yRobot += dy[move]
    xRobot += dx[move]

    if (xRobot < 0 || yRobot < 0 || yRobot >= colLength || xRobot >= rowLength) return 'crash'

    const cell = matrix[xRobot][yRobot]
    if (cell === '*') return 'success'
    if (cell === '#') return 'crash'
  }

  return 'fail'
}
