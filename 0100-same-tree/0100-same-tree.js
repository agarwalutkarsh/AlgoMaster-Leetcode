/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var isSameTree = function(p, q) {
    const p_arr =[]
    const q_arr=[]
    const traverse = (root, arr) => {
        if (root === null) {
            arr.push(root)
            return
        }
        if (!root) {
            return
        }
        arr.push(root.val)
        traverse(root.left, arr)
        traverse(root.right, arr)
    }

    traverse(p, p_arr)
    traverse(q, q_arr)

    const compareArr = (arr1, arr2) => {
        return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index])
    }

    return compareArr(p_arr, q_arr)
};