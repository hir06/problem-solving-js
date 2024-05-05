/*
You are tasked with creating a function, flattenWithPrefix, 
that flattens a nested object. The challenge lies in ensuring that as the object is flattened, 
the keys in the resulting object are prefixed with their parent keys, 
joined by periods (‘.’). This means that for every level of nesting within the original object, 
its key is concatenated with its parent key(s), 
creating a clear hierarchical representation of the original nested structure in the flattened object.
*/

function flattenWithPrefix(obj, prefix = '') {
    let ans = {}
    
    for (let key of Object.keys(obj)) {
       const newKey = prefix ? `${prefix}.${key}` : key;
      if(typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        const newItem = flattenWithPrefix(obj[key], newKey)
        ans = {...ans, ...newItem}
      }
        
      else 
      {
        
        ans[newKey] = obj[key] 
      }
    } 
    return ans
}

// Do not edit below this line
export default flattenWithPrefix;