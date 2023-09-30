/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // Slow but works
  // Traverse the list
  // Keep list of nodes
  // Return middle node

  const nodeList = [];
  let node = head;
  while (node) {
    nodeList.push(node);
    node = node.next;
  }
  // L = 10, return i = 5, L = 11, return i = 5
  return nodeList[Math.floor(nodeList.length / 2)];
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode_fast = function (head) {
  // Two pointers approach
  let p1 = head;
  let p2 = head;
  while (p2?.next) {
    p1 = p1.next;
    p2 = p2?.next?.next;
  }

  return p1;
};
