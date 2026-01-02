function manufactureGifts(giftsToProduce) {
  return giftsToProduce.flatMap(({ toy, quantity }) => {
    return Array(Math.max(0, quantity)).fill(toy)
  })
}
