// Amplify the multiples of 4 by 10

function amplify(num) {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i);
  }
  return numArr.map(x => {
    return x % 4 === 0 ? x * 10 : x;
  })
}
