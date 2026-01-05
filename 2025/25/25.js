function execute(code) {
  let count = 0
  const jumps = {}
  const stack = []

  for (let j = 0; j < code.length; j++) {
    const char = code[j]
    if (char === '[' || char === '{') {
      stack.push(j)
    }
    if (char === ']' || char === '}') {
      const end = stack.pop()
      jumps[end] = j
      jumps[j] = end
    }
  }

  for (let i = 0; i < code.length; i++) {
    const char = code[i]

    if (char === '+') {
      count++
      continue
    }
    if (char === '-') {
      count--
      continue
    }
    if ((char === '[' || char === '{') && count === 0) {
      i = jumps[i]
    } else if (char === ']' && count !== 0) {
      i = jumps[i]
    }
  }
  return count
}

function execute(code) {
  let count = 0
  function getJumps() {
    const jumps = {}
    const stack = []

    for (let j = 0; j < code.length; j++) {
      switch (code[j]) {
        case '[':
        case '{':
          stack.push(j)
          break

        case ']':
        case '}':
          const start = stack.pop()
          jumps[start] = j
          jumps[j] = start
          break
      }
    }
    return jumps
  }
  const jumps = getJumps()

  for (let i = 0; i < code.length; i++) {
    const char = code[i]

    switch (char) {
      case '+':
        count++
        break
      case '-':
        count--
        break
      case '[':
      case '{':
        if (count === 0) i = jumps[i]
        break
      case ']':
        if (count !== 0) i = jumps[i]
        break
    }
  }

  return count
}
