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
 * @return {boolean}
 */
var isValidBST = function (root) {
  return dfs(root, -Infinity, Infinity);
};

function dfs(node, lowerBound, upperBound) {
  if (!node) return true;

  if (node.val > lowerBound && node.val < upperBound) {
    return (
      dfs(node.left, lowerBound, node.val) &&
      dfs(node.right, node.val, upperBound)
    );
  } else {
    return false;
  }
}
