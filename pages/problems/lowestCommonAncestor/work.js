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
  // Create function to create ancestry of target node
  function traverseTree(node, target, ancestry) {
    if (node === null) return ancestry;
    const newAncestry = [node, ...ancestry];
    if (target.val === node?.val) {
      return newAncestry;
    } else if (target.val < node?.val) {
      return traverseTree(node.left, target, newAncestry);
    } else {
      return traverseTree(node.right, target, newAncestry);
    }
  }

  // Obtain ancestry arrays for each target
  const pAncestry = traverseTree(root, p, []);
  const qAncestry = traverseTree(root, q, []);

  // Find common parent
  for (const pA of pAncestry) {
    for (const qA of qAncestry) {
      if (pA.val === qA.val) {
        return pA;
      }
    }
  }
  return node;
};

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
var lowestCommonAncestor_recursive = function (root, p, q) {
  // recursive approach
  // This means that p and q are on either side of this node,
  // thus the node is the lowest parent
  if (root.val > p.val && root.val < q.val) {
    return root;
  }

  // If not, then they are both on the same side of root node
  // Proceed down the tree until they are on separate sides, at which
  // point the lowest ancestor will be reached
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }

  return root;
};
