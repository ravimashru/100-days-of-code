/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const mem = Array.from(triangle[triangle.length - 1]);

  for (let i = triangle.length - 2; i >= 0; i--) {
    const row = triangle[i];

    for (let j = 0; j < row.length; j++) {
      mem[j] = row[j] + Math.min(mem[j], mem[j + 1]);
    }
  }

  return mem[0];
};
