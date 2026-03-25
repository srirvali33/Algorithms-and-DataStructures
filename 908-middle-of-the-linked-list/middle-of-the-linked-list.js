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
var middleNode = function(head) {

    //TC O(N)
    //SC O(1)

    if(!head) return head;
    let count=0;
    let node=head;

    while(node){
        count++;
        node=node.next;
    }

    node=head;
    let mid=Math.ceil(count/2);
    while(count>=mid && node){
        if(count==mid){
            return node;
        }else{
            node=node.next
        }
        count--;
    }


};