function leftMost(str){
  for(let i = 0; i < str.length; i++){
    let character = str[i];
    character = parseInt(character);
    if(!isNaN(character)){
      return character;
    }
  }
}
