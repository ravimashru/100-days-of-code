/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  const adlist = [...Array(numCourses)].map((_) => []);
  const visited = new Array(numCourses).fill(false);
  const visiting = new Array(numCourses).fill(false);

  for (let [s, d] of prerequisites) {
    adlist[s].push(d);
  }

  for (let i = 0; i < numCourses; i++) {
    if (hasCycle(i)) {
      return false;
    }
  }
  return true;

  function hasCycle(course) {
    if (visited[course]) {
      return false;
    }

    if (visiting[course]) {
      return true;
    }

    visiting[course] = true;
    for (let adj of adlist[course]) {
      if (hasCycle(adj)) {
        return true;
      }
    }
    visiting[course] = false;
    visited[course] = true;

    return false;
  }
};
