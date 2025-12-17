function packGifts(gifts, maxWeight) {
  if (gifts.length === 0) return 0
  const validWeight = gifts.every((gift) => gift.length <= maxWeight)
  if (!validWeight) return null
  let sleighs = 1
  let pack = 0
  for (const gift of gifts) {
    if (pack + gift.length > maxWeight) {
      pack = gift
      sleighs
    } else {
      pack += gift
    }
  }
  return sleighs
}
