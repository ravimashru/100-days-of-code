/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rowMap = new Map();
  const colMap = new Map();
  const squareMap = new Map();

  for (let i = 0; i < 9; i++) {
    rowMap.set(i, new Set());
    colMap.set(i, new Set());
    squareMap.set(i, new Set());
  }

  const getSquareIndex = (rowIdx, colIdx) => {
    const multiplier = Math.floor(rowIdx / 3);

    return 3 * multiplier + Math.floor(colIdx / 3);
  };

  for (let rowIdx = 0; rowIdx < 9; rowIdx++) {
    const row = board[rowIdx];

    for (let colIdx = 0; colIdx < 9; colIdx++) {
      const char = row[colIdx];

      if (char === ".") {
        continue;
      }

      if (rowMap.get(rowIdx).has(char)) {
        return false;
      }

      if (colMap.get(colIdx).has(char)) {
        return false;
      }

      const square = getSquareIndex(rowIdx, colIdx);

      if (squareMap.get(square).has(char)) {
        return false;
      }

      rowMap.get(rowIdx).add(char);
      colMap.get(colIdx).add(char);
      squareMap.get(square).add(char);
    }
  }

  return true;
};
