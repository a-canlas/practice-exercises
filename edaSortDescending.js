function sortDescending(num) {
  num = num.toString();
  let numArr = num.split('');
  numArr.sort((a, b) => b - a);
  let result = numArr.join('');
  return parseInt(result);
}

// Receive a number and return each numeral in number sorted in descending order

function sortDescendingSS(num){
  return parseInt(num.toString().split('').sort().reverse().join(''));
}

// The above function returns the return value from the parseInt function call. Inside the argument of the function call is the return value of the num parameter when the toString method is called. That return value then calls the method split, passing in ''. The value that is returned from that method call then calls the sort method passing in no arguments. The returned value from the sort method call then calls the reverse method, passing in no arguments. The return value from the reverse call then calls the join method, passing in ''. That return value is then used as the argument for the parseInt function call
