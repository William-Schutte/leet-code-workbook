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
var isBalanced = function (root) {
  // A tree is balanced if the difference in depths of child nodes
  // exceeds 1.
  if (root === null) return true;

  if (getDepth(root) === -1) return false;
  return true;

  // Recursively compare depth of left vs right nodes.
  // Return -1 for unbalanced cases
  function getDepth(node) {
    if (node === null) return 0;
    let ldepth = getDepth(node.left);
    let rdepth = getDepth(node.right);

    if (ldepth === -1 || rdepth === -1) return -1;

    // Here is where the work happens. Once we have depths,
    // we can compare and check for balance. If unbalanced,
    // that side will return -1, leading above to be triggered
    // in the previous call.
    if (Math.abs(ldepth - rdepth) > 1) {
      return -1;
    }
    // If balanced, return the depth +1 up the stack
    return Math.max(ldepth, rdepth) + 1;
  }
};
