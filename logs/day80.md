# Day 79

**Problem**: [(LeetCode) 279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/perfect-squares.js)

**Time complexity**: O(N^2) since every integer can be expressed as a sum of at most four squares, we need to go four levels deep in the tree. The width of the tree at this level is `sqrt(N)^4 = N^2`.
**Space complexity**: O(N) since we use extra storage to keep track of the sums we have computed 
