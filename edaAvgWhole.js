function isAvgWhole(arr) {
  let arrSum = arr.reduce((acc, num) => acc + num);
  let avg = arrSum / arr.length;
  return Number.isInteger(avg);
}

// Determine if the average of the numbers in an array are a whole number. Return true or false
