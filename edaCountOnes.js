// Count Ones in a Two Dimensional Array

function countOnes(matrix) {
  return matrix.flat().filter(index => index === 1).length;
}

function countOnesAlt(matrix){
  return matrix.join('').split('').filter(index => index == '1').length;
}
