// problem: https://leetcode.com/problems/promise-time-limit/description/

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
 // with promise.race
// var timeLimit = function(fn, t) {
//     return async function(...args) {
//         let startTime = Date.now();
//         const promise = fn(...args);
//         const timer = new Promise((_, reject) => setTimeout(reject, t, "Time Limit Exceeded"));
//         try {
//             return await Promise.race([promise, timer]);
//         } catch (error) {
//             throw error;
//         }
//     }
// };

// without promise.race
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
            fn(...args).then(resolve, reject);
        });
    }
};


/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */