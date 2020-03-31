function doubleChar(str) {
  let strArr = str.split('');
  return strArr.map(item => item + item).join('');
}

// Create a function that takes a string and returns a string in which each character is repeated once.
