/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  // Will have to perform DFS
  if (node === null) {
    return node;
  }
  const visited = [];

  return cloneNode(node, visited);
};

var cloneNode = (node, visited) => {
  // Create a new node to be the copy, this will start at 1
  const newNode = new Node(node.val);
  // Set the node as visited
  visited[node.val] = newNode;
  // Iterate over all neighbors
  for (const neighbor of node.neighbors) {
    if (!visited[neighbor.val]) {
      // If we haven't seen this neighbor, visit it
      const newNeighbor = cloneNode(neighbor, visited);
      newNode.neighbors.push(newNeighbor);
    } else {
      // If we have seen it, add it to neighbors
      const newNeighbor = visited[neighbor.val];
      newNode.neighbors.push(newNeighbor);
    }
  }
  return newNode;
};
