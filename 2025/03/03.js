function drawGift(size, symbol) {
  if (size < 2) return ''
  const mid = symbol + ' '.repeat(size - 2) + symbol + '\n'
  return symbol.repeat(size) + '\n' + mid.repeat(size - 2) + symbol.repeat(size)
}
