/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    let result = []
    while(p1< nums1.length || p2< nums2.length) {
        if(p1 == m) { result.push(nums2[p2]); p2++ }
        if(p2 == n) { result.push(nums1[p1]); p1++ }
        if(nums1[p1] <= nums2[p2]) {
           result.push(nums1[p1])
           p1++
        }
        else {
            result.push(nums2[p2])
            p2++
        }
    }
    console.log(result)
    return result
};