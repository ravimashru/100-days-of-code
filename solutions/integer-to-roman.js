/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {

  const aDecimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const aRoman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];


  let number = num;
  let roman = '';
  for (let i = 0; i < aDecimal.length; i++) {
    const k = aDecimal[i];
    const v = aRoman[i];
    while (number >= k) {
      roman += v;
      number -= k;
    }
  }

  return roman;

};