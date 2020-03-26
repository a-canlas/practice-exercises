// Remove all fog from the string. If the string did not have fog, return it's a clear day!

function clearFog(str) {
  let reg = /f+o+g+/g;
  return reg.test(str) ? str.replace(/f*o*g*/g, '') : "It's a clear day!";
}
