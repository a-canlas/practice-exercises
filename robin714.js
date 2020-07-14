// Accepts 3 arguments: int width, int height, str character
// Width and height cannot be 3 or less
// Only start and end brackets have '#' printed
// Middle brackets should have appropriate spaces
/* Example
    Input: 4, 4, #
    Output: [["####"],["  "],["  "],["####"]]
*/

function makeFrame(width, height, character){
  if(width < 4 || height < 4){
    return;
  }
  let result = [];
  let widthArr1 = [];
  let widthArr2 = [];
  let widthStr = "";

  // Make top and bottom frames
  for(let i = 0; i < width; i++){
    widthStr += character;

  }
  widthArr1.push(widthStr);
  widthArr2.push(widthStr);

  console.log(widthArr1);
  console.log(widthArr2);
  // Make inner frames


}
