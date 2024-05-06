Function.prototype.myBind = function(thisContext, ...args) {
    // Write your code here
   const func = this
   return function(...innerArgs) {
        if(new.target) {
            const instance = new func(...args, ...innerArgs)
            return instance
        }
        func.call(thisContext, ...args, ...innerArgs)
    }
}