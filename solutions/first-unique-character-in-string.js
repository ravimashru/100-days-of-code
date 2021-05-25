/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {

  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {

    if (charMap.has(s[i])) {
      charMap.set(s[i], 1 + charMap.get(s[i]));
    } else {
      charMap.set(s[i], 1);
    }

  }

  for (let [char, count] of charMap) {
    if (count === 1) {
      return s.indexOf(char);
    }
  }

  return -1;

};
