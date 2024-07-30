async function retryApiCall(apiFunction, maxRetries, retryInterval) {
    let attempts = 0;
    while(attempts < maxRetries) {
      try {
        const res = apiFunction()
        if(res.status == 200) {
          return res
        }
        else throw new Error(`API call failed with ${res.status}`)
      } catch(err) {
        attempts ++;
        if(attempts >= maxRetries) {
          throw new Error(`Retry limits have reached: ${err}`)
        }
        console.log(`retry failed, trying in ${retryInterval}ms...`)
        await new Promise(resolve => setTimeOut(resolve, retryInterval))
      }
    }
   }
   
   // Do not edit below this line
   export default retryApiCall;