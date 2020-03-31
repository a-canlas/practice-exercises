function joinPath(portion1, portion2) {
  let reg = /\//;
  return portion1.replace(reg, '') + '/' + portion2.replace(reg, '');
}

// Join portion1 and portion2 as portion1/portion2. Do not use if/else for this
