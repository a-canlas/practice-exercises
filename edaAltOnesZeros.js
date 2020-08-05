function canAlternate(s) {
  let ones = s.split('').filter(i => i == 1).length;
  let zeros = s.split('').filter(i => i == 0).length;
  return ones - zeros === 1 || zeros - ones === 1 || zeros - ones === 0 ? true : false;
}
