function sumOfCubes(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let cube = nums[i] * nums[i] * nums[i];
    total += cube;
  }
  return total;
}
