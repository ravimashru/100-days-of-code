# Day 76

**Problem**: [(LeetCode) 648. Replace Words](https://leetcode.com/problems/same-tree/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/replace-words.js)

**Time complexity**: O(N) where `N` is the length of the sentence. The lookup in the trie for each word is done in linear time.

**Space complexity**: O(D) where `D` is the size of the dictionary since in the worst case, no words in the dictionary have a common prefix and all words are stored in a separate path in the trie.
