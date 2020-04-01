function hashPlusCount(str) {
  let result = [0, 0];
  let strArr = str.split('');
  if(strArr.length === 0){
    return result;
  } else {
    strArr.forEach(index => index == '#' ? result[0]++ : result[1]++)
    return result;
  }
}
