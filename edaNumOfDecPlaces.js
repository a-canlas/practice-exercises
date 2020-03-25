function getDecimalPlaces(num) {
  let decimalIndex = num.indexOf('.');
  if (decimalIndex !== -1) {
    let sliced = num.slice(decimalIndex + 1);
    return sliced.length;
  }
  return 0;
}
