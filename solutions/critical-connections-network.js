/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function (n, connections) {

  const graph = {};
  for (let i = 0; i < n; i++) {
    graph[i] = [];
  }
  for (let [a, b] of connections) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const res = [];
  const minNode = new Array(n).fill(Infinity);

  const dfs = (node, parent, order) => {

    if (minNode[node] !== Infinity) {
      return minNode[node];
    }

    minNode[node] = order;
    for (let next of graph[node]) {

      if (next === parent) {
        continue;
      }

      const lowest = dfs(next, node, order + 1);

      if (order < lowest) {
        res.push([node, next]);
      }

      minNode[node] = Math.min(minNode[node], lowest);

    }

    return minNode[node];

  };

  dfs(0, -1, 0);

  return res;

};