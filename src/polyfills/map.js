Array.prototype.mymap = function(callbackFn) {
    const arr = this;
    const result = new Array(arr.length)
    arr.forEach((item,index) => {
        result[index] = callbackFn(item)
    })
    return result
}