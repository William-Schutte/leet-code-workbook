/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Same as other problem but tree is unsorted here
  function getAncestry(node) {
    // DFS
    if (node === null) {
      return;
    }
    if (node.val === p.val || node.val === q.val) {
      return node;
    } else {
      const l = getAncestry(node.left);
      const r = getAncestry(node.right);
      if (l && r) {
        return node;
      } else {
        return l || r;
      }
    }
  }

  return getAncestry(root);
};
