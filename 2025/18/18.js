function hasFourInARow(board) {
  const row = board.length
  const col = board[0].length

  function findFourInRow(row) {
    const stringRow = row.join('')
    return stringRow.includes('GGGG') || stringRow.includes('RRRR')
  }
  // Check rows
  for (const row of board) {
    if (findFourInRow(row)) return true
  }
  // Check columns
  for (let i = 0; i < col; i++) {
    const column = board.map((row) => row[i])
    if (findFourInRow(column)) return true
  }
  // Check diagonals
  // Descending diagonal \
  for (let r = 0; r <= row - 4; r++) {
    for (let c = 0; c <= col - 4; c++) {
      const diagonalDSC = [board[r][c], board[r + 1][c + 1], board[r + 2][c + 2], board[r + 3][c + 3]]
      if (findFourInRow(diagonalDSC)) {
        return true
      }
    }
  }
  // Ascending diagonal /
  for (let r = 0; r <= row - 4; r++) {
    for (let c = 3; c <= col; c++) {
      const diagonalASC = [board[r][c], board[r + 1][c - 1], board[r + 2][c - 2], board[r + 3][c - 3]]
      if (findFourInRow(diagonalASC)) {
        return true
      }
    }
  }
  return false
}
