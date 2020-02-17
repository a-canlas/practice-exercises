function sumTwoSmallestNumbers(numbers) {
  //Code here
  //Find smallest
  let smallest = 100000000;
  let smallestIndex = null;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
      smallestIndex = i;
    }
  }
  //Find second smallest
  let secondSmallest = 100000000;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < secondSmallest && i !== smallestIndex) {
      secondSmallest = numbers[i];
    }
  }
  //Add smallest and second smallest together
  let result = smallest + secondSmallest;
  return result;
}
