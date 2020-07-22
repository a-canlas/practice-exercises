function objectToArray(obj) {
  let result = [];
  for(let key in obj){
    let subArr = [];
    subArr.push(key);
    subArr.push(obj[key]);
    result.push(subArr);
  }
  return result;
}

function objectToArrayBetter(obj){
  return Object.entries(obj);
}
// Object.entries returns an array whose entries are arrays containing the objects enumeral keys and their values

/* EXAMPLES

objectToArray({
  D: 1,
  B: 2,
  C: 3
}) ➞ [["D", 1], ["B", 2], ["C", 3]]

objectToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]
*/
