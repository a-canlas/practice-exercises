function isAnagram(word1, word2) {
  if (word1.length !== word2.length) return false;
  let word2Arr = word2.split('');
  let i = 0;
  while (word2Arr.length !== 0) {
    i = i > word2Arr.length ? 0 : i;
    if (word1.includes(word2Arr[i])) {
      word2Arr.splice(i, 1);
      i++;
    } else {
      return false;
    }
  }
  return true;
}
