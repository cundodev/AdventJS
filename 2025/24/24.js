function isTreesSynchronized(tree1, tree2) {
  if (tree1.value !== tree2.value) return [false, tree1.value]
  function isSync(t1, t2) {
    if (!t1 && !t2) return true
    if (!t1 || !t2 || t1.value !== t2.value) return false
    return isSync(t1.left, t2.right) && isSync(t1.right, t2.left)
  }
  const isSynchronized = isSync(tree1, tree2)
  return [isSynchronized, tree1.value]
}
