function drawTree(height, ornament, frequency) {
  const tree = []
  const defaultOrnament = '*'
  for (let i = 0; i < height; i++) {
    tree[i] = ' '.repeat(height - 1 - i)
    const lineLength = 2 * i + 1
    for (let j = 0; j < lineLength; j++) {
      if ((i ** 2 + j + 1) % frequency === 0) {
        tree[i] += ornament
      } else {
        tree[i] += defaultOrnament
      }
    }
  }
  tree[height] = ' '.repeat(height - 1) + '#'
  return tree.join('\n')
}
