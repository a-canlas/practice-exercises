function removeVowels(str) {
  let vowelLess = str.match(/[^aeiou]/gi);
  return vowelLess.join('');
}

function removeVowelsSS(str){
  return str.replace(/[aeiou]/gi, '');
}

// replace takes a regex as first argument and what to use as replacement as second argument
