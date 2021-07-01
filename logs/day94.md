# Day 94

**Problem**: [(LeetCode) 89. Gray Code](https://leetcode.com/problems/gray-code/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/gray-code.js)

**Time complexity**: O(2^N) since the outer loop runs for `N` iterations and at each iteration, the inner loop runs for `2^(N-1)` iterations.

**Space complexity**: O(1) since we're adding the result to the array we return directly.
