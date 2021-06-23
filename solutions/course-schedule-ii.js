/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const preMap = new Map();
  const reversePreMap = new Map();
  const startingCandidates = new Set();
  const completed = new Set();
  const order = [];

  for (let i = 0; i < numCourses; i++) {
    startingCandidates.add(i);
  }

  for (const [then, first] of prerequisites) {
    if (preMap.has(first)) {
      preMap.get(first).push(then);
    } else {
      preMap.set(first, [then]);
    }
    startingCandidates.delete(then);

    if (reversePreMap.has(then)) {
      reversePreMap.get(then).push(first);
    } else {
      reversePreMap.set(then, [first]);
    }
  }

  const q = Array.from(startingCandidates);

  while (q.length > 0) {
    const front = q.shift();

    completed.add(front);
    order.push(front);

    if (preMap.has(front)) {
      const nextList = preMap.get(front);

      nextList.forEach((e) => {
        if (!completed.has(e) && isAllPrerequisitesCompleted(e)) {
          q.push(e);
          completed.add(e);
        }
      });
    }
  }

  function isAllPrerequisitesCompleted(e) {
    if (!reversePreMap.has(e)) {
      return true;
    }
    const prereq = reversePreMap.get(e);
    for (let i = 0; i < prereq.length; i++) {
      if (!completed.has(prereq[i])) {
        return false;
      }
    }
    return true;
  }

  return completed.size === numCourses ? order : [];
};
