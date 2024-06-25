/*
Company: Google
Title: Debounce III
Difficulty: Hard
Description:
The goal is to implement an advanced version of the debounce() function in JavaScript, which introduces an options parameter. This parameter contains two properties: leading and trailing, both of which are boolean flags.
The leading flag determines if the debounced function should execute immediately on the first call. When true, the function triggers right away; otherwise, it waits for the specified delay. The trailing flag, on the other hand, controls the execution of the function after the delay. If true, the function executes after the delay; if false, it does not.
By default, the debounce function behaves traditionally, with {leading: false, trailing: true}. This task involves creating a debounce mechanism that adapts to these options, providing flexibility in function execution timing. This adaptation is crucial for optimizing event handling and response strategies in various scenarios.
Example: Consider a sequence of function calls with corresponding delays. The enhanced debounced function should execute these calls based on the configured leading and trailing options, potentially reducing the number of invocations for efficiency.
Note: In testing environments, especially browsers, the accuracy of setTimeout() and clearTimeout() might not be reliable. Thus, alternative implementations should be considered for evaluating the debounced function's behavior.
Test Cases:
1. Execute Immediately on the First Call When Leading is True
   - Description: Should execute immediately on the first call when leading is true.
   - Input: A debounced function with { leading: true, trailing: false }.
   - Expected Output: The function increments a counter immediately, with no further increments after the delay.
2. Execute Only Once After the Wait Period When Trailing is True and Leading is False
   - Description: Should execute only once after the wait period when trailing is true and leading is false.
   - Input: A debounced function with { leading: false, trailing: true }.
   - Expected Output: The function increments a counter only once after the delay, despite multiple calls.
3. Handle Multiple Calls and Only Execute on the Trailing Edge When Both Leading and Trailing are True
   - Description: Should handle multiple calls and only execute on the trailing edge when both leading and trailing are true.
   - Input: A debounced function with { leading: true, trailing: true }.
   - Expected Output: The function increments a counter immediately and then once more after the delay, totaling two increments.
Constraints:
- The debounce function must handle functions with any number of arguments.
- The wait parameter specifies the delay in milliseconds.
- The options parameter is an object with leading and trailing boolean properties, defaulting to {leading: false, trailing: true}.
- Execution on the leading edge should only occur once per delay period, even if multiple calls are made.
- The function should not execute on the trailing edge if it has already executed on the leading edge within the same delay period.
- The function must ensure accurate this context and arguments for the debounced function.
- Execution must respect the specified delay, considering browser or environment inaccuracies with setTimeout and clearTimeout.
*/