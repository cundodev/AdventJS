function hasFourLights(board) {
  function findFourInRow(row) {
    const stringRow = row.join('')
    return stringRow.includes('GGGG') || stringRow.includes('RRRR')
  }
  for (const row of board) {
    if (findFourInRow(row)) return true
  }
  const invertedBoard = board[0].map((_, indexCol) => {
    return board.map((row) => row[indexCol])
  })
  for (const row of invertedBoard) {
    if (findFourInRow(row)) return true
  }
  return false
}
