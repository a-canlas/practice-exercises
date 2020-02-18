function sumTwoSmallestNumbers(numbers) {
  //Find smallest
  let smallest = Math.max.apply(null, numbers);
  let smallestIndex = null;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
      smallestIndex = i;
    }
  }
  //Find second smallest
  let secondSmallest = Math.max.apply(null, numbers);
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < secondSmallest && i !== smallestIndex) {
      secondSmallest = numbers[i];
    }
  }
  //Add smallest and second smallest together
  let result = smallest + secondSmallest;
  return result;
}
