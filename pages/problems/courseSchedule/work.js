/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
  // This is a graph traversal where we are looking for loops
  // If a branch loops back on itself, that implies you would have
  // to take the last course before the first course in a chain

  // Kahn's Algorithm
  const graph = Array(numCourses)
    .fill(0)
    .map(() => []);
  const indegrees = Array(numCourses).fill(0);
  const stack = [];

  let visitedNodes = 0;

  // Create our graph and count up indegrees of the courses
  for (courseSequence of prerequisites) {
    const [course, prereq] = courseSequence;
    graph[prereq].push(course);
    indegrees[course] += 1;
  }
  // Get all nodes with indegree = 0
  for (let i = 0; i < numCourses; i++) {
    if (indegrees[i] === 0) {
      stack.push(i);
    }
  }

  // Work through the stack, decrementing indegrees
  while (stack.length) {
    const node = stack.pop();
    visitedNodes += 1;
    for (const course of graph[node]) {
      indegrees[course] -= 1;
      if (!indegrees[course]) stack.push(course);
    }
  }

  // If the graph is not a DAG, these will not match
  return visitedNodes === numCourses;
};
