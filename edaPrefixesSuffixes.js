function isPrefix(word, prefix) {
  return word.startsWith(prefix.slice(0, prefix.length - 1)) ? prefix.endsWith('-') : false;
}

function isSuffix(word, suffix) {
  return word.endsWith(suffix.slice(1)) ? suffix.startsWith('-') : false;

}

function isPrefixSS(word, prefix) {
  return word.startsWith(prefix.slice(0, prefix.length - 1));
}

function isSuffixSS(word, suffix) {
  return word.endsWith(suffix.slice(1));

}
