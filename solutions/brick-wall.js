/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
  const holePositions = new Map();

  for (let i = 0; i < wall.length; i++) {
    const bricks = wall[i];
    let cummulativePosition = 0;

    for (let j = 0; j < bricks.length - 1; j++) {
      cummulativePosition += bricks[j];

      holePositions.set(
        cummulativePosition,
        1 + (holePositions.get(cummulativePosition) || 0)
      );
    }
  }

  let maxEdges = 0;
  for (let [pos, count] of holePositions) {
    if (count > maxEdges) {
      maxEdges = count;
    }
  }

  return wall.length - maxEdges;
};
