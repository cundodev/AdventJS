function clearGifts(warehouse, drops) {
  const width = warehouse[0].length || 0
  for (const col of drops) {
    for (let i = warehouse.length - 1; i >= 0; i--) {
      if (warehouse[i][col] === '.') {
        warehouse[i][col] = '#'
        if (!warehouse[i].includes('.')) {
          warehouse.splice(i, 1)
          warehouse.unshift(Array(width).fill('.'))
        }
        break
      }
    }
  }
  return warehouse
}
