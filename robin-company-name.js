function nameCompany(founderNames){
  let firstLetters = founderNames.map(name => name.slice(0, 1));
  return firstLetters.sort().join('');
}
console.log(nameCompany(['Tom', 'Dick', 'Harry']));
