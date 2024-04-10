const throttle = (func, delay) => {
    let inThrottle;
    return function(...args) {
        if(inThrottle) return
        inThrottle = true;
        func(...args)
        timer = setTimeout(() => {
           inThrottle = false
        }, delay)
    }
}