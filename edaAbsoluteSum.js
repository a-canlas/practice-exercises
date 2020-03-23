function getAbsSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] < 0 ? arr[i] = arr[i] * -1 : arr[i] = arr[i];
  }
  let reducer = (acc, item) => acc + item;
  return arr.reduce(reducer, 0);
}
