# Day 95

**Problem**: [(LeetCode) 658. Find K Closest Elements](https://leetcode.com/problems/find-k-closest-elements/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/find-k-closest-elements.js)

**Time complexity**: O(N) since we iterate over the entire array to find the index at which we should start looking for closest elements, and then at most N iterations to find the required number of closest elements.

**Space complexity**: O(1) since we use constant extra space for temporary variables.
