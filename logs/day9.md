# Day 9

**Problem**: [(Leetcode) 207. Course Schedule](https://leetcode.com/problems/course-schedule/)  
**Difficulty**: Medium

---

**Solution**: [JavaScript](../solutions/course-schedule.js)

In the digraph built, verticies are the courses (V) and directed edges are the prerequisite relationships (E).

**Time complexity**: O(V + E) since we traverse each node and edge in the graph to find cycles.

**Space complexity**: O(V) to store the set of already visited vertices, and the stack of vertices currently being searched.
