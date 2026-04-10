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
 * @return {number[][]}
 */
var levelOrder = function(root) {

    if(!root) return []
    let ans=[[root.val]]
    let q=[root]
    while(q.length)
    {
        let m= q.length;
        let tem=[]
        for(let i=0 ;i< m;i++){
            let curr= q.shift();
            curr.left && q.push(curr.left) && tem.push(curr.left.val)
            curr.right && q.push(curr.right) && tem.push(curr.right.val)
        }
        if(tem.length >0) ans.push(tem)
    }
    return ans
    
};