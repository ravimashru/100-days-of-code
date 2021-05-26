/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

  const anagrams = new Map();

  strs.forEach(str => {

    const key = str.split('').sort().join('');
    if (anagrams.has(key)) {
      anagrams.get(key).push(str);
    } else {
      anagrams.set(key, [str]);
    }

  });

  const res = [];
  for (let [key, value] of anagrams) {
    res.push(value);
  }
  return res;

};
