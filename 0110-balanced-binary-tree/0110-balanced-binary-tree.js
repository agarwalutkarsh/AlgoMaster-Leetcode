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
var isBalanced = function(root) {
    const getHeight = (rootNode) => {
        if(!rootNode){
        return 0
        }
    
    if (!rootNode.left && !rootNode.right) {
        return 1
    }
    const left = getHeight(rootNode.left) // height of left subtree
    if (left === -1) { // checking if left is unbalanced
        return -1
    }
    const right = getHeight(rootNode.right) // height of right subtree
    if (right === -1) { // checking if right is unbalanced
        return -1
    }
    
    if (Math.abs(left - right) > 1) {
        return -1
    }
    return Math.max(left, right) + 1
    }
    return getHeight(root) === -1 ? false : true
};