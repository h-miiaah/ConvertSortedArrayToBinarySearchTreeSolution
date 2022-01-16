/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var sortedArrayToBST = function(nums) {
    return treeHelper(nums, 0, nums.length - 1);
};

var treeHelper = function (nums, ll, rr) {
    if (ll > rr) return null;
    var mid = Math.ceil((ll + rr) / 2);
    var root = new TreeNode(nums[mid]);
    root.left = treeHelper(nums, ll, mid - 1);
    root.right = treeHelper(nums, mid + 1, rr);
    return root;
  };


  /*

  - The treeHelper function takes in the sorted array, the left index, and the right index.
  - If the left index is greater than the right index, then we know that the array is empty, so we return null.
  - Otherwise, we find the middle index of the array.
  - We create a new TreeNode with the value at the middle index.
  
  */