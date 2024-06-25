/*
Company: google
Title: Flatten VII
Difficulty: Hard
Description:
Write a function named flatten that is capable of taking an input which may be an arbitrarily nested object or array, and return a flattened version of it. In the flattened output, all elements from nested arrays should be in a single-level array, and all nested object properties should be brought to the top level of a single object.
The challenge involves creating a versatile function that can handle various types of nested structures, including combinations of arrays and objects, without losing any data in the process. The function should be able to distinguish between objects and arrays and treat them accordingly, ensuring that arrays are merged into a single array and object properties are collated into a single object.
Consider the following examples to understand the expected behavior of the function:
- Given an array like [1, [2, 3], [[4, 5], 6]], the function should produce [1, 2, 3, 4, 5, 6].
- For an object such as { a: 1, b: { c: 2, d: { e: 3 } } }, the expected output is { a: 1, c: 2, e: 3 }.
- When the input is a mix of arrays and objects like [1, { a: 2, b: [3, 4] }, [5, { c: 6 }]], the function should return [1, 2, 3, 4, 5, 6].
- For deeply nested arrays such as [[[[[[[[[[1]]]]]]]]]], the output should simply be [1].
- When the input is null, the function should return null.
Your task is to implement the flatten function in such a way that it fulfills the above requirements, providing a simple and efficient solution to the problem of dealing with complex, nested data structures. This is a common challenge that developers face, making it a valuable exercise for enhancing your problem-solving skills and understanding of data manipulation.
Test Cases:
1. Flatten Nested Arrays Correctly
   - Description: Should flatten nested arrays correctly.
   - Input: [1, [2, 3], [[4, 5], 6]]
   - Expected Output: [1, 2, 3, 4, 5, 6]
2. Flatten Nested Objects Correctly
   - Description: Should flatten nested objects correctly.
   - Input: { a: 1, b: { c: 2, d: { e: 3 } } }
   - Expected Output: { a: 1, c: 2, e: 3 }
3. Handle Mixed Nested Arrays and Objects
   - Description: Should handle mixed nested arrays and objects.
   - Input: [1, { a: 2, b: [3, 4] }, [5, { c: 6 }]]
   - Expected Output: [1, 2, 3, 4, 5, 6]
Constraints:
- The input can be any arbitrarily nested object or array, or even a combination of both.
- The function should gracefully handle null inputs by returning null.
- The input object may contain various data types, including integers, strings, and other objects or arrays.
- The function should not modify the original input object or array.
- There is no limit to the depth of nesting in the input object or array, but the function should be able to handle at least 10 levels of nesting efficiently.
- The function must return a new object or array, depending on the input type, without any nested structures.
- The solution should aim for a time complexity of no worse than O(n), where n is the total number of elements or properties in the input, including nested ones.
*/