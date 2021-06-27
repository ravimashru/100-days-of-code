/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let res = 0;

  const waitingFor = new Map();
  words.forEach((word) => {
    const key = word[0];
    const value = word.substr(1);
    if (waitingFor.has(key)) {
      waitingFor.get(key).push(value);
    } else {
      waitingFor.set(key, [value]);
    }
  });

  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (waitingFor.has(c)) {
      const temp = waitingFor.get(c);
      waitingFor.set(c, []);
      temp.forEach((str) => {
        if (str.length === 0) {
          res++;
        } else {
          const nextKey = str[0];
          const nextValue = str.substr(1);
          if (waitingFor.has(nextKey)) {
            waitingFor.get(nextKey).push(nextValue);
          } else {
            waitingFor.set(nextKey, [nextValue]);
          }
        }
      });
    }
  }

  return res;
};
