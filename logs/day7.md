# Day 7

**Problem**: [(Leetcode) 88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)  
**Difficulty**: Easy

---

**Solution**: [JavaScript I](../solutions/merge-sorted-array-1.js)

**Time complexity**: O(n + m^2) because we iterate over elements in the first array once, and in the worst case all the smallest elements are in the second array. Therefore, while putting them in the right place in the first array, we have to iterate until the end of the second array to find the right index to swap.

**Space complexity**: O(1) because we use constant space for temporary variables.

---

**Solution**: [JavaScript II](../solutions/merge-sorted-array-2.js)

**Time complexity**: O(n + m) because we iterate over both arrays once while adding elements to the sorted array, and one more time when copying items back into the first array.

**Space complexity**: O(n + m) because we create a temporary array to hold sorted values from both arrays before copying them back to the first array.

