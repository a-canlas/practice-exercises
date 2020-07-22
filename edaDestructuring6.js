const str = `
function shirtSize({size = "big"} = {}) {
  return size
}
`

// By adding an assignment operator and an empty object on the right, you can call the function without passing any arguments. By omitting the assignment, it is expected that the function will be called with at least one passed in argument
