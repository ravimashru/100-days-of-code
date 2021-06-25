/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function (edges) {
  const adlist = [...Array(edges.length + 1)].map((_) => []);

  for (let i = 0; i < edges.length; i++) {
    const [from, to] = edges[i];
    adlist[from].push(to);
    adlist[to].push(from);
  }

  const stack = [];
  let cycle;
  let cycleFound = false;

  function dfs(node, parent) {
    stack.push(node);
    for (let i = 0; i < adlist[node].length; i++) {
      const neighbor = adlist[node][i];

      if (neighbor === parent) {
        continue;
      }

      if (stack.indexOf(neighbor) !== -1) {
        const cycleStartIndex = stack.indexOf(neighbor);
        cycle = stack.slice(cycleStartIndex);
        cycleFound = true;
        break;
      }

      dfs(neighbor, node);

      if (cycleFound) {
        break;
      }
    }
    stack.pop();
  }

  dfs(1);

  const candidates = new Set();
  for (let i = 0; i < cycle.length; i++) {
    candidates.add(
      [cycle[i], cycle[(i + 1) % cycle.length]].sort((a, b) => a - b).join('|')
    );
  }

  for (let i = edges.length - 1; i >= 0; i--) {
    if (candidates.has(`${edges[i][0]}|${edges[i][1]}`)) {
      return edges[i];
    }
  }
};
