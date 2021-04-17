/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let leftVowelCount = 0,
    rightVowelCount = 0;
  const vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

  for (let i = 0; i < s.length / 2; i++) {
    if (vowels.includes(s[i])) {
      leftVowelCount++;
    }
  }

  for (let i = s.length / 2; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      rightVowelCount++;
    }
  }

  return leftVowelCount === rightVowelCount;
};
