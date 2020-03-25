function maximumScore(tileHand) {
  let reducer = (acc, tile) => acc + tile.score;
  return tileHand.reduce(reducer, 0);
}
