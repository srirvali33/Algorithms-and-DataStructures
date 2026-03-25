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

    while(head!=null){

        if(hset.has(head.next)){
            return true;
        }else{
            hset.add(head.next);
            head=head.next;
        }
    }

    return false;
    
};