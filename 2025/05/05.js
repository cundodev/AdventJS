function timeUntilTakeOff(fromTime, takeOffTime) {
  const from = fromTime.split(' ')[0].match(/\d+/g).map(Number)
  from[1] = from[1] - 1
  const takeOff = takeOffTime.split(' ')[0].match(/\d+/g).map(Number)
  takeOff[1] = takeOff[1] - 1
  const fromUTC = Date.UTC(...from)
  const takeOffUTC = Date.UTC(...takeOff)
  const fromTimeInSeconds = Math.floor(fromUTC / 1000)
  const takeOffInSeconds = Math.floor(takeOffUTC / 1000)
  return takeOffInSeconds - fromTimeInSeconds
}
