# Day 2

**Problem**: [(Leetcode) 724. Find Pivot Index](https://leetcode.com/problems/find-pivot-index/)  
**Difficulty**: Easy  

---

**Solution**: [JavaScript I](../solutions/pivot-index-1.js)

**Time complexity**: O(n) because we loop through the entire array to find the sum, and then the index at which the left and right sums are equal.

**Space complexity**: O(n) since we create two auxiliary arrays to store the cummulative sum from the left and the right that has the same dimensions as the input array.

---

**Solution**: [JavaScript II](../solutions/pivot-index-2.js)

**Time complexity**: O(n) because we loop through the entire input array to find the sum (using the reduce function).

**Space complexity**: O(1) since we use constant auxiliary space for the variables sum, sumL, etc.
