/**
 * https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description/
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
 
    return new Promise((resolve,reject) => {
        let result = new Array(functions.length);
        let count = 0;
        for(let i=0; i<functions.length; i++) {
        let fnResult =  functions[i]()
        fnResult.then(val => {
            result[i] = val;
            count++;
            if(count === functions.length) resolve(result)
        }).catch(err => reject(err))
     }
    })   
 };
 
 /**
  * const promise = promiseAll([() => new Promise(res => res(42))])
  * promise.then(console.log); // [42]
  */
