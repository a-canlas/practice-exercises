function isSymmetrical(num) {
  return parseInt(num.toString().split('').reverse().join('')) === num ? true : false;
}
