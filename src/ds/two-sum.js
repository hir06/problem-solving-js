
var twoSum = function(nums, target) {
    const result = []
    const map = new Map()
    for (let i =0; i< nums.length; i++) {
        if (map.has(nums[i])) return [i, map.get(nums[i])]
        else {
            const diff = target - nums[i]
            map.set(diff, i)
        }
    }
    return [];
}

/*
[3,2,4] target =6
Stdout
Map(1) { 3 => 0 }
Map(2) { 3 => 0, 4 => 1 }

Output
[2,1]
*/