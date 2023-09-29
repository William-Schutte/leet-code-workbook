/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // Simple solution, mark nodes as visited
  // O(1) space
  let node = head;
  while (node) {
    if (node.val === "visited") {
      return true;
    } else {
      node.val = "visited";
      node = node.next;
    }
  }
  return false;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle_2 = function (head) {
  // Pointer velocity solution
  let fast = head;
  while (fast && fast.next) {
    // Head is moving by 1 node/cycle
    head = head.next;
    // Fast is moving by 2 nodes/cycle
    fast = fast.next.next;
    // If there is a loop, fast will catch back up to head
    if (head === fast) return true;
  }
  return false;
};
