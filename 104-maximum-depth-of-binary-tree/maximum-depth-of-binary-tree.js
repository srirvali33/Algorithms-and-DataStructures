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
 * @return {number}
 */
var maxDepth = function(root) {

    // let vis=[root];
    // let depth=0;

    // while(vis.length>0){

    //     let currNode=vis.shift();
    //     if(currNode.left){
    //          vis.push(currNode.left);
    //     }
    //     if(currNode.right){
    //          vis.push(currNode.right);
    //     }
       
    //     depth=depth+1;

    // }

    // return depth;

    let depth=0;
    

    function treeHelper(root){
        if(!root){
            return 0;
        }

        let leftHeight=treeHelper(root.left);
        let rightHeight=treeHelper(root.right);
        return 1+Math.max(leftHeight,rightHeight);

    }

    depth=treeHelper(root);
    return depth;



};