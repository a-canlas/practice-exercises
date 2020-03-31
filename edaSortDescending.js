function sortDescending(num) {
  num = num.toString();
  let numArr = num.split('');
  numArr.sort((a, b) => b - a);
  let result = numArr.join('');
  return parseInt(result);
}

// Receive a number and return each numeral in number sorted in descending order
