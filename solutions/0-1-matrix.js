/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  const answer = [...Array(m)].map((e) => Array(n).fill(Number.MAX_VALUE));
  const q = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) {
        answer[i][j] = 0;
        q.push([i, j]);
      }
    }
  }

  while (q.length > 0) {
    const [i, j] = q.shift();

    [
      [i - 1, j],
      [i, j - 1],
      [i + 1, j],
      [i, j + 1],
    ]
      .filter(([a, b]) => a >= 0 && b >= 0 && a < m && b < n)
      .forEach(([a, b]) => {
        if (answer[i][j] + 1 < answer[a][b]) {
          answer[a][b] = 1 + answer[i][j];
          q.push([a, b]);
        }
      });
  }

  return answer;
};
