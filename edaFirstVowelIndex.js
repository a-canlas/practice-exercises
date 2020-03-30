function firstVowel(str) {
  return str.search(/[aeiou]/i);
}

// Return the first index of a vowel. indexOf does not work with regex because it expects a string value as the argument
