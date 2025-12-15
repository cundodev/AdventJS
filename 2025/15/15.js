function drawTable(data, sortBy) {
  let table = ''
  let header = 65
  const lengthColum = {}

  data.forEach((row) => {
    for (const key in row) {
      const currentLength = String(row[key]).length
      if (!lengthColum[key] || currentLength > lengthColum[key]) {
        lengthColum[key] = currentLength
      }
    }
  })

  data.sort((a, b) => {
    if (typeof a[sortBy] === 'string') {
      return a[sortBy].localeCompare(b[sortBy])
    } else {
      return a[sortBy] - b[sortBy]
    }
  })

  table += '+'
  for (const key in lengthColum) {
    table += `${'-'.repeat(lengthColum[key] + 2)}+`
  }
  table += '\n'

  table += '|'
  for (const key in lengthColum) {
    let currentHeader = String.fromCharCode(header)
    table += ` ${currentHeader.padEnd(lengthColum[key], ' ')} |`
    header++
  }
  table += '\n'

  table += '+'
  for (const key in lengthColum) {
    table += `${'-'.repeat(lengthColum[key] + 2)}+`
  }
  table += '\n'

  data.forEach((row) => {
    const items = Object.entries(row)
    let currentRow = '|'
    items.forEach(([key, value]) => {
      currentRow += ` ${String(value).padEnd(lengthColum[key], ' ')} |`
    })
    table += `${currentRow}\n`
  })

  table += '+'
  for (const key in lengthColum) {
    table += `${'-'.repeat(lengthColum[key] + 2)}+`
  }
  return table
}

//SIMPLIFY

function drawTable2(data, sortBy) {
  let table = ''
  const lengthColum = {}
  const headers = Object.keys(data[0])

  data.forEach((row) => {
    for (const key in row) {
      const currentLength = String(row[key]).length
      if (!lengthColum[key] || currentLength > lengthColum[key]) {
        lengthColum[key] = currentLength
      }
    }
  })

  data.sort((a, b) => {
    if (typeof a[sortBy] === 'string') {
      return a[sortBy].localeCompare(b[sortBy])
    } else {
      return a[sortBy] - b[sortBy]
    }
  })

  const drawLine = () => {
    return '+' + headers.map((key) => '-'.repeat(lengthColum[key] + 2)).join('+') + '+'
  }
  const drawHeader = () => {
    return (
      '|' +
      headers
        .map((key, index) => {
          const currentHeader = String.fromCharCode('A'.charCodeAt(0) + index)
          return ` ${currentHeader.padEnd(lengthColum[key], ' ')} `
        })
        .join('|') +
      '|\n'
    )
  }
  const drawRow = (row) => {
    return (
      '|' +
      headers
        .map((key) => {
          const value = String(row[key])
          return ` ${value.padEnd(lengthColum[key], ' ')} `
        })
        .join('|') +
      '|\n'
    )
  }
  table += drawLine() + '\n'
  table += drawHeader()
  table += drawLine() + '\n'
  data.forEach((row) => {
    table += drawRow(row)
  })
  table += drawLine()

  return table
}
