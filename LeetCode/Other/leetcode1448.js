//1448. Count Good Nodes in Binary Tree

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
var count =0;
var goodNodes = function(root) {
    count = 0;
    traverseNode(root, root.val);
    return count;
};

function traverseNode(node, maxSoFar){
    if(node == null) return;
    if(maxSoFar <= node.val){
         count++;
        maxSoFar = node.val;
    }
    traverseNode(node.left,maxSoFar)
    traverseNode(node.right,maxSoFar)
}