/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const squares = [];
  const seen = new Set();
  let x = 1;
  while (x * x <= n) {
    squares.push(x * x);
    seen.add(x * x);
    x++;
  }

  if (n === squares[squares.length - 1]) {
    return 1;
  }

  const q = [...squares];
  let level = 1;
  while (q.length > 0) {
    const limit = q.length;

    for (let i = 0; i < limit; i++) {
      const front = q.shift();
      for (let j = 0; j < squares.length; j++) {
        const s = squares[j];

        if (front + s === n) {
          return level + 1;
        }

        if (front + s < n && !seen.has(front + s)) {
          q.push(front + s);
          seen.add(front + s);
        }
      }
    }

    level++;
  }
};
