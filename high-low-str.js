function highAndLow(numbers) {
  // split string into array
  numbers = numbers.split(' ');
  // create a variable for highest and lowest values
  // assign the value of the first index to highest and lowest
  var highest = numbers[0];
  var lowest = numbers[0];
  // iterate through array and check if value of current index is greater than highest and less than lowest
  for(let i = 1; i < numbers.length; i++){
    highest = parseInt(numbers[i]) > parseInt(highest) ? numbers[i] : highest;
    lowest = parseInt(numbers[i]) < parseInt(lowest) ? numbers[i] : lowest;
  }
    //if so, assign the value of the current index to applicable variable
  // once done iterating, return string containing highest and lowest values

  return `${highest} ${lowest}`;
}
