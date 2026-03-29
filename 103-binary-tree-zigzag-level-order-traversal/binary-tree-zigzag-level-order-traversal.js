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
var zigzagLevelOrder = function(root) {
    // let res=[];
    // let visited=[root];
    // if(!root) return res;
    // function BFSTree(){ 
    //     let count=0;  
    //     while(visited.length){
    //         let len = visited.length;
    //         let tempArr=[];
    //         let node;
    //         for(let i=0; i < len ; i++){
    //             node=visited.shift();
    //             if(node) {
    //                 tempArr.push(node.val);
    //                 if(count%2==0){
    //                     visited.push(node.right);
    //                     visited.push(node.left);
    //                 }else{
    //                     visited.push(node.left);
    //                     visited.push(node.right);
    //                 }
    //             }
    //         }
    //         res.push(tempArr);
    //         count=count+1;
    //     }
    // }
    // BFSTree();
    // return res;

    let result = []
    if(root == null) return result
    
    let queue = []
    let leftToRight = true
    
    queue.push(root)
    
    while(queue.length != 0) {
        let qSize = queue.length
        let ans = []
        
        // Processing level
        for(let i=0;i<qSize;i++) {
            let front = queue.shift()
            
            let index = leftToRight ? i : qSize-i-1
            ans[index] = front.val
            
            if(front.left) queue.push(front.left)
            if(front.right) queue.push(front.right)
        }
        // changing order of operation
        leftToRight = !leftToRight
        
        result.push(ans)
    }
    
    return result
    
};