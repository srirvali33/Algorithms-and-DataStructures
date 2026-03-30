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
        // take 1st root or every root from pre order for root detection and creation
        let rootNode= new TreeNode(preorder.shift());
        // left of the root would be inorder left part of current root
        rootNode.left=buildTreeFromList(start,haset[rootNode.val]-1);
        // right  of the root would be inorder right part of current root
        rootNode.right=buildTreeFromList(haset[rootNode.val]+1,end);
        return rootNode;
    }

    return buildTreeFromList(startind,endind);
};