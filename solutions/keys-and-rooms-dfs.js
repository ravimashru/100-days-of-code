/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const visited = new Set();

  const stack = [0];
  while (stack.length > 0) {
    const top = stack.pop();
    visited.add(top);

    rooms[top].filter((e) => !visited.has(e)).forEach((e) => stack.push(e));
  }

  return visited.size === rooms.length;
};
