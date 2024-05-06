class CustomPromiseMethods {
    static myRace(promises) {
      // Implement the custom 'myRace' method
      return new Promise((resolve, reject) => {
         promises.forEach((promise) => {
           promise.then(resolve).catch(reject)
        })
      })   
    }
  
    static myAny(promises) {
      // Implement the custom 'myAny' method
      const errors = []
      let rejectedCount = 0;
  
      return new Promise((resolve, reject) => {
         promises.forEach((promise, index) => {
         promise.then(resolve).catch((err) => {
         errors[index] = err;
         /* Here you need rejectedCount as a separate variable because the array is sparse
         let's say promise 5 is resolved hence errros[5] will be having a value while other 
         are intialised with undefined but array.length = highest index of array +1 
         hence array.length can't be reliable
         */ 
         rejectedCount++
         if(rejectedCount === promises.length) reject(errors)
       })
      })
      })
    }
  
    static myAll(promises) {
      // promise.all
      return new Promise((resolve, reject) => {
        const results = []
        const completedPromises = 0;
        if (promises.length === 0) {
        resolve(results); // Immediately resolve if the input is an empty array
        }
        promises.forEach((p, index) => {
          // in case p is not promise
        Promise.resolve(p).then((res) => {
          results[index] = value; 
          completedPromises++;
          if(completedPromises === promises.length) resolve(results)
        }).catch((err) => {
          reject(err)
        })
      })
    })
    }
  
    static myAllSettled(promises) {
        return new Promise((resolve) => { // No need for reject in allSettled
          let results = [];
          let settledPromises = 0;
      
          if (promises.length === 0) {
            resolve(results); // Immediately resolve if the input is an empty array
          }
      
          promises.forEach((promise, index) => {
            promise.then((value) => {
              results[index] = { status: 'fulfilled', value: value };
            }).catch((reason) => {
              results[index] = { status: 'rejected', reason: reason };
            }).finally(() => {
              settledPromises++;
              if (settledPromises === promises.length) {
                resolve(results); // Resolve when all promises have settled
              }
            });
          });
        });
      }
  }
  
  // Do not edit below this line
  export default CustomPromiseMethods;