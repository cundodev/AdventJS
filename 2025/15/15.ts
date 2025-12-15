type Data = Array<Record<string, string | number>>
type SortBy = string

function drawTable3(data: Data, sortBy: SortBy): string {
  if (!data || data.length === 0) return ''
  let table = ''

  const headers = Object.keys(data[0])
  data.sort((a, b) => {
    //if (typeof a[sortBy] === 'string' && typeof b[sortBy] === 'string') {
    if (typeof a[sortBy] === 'string') {
      return String(a[sortBy]).localeCompare(String(b[sortBy]))
    } else {
      return Number(a[sortBy]) - Number(b[sortBy])
    }
  })
  const lengthColum: Record<string, number> = {}
  data.forEach((row) => {
    for (const key in row) {
      const currentLength = String(row[key]).length
      if (!lengthColum[key] || currentLength > lengthColum[key]) {
        lengthColum[key] = currentLength
      }
    }
  })

  const drawLine = () => {
    return '+' + headers.map((key) => '-'.repeat(lengthColum[key] + 2)).join('+') + '+'
  }

  const cell = (content: string, key: string): string => {
    return ` ${content.padEnd(lengthColum[key], ' ')} `
  }
  const drawGenericRow = (fn: (key: string, index: number) => string): string => {
    return (
      '|' +
      headers
        .map((key, index) => {
          const content = fn(key, index)
          return cell(content, key)
        })
        .join('|') +
      '|\n'
    )
  }
  const drawHeader = (): string => {
    return drawGenericRow((_, index) => {
      return String.fromCharCode('A'.charCodeAt(0) + index)
    })
  }
  const drawRow = (row: Record<string, any>): string => {
    return drawGenericRow((key) => {
      return String(row[key])
    })
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
function drawTable4(data: Data, sortBy: SortBy): string {
  if (!data || data.length === 0) return ''
  let table = ''
  const headers = Object.keys(data[0])
  const lengthColum: Record<string, number> = {}

  headers.map((key) => {
    const maxLength = Math.max(
      1,
      ...data.map((row) => {
        return String(row[key]).length
      })
    )
    lengthColum[key] = maxLength
  })

  data.sort((a, b) => {
    if (typeof a[sortBy] === 'string') {
      return String(a[sortBy]).localeCompare(String(b[sortBy]))
    } else {
      return Number(a[sortBy]) - Number(b[sortBy])
    }
  })

  const drawLine = () => {
    return '+' + headers.map((key) => '-'.repeat(lengthColum[key] + 2)).join('+') + '+'
  }

  const cell = (content: string, key: string): string => ` ${content.padEnd(lengthColum[key], ' ')} `

  const drawGenericRow = (contents: string[]): string => {
    return '|' + contents.map((content, i) => cell(content, headers[i])).join('|') + '|\n'
  }
  const drawHeader = (): string => {
    return drawGenericRow(headers.map((_, i) => String.fromCharCode('A'.charCodeAt(0) + i)))
  }
  const drawRow = (row: Record<string, any>): string => {
    return drawGenericRow(headers.map((key) => String(row[key])))
  }
  table += drawLine() + '\n' + drawHeader() + drawLine() + '\n'
  data.forEach((row) => {
    table += drawRow(row)
  })
  table += drawLine()

  return table
}
