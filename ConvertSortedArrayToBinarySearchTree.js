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

  

  */