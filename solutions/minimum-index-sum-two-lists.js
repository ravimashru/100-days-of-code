/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let minSum = Number.MAX_SAFE_INTEGER;
  const mapOfList1 = new Map();
  const indexSumMap = new Map();

  for (let i = 0; i < list1.length; i++) {
    mapOfList1.set(list1[i], i);
  }

  for (let i = 0; i < list2.length; i++) {
    if (mapOfList1.has(list2[i])) {
      const sumOfIndex = mapOfList1.get(list2[i]) + i;
      minSum = Math.min(minSum, sumOfIndex);

      const existing = indexSumMap.get(sumOfIndex) || [];
      existing.push(list2[i]);
      indexSumMap.set(sumOfIndex, existing);
    }
  }

  return indexSumMap.get(minSum);
};
