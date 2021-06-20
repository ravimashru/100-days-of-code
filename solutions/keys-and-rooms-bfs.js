/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  const queue = rooms[0];
  visited.add(0);

  while (queue.length > 0) {
    const temp = queue.shift();
    visited.add(temp);
    queue.push(...rooms[temp].filter((e) => !visited.has(e)));
  }

  if (visited.size === rooms.length) {
    return true;
  }
  return false;
};
