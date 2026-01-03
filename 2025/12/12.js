function elfBattle(elf1, elf2) {
  let lifeElf1 = 3
  let lifeElf2 = 3
  const actions = {
    A: {
      A: 1,
      B: 0,
      F: 1,
    },
    B: {
      A: 0,
      B: 0,
      F: 0,
    },
    F: {
      A: 2,
      B: 2,
      F: 2,
    },
  }
  for (let i = 0; i < elf1.length; i++) {
    let damageElf1 = actions[elf1[i]][elf2[i]]
    let damageElf2 = actions[elf2[i]][elf1[i]]
    lifeElf1 -= damageElf2
    lifeElf2 -= damageElf1
    if (lifeElf1 <= 0 && lifeElf2 <= 0) return 0
    if (lifeElf2 <= 0) return 1
    if (lifeElf1 <= 0) return 2
  }
  if (lifeElf1 < lifeElf2) return 2
  if (lifeElf1 > lifeElf2) return 1
  return 0
}
