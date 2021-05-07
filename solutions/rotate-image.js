/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  rotateInPlace(matrix, 0, 0, matrix.length);
  return matrix;
};

var rotateInPlace = function (matrix, i, j, length) {
  if (length === 1) {
    return;
  }

  if (length === 2) {
    const temp = matrix[i][j];
    matrix[i][j] = matrix[i + 1][j];
    matrix[i + 1][j] = matrix[i + 1][j + 1];
    matrix[i + 1][j + 1] = matrix[i][j + 1];
    matrix[i][j + 1] = temp;
    return;
  }

  rotateInPlace(matrix, i + 1, j + 1, length - 2);
  for (let k = 0; k < length - 1; k++) {
    const temp = matrix[i][j + k];
    matrix[i][j + k] = matrix[i + length - 1 - k][j];
    matrix[i + length - 1 - k][j] = matrix[i + length - 1][j + length - 1 - k];
    matrix[i + length - 1][j + length - 1 - k] = matrix[i + k][j + length - 1];
    matrix[i + k][j + length - 1] = temp;
  }
};
