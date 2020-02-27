function difference(nums) {
  let max = Math.max.apply(null, nums);
  let min = Math.min.apply(null, nums);
  return max - min;
}
