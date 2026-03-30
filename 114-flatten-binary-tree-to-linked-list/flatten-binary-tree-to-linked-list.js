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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let ptrList=[];
    
        function preorder(root){
            if(!root) return root;
            ptrList.push(root);
            let leftTree= preorder(root.left);
            let rightree= preorder(root.right);
            return root;
        }
        preorder(root);
    

    for(let i = 0; i < ptrList.length - 1; i++) {
        ptrList[i].right = ptrList[i + 1];
        ptrList[i].left = null;
    }
    
    return ptrList[0];
    
};