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
var diameterOfBinaryTree = function (root) {

    if(!root){
        return 0;
    }
    let maxDia=0;
    //height or depth of tree
    function treeDepth(root) {
        if (!root) {
            return 0;
        }
        let leftDep = treeDepth(root.left);
        let rightDep = treeDepth(root.right);
        //compare the diameter at each root element(by adding left and right tree) and update the val if it is greater than any other
        maxDia= Math.max(maxDia,(leftDep+rightDep));
        return 1 + Math.max(leftDep,rightDep);

    }
    treeDepth(root);
    // return the max val at end
    return maxDia;
};