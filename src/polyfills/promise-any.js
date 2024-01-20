/**
 * Polyfill for Promise.any
 * @param {Array<Promise>} promises - an array of Promises
 * @return {Promise<any>}
 */
var promiseAny = function(promises) {
    return new Promise((resolve, reject) => {
        // If no promises are provided, reject immediately
        if (promises.length === 0) {
            reject(new AggregateError([], "All promises were rejected"));
            return;
        }

        let errors = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then(resolve).catch(error => {
                errors[index] = error;
                rejectedCount++;
                // If all promises have been rejected, reject the promiseAny
                if (rejectedCount === promises.length) {
                    reject(new AggregateError(errors, "All promises were rejected"));
                }
            });
        });
    });
};

/**
 * Example usage:
 * const promise = promiseAny([
 *     new Promise((_, reject) => setTimeout(reject, 100, 'first')),
 *     new Promise((_, reject) => setTimeout(reject, 200, 'second')),
 *     new Promise(resolve => setTimeout(resolve, 150, 'third'))
 * ]);
 * promise.then(console.log).catch(error => console.error(error.errors));
 */