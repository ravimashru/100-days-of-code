/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const candyCount = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyCount[i] = 1 + candyCount[i - 1];
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyCount[i] = Math.max(1 + candyCount[i + 1], candyCount[i]);
    }
  }

  return candyCount.reduce((acc, e) => acc + e, 0);
};
