# Day 42

**Problem**: [(Leetcode) 1642. Furthest Building You Can Reach](https://leetcode.com/problems/furthest-building-you-can-reach/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/furthest-building.js)

**Time complexity**: O(N log N) since in the worst case, we'll have to heapify all the values.

**Space complexity**: O(L) where `L` is the number of ladders since we maintain a heap of that size.
