# Day 85

**Problem**: [(LeetCode) 692. Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)  
**Difficulty**: Medium

---

Solved on [day 8](day8.md) using hash map.

**Solution**: [JavaScript](../solutions/top-k-frequent-words-heap.js)

**Time complexity**: O(N log k) where `N` is the number of words and `k` is the input parameter since we need to heapify at most `k` elements `N` times.

**Space complexity**: O(N) where `N` is the number of words, since we use extra storage to store the number of occurences of each word in a hash map.
