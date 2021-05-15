/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  const stateMap = {
    START: { INT: 2, SIGN: 1, ".": 4 },
    1: { INT: 2, ".": 4 },
    2: { INT: 2, ".": 3, EXP: 6 },
    3: { EXP: 6, INT: 5 },
    4: { INT: 5 },
    5: { INT: 5, EXP: 6 },
    6: { SIGN: 7, INT: 8 },
    7: { INT: 8 },
    8: { INT: 8 },
  };
  let state = "START";

  for (let i = 0; i < s.length; i++) {
    let nextChar = s[i];

    if (["+", "-"].includes(nextChar)) {
      nextChar = "SIGN";
    } else if (["e", "E"].includes(nextChar)) {
      nextChar = "EXP";
    } else if (
      ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(nextChar)
    ) {
      nextChar = "INT";
    }

    state = stateMap[state][nextChar];

    if (!state) {
      return false;
    }
  }

  return [2, 3, 5, 8].includes(state);
};
