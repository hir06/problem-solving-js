/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */

// In JavaScript, you can initialize a variable to the smallest possible value using Number.MIN_VALUE. However, in the context of your problem, initializing maxArea to 0 is more appropriate because the smallest possible area that can be formed is 0, not Number.MIN_VALUE.
const maxArea = function(heights) {
    let maxArea = 0;
    let leftPointer = 0;
    let rightPointer = heights.length - 1;

    while (leftPointer < rightPointer) {
        const minHeight = Math.min(heights[leftPointer], heights[rightPointer]);
        const area = (rightPointer - leftPointer) * minHeight;
        maxArea = Math.max(maxArea, area);

        if (heights[leftPointer] < heights[rightPointer]) {
            leftPointer++;
        } else {
            rightPointer--;
        }
    }

    return maxArea;
}
