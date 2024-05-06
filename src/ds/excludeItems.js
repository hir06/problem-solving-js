/**
 * 
 * @param {*} items 
 * @param {*} excludes 
 * @returns object from items that does not have any key-value pair that matches any key-value pair in excludes
 */
function excludeItems(items, excludes) {
    // Write your code here
    const result = []
    for(let obj of items) {
       let exclude = false;
       for(let k of Object.keys(obj)) {
         const shallExclude = excludes.findIndex((item) => item.k === k && item.v === obj[k])
         if (shallExclude !== -1) {
          exclude = true;
          break; // No need to check other keys if one match is found
        }
       }
      if(!exclude) result.push(obj)
    }
    return result
  }
  
  // Do not edit below this line
  export default excludeItems;