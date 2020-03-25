function countVowels(str) {
  str = str.toLowerCase();
  let count = 0;
  let strArr = str.split('');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] === 'a' ||
      strArr[i] === 'e' ||
      strArr[i] === 'i' ||
      strArr[i] === 'o' ||
      strArr[i] === 'u' ?
      count++ : count = count;
  }
  return count;
}

function countVowelsSS(str){
  return str.match(/[aeiou]/gi).length;
}
// .match takes a regex and returns the results that match in an array
