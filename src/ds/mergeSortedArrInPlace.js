/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * https://leetcode.com/problems/merge-sorted-array/?envType=featured-list&envId=top-interview-questions?envType=featured-list&envId=top-interview-questions
 */
var merge = function(nums1, m, nums2, n) {
    let end = nums1.length - 1;
    m--;
    n--;
    while(m >= 0 && n >= 0) {
        if(nums1[m] > nums2[n]) {
            nums1[end] = nums1[m]
            m--;
        }
        else {
            nums1[end] = nums2[n]
            n--
        }
        end--
    }
    while(n>= 0) {
        nums1[end] = nums2[n]
        n--
        end--
    }
    return nums1
};