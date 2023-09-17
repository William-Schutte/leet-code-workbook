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
var maxDepth = function (root) {
  function getDepth(node, count) {
    console.log("GET DEPTH: ", count, node);
    let l_count = count;
    let r_count = count;

    if (node.left) {
      l_count = getDepth(node.left, count + 1);
    }
    if (node.right) {
      r_count = getDepth(node.right, count + 1);
    }
    if (!node.left && !node.right) {
      return count;
    }
    return l_count > r_count ? l_count : r_count;
  }

  let l = 1;
  let r = 1;
  if (root === null) {
    return 0;
  }
  if (root.left) {
    l = getDepth(root.left, 2);
  }
  if (root.right) {
    r = getDepth(root.right, 2);
  }

  return l > r ? l : r;
};
