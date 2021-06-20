/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const m = image.length;
  const n = image[0].length;
  const oldColor = image[sr][sc];
  const stack = [[sr, sc]];

  while (stack.length > 0) {
    const [r, c] = stack.pop();
    if (image[r][c] !== newColor) {
      image[r][c] = newColor;

      [
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1],
      ]
        .filter(([a, b]) => a >= 0 && a < m && b >= 0 && b < n)
        .filter(([a, b]) => image[a][b] === oldColor)
        .forEach((e) => stack.push(e));
    }
  }

  return image;
};
