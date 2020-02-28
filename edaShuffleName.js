function nameShuffle(str) {
  let strArr = str.split(" ");
  let firstName = strArr[0];
  let lastName = strArr[1];
  return `${lastName} ${firstName}`;
}
