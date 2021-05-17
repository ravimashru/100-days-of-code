/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function (words) {
  const lengthMap = {};
  const chainMap = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;
    chainMap[word] = 1;
    lengthMap[wordLength] = lengthMap[wordLength] || [];
    lengthMap[wordLength].push(word);
  }

  const minLength = 2;
  const maxLength = 16;
  let res = 1;

  const isPrefix = (prefix, word) => {
    if (prefix.length !== word.length - 1) {
      return false;
    }
    let diffCharEncountered = false;
    let prefixPtr = 0;
    let wordPtr = 0;

    while (prefixPtr !== prefix.length || wordPtr !== word.length) {
      if (prefix[prefixPtr] === word[wordPtr]) {
        prefixPtr++;
        wordPtr++;
      } else if (diffCharEncountered) {
        return false;
      } else {
        diffCharEncountered = true;
        wordPtr++;
      }
    }
    return true;
  };

  for (let len = minLength; len <= maxLength; len++) {
    const preLen = len - 1;

    if (!lengthMap[len] || !lengthMap[preLen]) {
      continue;
    }

    for (let word of lengthMap[len]) {
      for (let prefix of lengthMap[preLen]) {
        if (isPrefix(prefix, word)) {
          chainMap[word] = Math.max(chainMap[word], chainMap[prefix] + 1);

          res = Math.max(res, chainMap[word]);
        }
      }
    }
  }

  return res;
};
