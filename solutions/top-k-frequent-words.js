/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const word2count = new Map();

  words.forEach((word) => {
    if (word2count.has(word)) {
      word2count.set(word, word2count.get(word) + 1);
    } else {
      word2count.set(word, 1);
    }
  });

  const uniqueWords = new Set(words);
  const aUniqueWords = Array.from(uniqueWords);

  const candidates = aUniqueWords.sort((a, b) => {
    const ca = word2count.get(a);
    const cb = word2count.get(b);

    return ca === cb ? (a < b ? -1 : 1) : cb - ca;
  });

  return candidates.slice(0, k);
};
