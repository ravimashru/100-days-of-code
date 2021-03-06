# Day 6

**Problem**: [(Leetcode) 645. Set Mismatch](https://leetcode.com/problems/set-mismatch/)  
**Difficulty**: Easy

---

**Solution**: [JavaScript I](../solutions/set-mismatch-1.js)

**Time complexity**: O(n log n) when using V8 because Tim sort is used. (See [Getting things sorted in V8](https://v8.dev/blog/array-sort))

**Space complexity**: O(n) because that is the worst-case auxiliary memory required by Tim sort.

---

**Solution**: [JavaScript II](../solutions/set-mismatch-2.js)

**Time complexity**: O(n) since we iterate through the entire array twice.

**Space complexity**: O(n) since we create a set with unique numbers in the array.

---

**Solution**: [JavaScript III](../solutions/set-mismatch-3.js)

**Time complexity**: O(n) since we iterate through the entire array twice.

**Space complexity**: O(1) since we need constant space to store the missing and duplicate value.
