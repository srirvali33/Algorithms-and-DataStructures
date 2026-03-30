/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {

    let haset= {};
    inorder.forEach((val,ind)=>{
        haset[val]=ind;
    })

    let startind=0;
    let endind=inorder.length-1;

    function buildTreeFromList(start, end){
        if(start > end) return null;
        let rootNode= new TreeNode(preorder.shift());
        rootNode.left=buildTreeFromList(start,haset[rootNode.val]-1);
        rootNode.right=buildTreeFromList(haset[rootNode.val]+1,end);
        return rootNode;
    }

    return buildTreeFromList(startind,endind);
};