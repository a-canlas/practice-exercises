function checkEnding(str1, str2) {
  let str2Len = str2.length;
  let startingIndex = str1.length - str2Len;
  let lastChars = str1.slice(startingIndex);
  return lastChars == str2 ? true : false;
}
