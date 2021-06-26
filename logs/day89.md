# Day 89

**Problem**: [(LeetCode) 576. Out of Boundary Paths](https://leetcode.com/problems/out-of-boundary-paths/)  
**Difficulty**: Medium

---

**Solution 1**: [JavaScript (Top-down)](../solutions/out-of-boundary-paths-top-down.js)

**Time complexity**: O(m x n x maxMove) since we need those many recursive calls to fill `memo` with the required values.

**Space complexity**: O(m x n x maxMove) for the temporary storage used for memoization.

**Solution 2**: [JavaScript (Bottom-up)](../solutions/out-of-boundary-paths-bottom-up.js)

**Time complexity**: O(m x n x maxMove) since we need to update the `dp` array of size `m x n` for a total of `maxMove` times.

**Space complexity**: O(m x n) for the `dp` array.
