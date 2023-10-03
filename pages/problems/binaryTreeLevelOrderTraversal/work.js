/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // Breadth First Search/Traversal
  // Use queue to explore levels
  if (!root) return [];

  const traversal = [[]];

  let queue = [];
  let nextLayerQueue = [];
  let level = 0;

  nextLayerQueue.push(root);

  while (nextLayerQueue.length) {
    queue = [...nextLayerQueue];
    nextLayerQueue = [];

    let node;
    while (queue.length) {
      node = queue.shift();
      if (!node) continue;
      traversal[level] = traversal[level]
        ? [...traversal[level], node.val]
        : [node.val];
      if (node.left) nextLayerQueue.push(node.left);
      if (node.right) nextLayerQueue.push(node.right);
    }
    level++;
  }

  return traversal;
};
