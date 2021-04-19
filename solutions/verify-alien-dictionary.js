/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderMap = {};
  Array.from(order).forEach((e, i) => {
    orderMap[e] = i;
  });

  for (let i = 0; i < words.length - 1; i++) {
    if (!isLessThan(words[i], words[i + 1], orderMap)) {
      return false;
    }
  }

  return true;
};

var isLessThan = function (word1, word2, orderMap) {
  const minLength = Math.min(word1.length, word2.length);

  for (let i = 0; i < minLength; i++) {
    if (orderMap[word1[i]] < orderMap[word2[i]]) {
      return true;
    } else if (orderMap[word1[i]] > orderMap[word2[i]]) {
      return false;
    }
  }

  return word1.length <= word2.length;
};
