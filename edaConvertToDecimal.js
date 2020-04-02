function convertToDecimal(perc) {
  return perc.map(num => {
    return parseFloat(num.replace('%', '')) * .01
  })
}
