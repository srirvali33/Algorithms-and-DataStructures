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
var hasCycle = function(head) {

    let hset= new Set();
    let curr=head;

    while(curr!=null){

        if(hset.has(curr.next)){
            return true;
        }else{
            hset.add(curr.next);
            curr=curr.next;
        }
    }

    return false;
    
};