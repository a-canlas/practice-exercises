function nameCompany(founderNames){
  let firstLetters = founderNames.map(name => name.slice(0, 1));
  return firstLetters.sort().join('').toUpperCase();
}
console.log(nameCompany(['tom', 'dick', 'harry']));
