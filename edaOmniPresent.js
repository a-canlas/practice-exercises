function isOmnipresent(arr, val) {
  for(let outer = 0; outer < arr.length; outer++){
    for(let inner = 0; inner < arr[outer].length; inner++){
      let subArr = arr[outer];
      if(!subArr.includes(val)){
        return false;
      }
    }
  }
  return true;
}
