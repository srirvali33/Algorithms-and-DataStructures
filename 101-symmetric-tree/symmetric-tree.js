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
 * @return {boolean}
 */
var isSymmetric = function (root) {

    // let q1 = [root.left];
    // let st1 = [root.right];
    // let leftpart = [];
    // let ritpart = [];

    // while (q1.length>0 || st1.length>0) {

    //     let len1=q1.length;
    //     for (let i = 0; i < len1; i++) {
    //         let node1 = q1.shift();
    //         if(node1){
    //             q1.push(node1.left);
    //             q1.push(node1.right);
    //             leftpart.push(node1.val);
    //         }
    //     }

    //     let len2=st1.length;
    //     for (let j = 0; j < len2; j++) {
    //         let node2 = st1.pop();
    //         if(node2){
    //         st1.push(node2.left);
    //         st1.push(node2.right);
    //         ritpart.push(node2.val);
    //         }
            
    //     }

    // }

    // for(i in leftpart){

    //  if(leftpart[i]!=ritpart[i]){
    //   return false;
    //  }

    // }

    // return true;


    function symetricCheckHelper(node1, node2){

        if(node1==null || node2==null){
            return node1==node2;
        }

        if(node1.val!= node2.val) return false;

        let leftTreeVal= symetricCheckHelper(node1.left,node2.right);
        let rightTreeVal= symetricCheckHelper(node1.right, node2.left);

        return leftTreeVal && rightTreeVal;
    }

    return symetricCheckHelper(root.left,root.right);


};