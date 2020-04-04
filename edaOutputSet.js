function set(arr) {
  let result = [];
  arr.forEach(num => {
    if(result.indexOf(num) === -1){
      result.push(num)
    }
  })
  return result;
}
