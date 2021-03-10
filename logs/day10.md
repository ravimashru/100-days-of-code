# Day 10

**Problem**: [(Leetcode) 12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/integer-to-roman.js)

**Time complexity**: O(1) since the input is restricted to 3999. Each of the 13 Roman letters cannot appear more than 3 times, so the maximum number of times the while loop will run is O(3 * 13) = O(1).

**Space complexity**: O(1) since we are using constant space to store the decimal and roman numeral arrays.
