function friend(friends) {
  // Receives list of names
  // Returns only names with a length of 4
  let result = friends.filter(name => name.length === 4);
  return result;
}
