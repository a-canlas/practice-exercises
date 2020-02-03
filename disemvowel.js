function disemvowel(str) {
  let strArr = str.split('');
  let result = strArr.filter(item => {
    if (item !== 'e' &&
      item !== 'E' &&
      item !== 'a' &&
      item !== 'A' &&
      item !== 'i' &&
      item !== 'I' &&
      item !== 'o' &&
      item !== 'O' &&
      item !== 'u' &&
      item !== 'U') {
      return item;
      }
    });
  return result.join('');
  }

  function disemvowelImproved(str){
    let re = /[aeiou]/gi;
    return str.replace(re, '')
  }
