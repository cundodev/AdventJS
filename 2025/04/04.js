function decodeSantaPin(code) {
  const draft = code.match(/[^\[\]]+/g)
  if (draft.length < 4) return null
  let pin = ''
  for (const operation of draft) {
    if (operation.length === 1) {
      pin += operation !== '<' ? operation : pin.at(-1)
      continue
    }

    const preDigit = operation.split('')
    let digit = +preDigit[0]
    for (let i = 1; i < preDigit.length; i++) {
      if (preDigit[i] === '+') digit++
      if (preDigit[i] === '-') digit--
    }
    pin += ((digit % 10) + 10) % 10
  }
  return pin
}
