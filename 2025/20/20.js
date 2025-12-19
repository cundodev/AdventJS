function dropGifts(warehouse, drops) {
  for (const col of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][col] === '.') {
        warehouse[i][col] = '#'
        break
      }
    }
  }
  return warehouse
}
