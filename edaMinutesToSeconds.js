function minutesToSeconds(time) {
  let timeArr = time.split(':');
  let minutes = parseInt(timeArr[0]);
  let seconds = parseInt(timeArr[1]);
  minutes *= 60;
  return seconds >= 60 ? false : minutes + seconds;

}

// Convert MM:SS into seconds. If SS is 60 or greater, return false. Otherwise, return the total seconds

function minutesToSecondsSS(time){
  let [m, s] = time.split(':').map(Number);
  return s >= 60 ? false : m * 60 + s;
}
