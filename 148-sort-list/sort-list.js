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
var sortList = function(head) {

    let nodeList=[];
    let node=head;

    while(head){
        nodeList.push(head.val);
        head=head.next;
    };

    nodeList.sort((a,b)=> a-b);


 head = node; // We want to return the same head, and we already changed its value when filling the array
    
    for(const n of nodeList) {
        node.val = n; //Change list value
        node = node.next; //Go next
    }
    
    //Finally return the head of the new linked list
    return head;


    
};