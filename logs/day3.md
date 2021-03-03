# Day 3

**Problem**: [(Leetcode) 268. Missing Number](https://leetcode.com/problems/missing-number/)  
**Difficulty**: Easy  

---

**Solution**: [JavaScript I](../solutions/missing-number-1.js)

**Time complexity**: Depends on the implementation of the sort function that we use to sort the array of numbers. In v8, for large arrays, quicksort is used (i.e. O(n log n))

**Space complexity**: O(1) since we need constant space to store the missing number.

---

**Follow up**: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

**Solution**: [JavaScript II](../solutions/missing-number-2.js)

To achieve this, we calculate the sum of numbers in the array and subtract it from what we would expect the sum of `n` numbers to be. The difference is the number that is missing between `0` and `n` in the array.

**Time complexity**: O(n) since we loop through the array once to get the sum of all numbers (using the reduce function).

**Space complexity**: O(1) since we need constant space to store the actual and expected sums.
