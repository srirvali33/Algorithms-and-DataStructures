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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let sortedList=[];

    function inOrderTraverse(root){

        if(!root){
            return;
        }

        inOrderTraverse(root.left);
        sortedList.push(root.val);
        inOrderTraverse(root.right);

    }
    inOrderTraverse(root);
    return sortedList[k-1];
    
};