
// finding n elements from an array which sums to a target sum using backtracking

const arr = [1,2,3,4,5,8,12,19]
const targetSum = 12

function findElementsFromArr(arr, targetSum) {
    const results = []
    backTrackForSum(arr, targetSum, 0, [], results)
    return results
} 

function backTrackForSum(arr,targetSum, start, currentCombinations,results) {
   if (targetSum === 0) {
       console.log(currentCombinations)
       results.push([...currentCombinations])
       return results
   }
   for(let i=start; i<arr.length; i++) {
       if(arr[i] > targetSum) continue
       currentCombinations.push(arr[i])
       backTrackForSum(arr, targetSum - arr[i], i+1, currentCombinations, results)
       currentCombinations.pop()
   }
        
}

console.log(findElementsFromArr(arr, targetSum))

// produces the below output
// (4) [1, 2, 4, 5]
// (3) [1, 3, 8]
// (3) [3, 4, 5]
// (2) [4, 8]
// [12]