function findLargestNums(arr) {
  let result = arr.map(index => {
    return index.reduce((a, b) => Math.max(a, b))
  })
  return result;
}

function findLargestNumsSS(arr){
  return arr.map( index => Math.max(...index));
}
