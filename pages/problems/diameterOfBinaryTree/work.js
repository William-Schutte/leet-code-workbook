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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  // Diameter = depth of left + depth of right
  // Keep track of max diameter

  // Slow but functionaly, I'm sure some steps are repeated

  function getDepth(root, depth) {
    if (!root) return depth - 1;
    let left = depth;
    let right = depth;

    if (root.left) {
      left = getDepth(root.left, depth + 1);
    }
    if (root.right) {
      right = getDepth(root.right, depth + 1);
    }

    return left > right ? left : right;
  }

  let maxDiameter = 0;

  function getDiameter(root) {
    if (!root) return;

    const left = getDepth(root.left, 1);
    const right = getDepth(root.right, 1);
    maxDiameter = Math.max(maxDiameter, left + right);

    getDiameter(root.left);
    getDiameter(root.right);
  }

  getDiameter(root);
  return maxDiameter;
};

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
 * @return {number}
 */
var diameterOfBinaryTree_dfs = function (root) {
  // Depth first search, much faster
  // Keep track of max diameter
  let maxDiameter = 0;

  function getDepth(node) {
    if (!node) return 0;

    let left = getDepth(node.left);
    let right = getDepth(node.right);

    maxDiameter = Math.max(maxDiameter, left + right);

    return 1 + Math.max(left, right);
  }

  getDepth(root);
  return maxDiameter;
};
