/*
company : Google
Title: Build Promise
Difficulty: Hard
Description:
You are tasked with implementing a custom Promise class in JavaScript, mimicking the behavior of the native Promise. This includes handling asynchronous operations, chaining methods, and error management.
Your implementation should support the basic promise methods: then, catch, and the constructor should take an executor function with resolve and reject parameters.
Here's an example of how your custom Promise might be used:
javascript
const promise = new MyPromise((resolve, reject) => {
  setTimeout(() => resolve("Success!"), 1000);
});
promise.then(value => console.log(value));
Please make sure to include a method called getState() that returns the STATE to pass all unit tests.
Test Cases:
1. Resolve with the Correct Value
   - Description: Should resolve with the correct value.
   - Input: A MyPromise instance resolving with 'Success'.
   - Expected Output: The promise should resolve, and 'Success' should be logged.
2. Support Promise Chaining with Then
   - Description: Should support promise chaining with then.
   - Input: A MyPromise instance resolving with 1, chained with two then calls.
   - Expected Output: The final value logged should be 2.
3. Catch Errors Thrown in a Then Block
   - Description: Should catch errors thrown in a then block.
   - Input: A MyPromise instance that throws an error in a then block.
   - Expected Output: The error should be caught, and its message should be logged.
Constraints:
- Execution time should be reasonable for promise resolution/rejection.
- Memory usage should be kept to a minimum.
- The implementation should not use the native Promise.
*/