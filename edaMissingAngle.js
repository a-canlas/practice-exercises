// Acute angle less than 90 degrees
// Obtuse angle greater than 90 degrees but less than 180 degrees
// Right angle is equal to 90 degrees
// All triangles are a total of 180 degrees

function missingAngle(angle1, angle2) {
  let sumOf2Angles = angle1 + angle2;
  let missing = 180 - sumOf2Angles;
  let result = "";
  if(missing === 90){
    result = "right";
  } else if(missing < 90){
    result = "acute";
  } else if(missing > 90 && missing < 180){
    result = "obtuse";
  } else {
    result = "Not a triangle";
  }
  return result;
}
