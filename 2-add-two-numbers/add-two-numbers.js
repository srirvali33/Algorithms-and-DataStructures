/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    // let num1='';
    // let num2='';

    // let node1=l1;
    // let node2=l2;


    // while(node1){
    //     num1=num1+node1.val;
    //     node1= node1.next;

    // }

    // while(node2){
    //     num2=num2+node2.val;
    //     node2= node2.next;
    // }

    // let res= (BigInt(num1)+BigInt(num2)).toString().split("").reverse();

    // let newNode=null;
    // let prevNode=new ListNode(res[0]);

    //     for(let i=1; i < res.length; i++){
    //         newNode=new ListNode(res[i],null);
    //         prevNode.next=newNode;
    //         prevNode=newNode;
    //     }

    // return prevNode.next;

      const res = new ListNode()
    let cur = res
    let sum = 0

    while (l1 || l2 || sum > 0) {

        if (l1) {
            sum += l1.val
            l1 = l1.next
        } 

        if (l2) {
            sum += l2.val
            l2 = l2.next
        }

        cur.next = new ListNode(sum % 10)
        sum = parseInt(sum / 10)

        cur = cur.next
    }

    return res.next
    
    
};