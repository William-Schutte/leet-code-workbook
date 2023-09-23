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
var reverseList = function (head) {
  // Non-recursive solution
  if (head === null || head?.next === null) {
    return head;
  }

  let currNode = head;
  let prevNode = null;

  // CurrNode is set to next, so this will continue until we reach the end node
  // This essentially flips the direction of the nodes as we move through the list
  while (currNode !== null) {
    // Get the next node
    const nextNode = currNode.next;
    // Reverse the current node (point backwards)
    currNode.next = prevNode;
    // Set that reversed node as the prev
    prevNode = currNode;
    // Set current node to the next one
    currNode = nextNode;
  }

  return prevNode;
};
