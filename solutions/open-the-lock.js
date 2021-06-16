/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  if (deadends.indexOf('0000') > -1) {
    return -1;
  }

  if (target === '0000') {
    return 0;
  }

  const visited = new Set();
  const q = ['0000'];
  visited.add('0000');
  let level = 1;

  while (q.length > 0) {
    const limit = q.length;
    for (let i = 0; i < limit; i++) {
      const front = q.shift();
      const candidates = getCandidates(front);

      for (let j = 0; j < candidates.length; j++) {
        const c = candidates[j];

        if (c === target) {
          return level;
        }

        if (deadends.indexOf(c) === -1 && !visited.has(c)) {
          visited.add(c);
          q.push(c);
        }
      }
    }

    level++;
  }

  function getCandidates(combination) {
    const nums = combination.split('').map((e) => parseInt(e));
    return [
      [(nums[0] + 1) % 10, nums[1], nums[2], nums[3]].join(''),
      [nums[0], (nums[1] + 1) % 10, nums[2], nums[3]].join(''),
      [nums[0], nums[1], (nums[2] + 1) % 10, nums[3]].join(''),
      [nums[0], nums[1], nums[2], (nums[3] + 1) % 10].join(''),
      [(nums[0] + 9) % 10, nums[1], nums[2], nums[3]].join(''),
      [nums[0], (nums[1] + 9) % 10, nums[2], nums[3]].join(''),
      [nums[0], nums[1], (nums[2] + 9) % 10, nums[3]].join(''),
      [nums[0], nums[1], nums[2], (nums[3] + 9) % 10].join(''),
    ];
  }

  return -1;
};
