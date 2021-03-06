function sortNumsAscending(arr) {
  return !arr || arr.length === 0 ? [] : arr.sort((a, b) => a - b);
}

// If arr is null, undefined or empty array, return []. Otherwise, return arr sorted ascending

// a - b ensures it is ascending order sort. b - a is descending sort
