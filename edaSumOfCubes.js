// function sumOfCubes(nums) {
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let cube = Math.pow(nums[i], 3);
//     total += cube;
//   }
//   return total;
// }

function sumOfCubes(nums) {
  let reducer = (acc, num) => acc + Math.pow(num, 3);
  return nums.reduce(reducer, 0);
}
