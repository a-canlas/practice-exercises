function sayHelloBye(name, num) {
  let person = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
  return num === 1 ? `Hello ${person}` : `Bye ${person}`;
}
