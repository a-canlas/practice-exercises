function joinPath(portion1, portion2) {
  let reg = /\//;
  return portion1.replace(reg, '') + '/' + portion2.replace(reg, '');
}
