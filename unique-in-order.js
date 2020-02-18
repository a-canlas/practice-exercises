var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let result = [];
  // needs to iterate through string or array
  // check if argument is a string. If so, split it into an array
  if (typeof iterable === 'string') {
    iterable = iterable.split('');
  }
  // needs to check previous character/index to see if it is the same value
  //if same value, do nothing
  // if different value, add to the result array
  for(let i = 0; i < iterable.length; i++){
    if(i === 0 || iterable[i] !== iterable[i - 1]){
      result.push(iterable[i]);
    }
  }
    // after iterating through entire string/array, return the result array
    return result;
  }
