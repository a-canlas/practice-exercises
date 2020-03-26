function societyName(friends) {
  let firstLetters = friends.map(index => index[0]);
  firstLetters = firstLetters.sort();
  return firstLetters.join('');
}

// Takes the first letter of each name, sorts it and returns as a string
