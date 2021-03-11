# Day 11

**Problem**: [(Leetcode) 623. Add One Row to Tree](https://leetcode.com/problems/add-one-row-to-tree/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/add-one-row-to-tree.js)

**Time complexity**: O(n) since all nodes in the tree are visited up to the specified depth. In the worst case, the specified depth is the depth of the tree and all nodes are visited.

**Space complexity**: O(n) since in the worst case, the tree is a skewed binary tree and the call stack goes as deep as the nodes in the tree because of the recursive call.
