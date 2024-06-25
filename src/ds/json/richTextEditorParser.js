/*
company: Google
Title: Parser for Rich Text Editor
Difficulty: Hard
Description:
Given a string and an array representing styles, the task is to render HTML similar to the output of a rich text editor.
The input consists of a string and a style array. Each element in the style array is another array that contains three items: the start index, the end index, and the HTML tag to be applied. The goal is to apply these styles to the specified ranges within the string and generate the corresponding HTML output.
Example:
- Input: 'Hello, world', [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']]
- Output: '<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u>'
This example demonstrates overlapping style ranges where the <u> tag is applied both within and outside the <b> tag's range, showing the complexity of nesting and ordering HTML tags based on the input style ranges.
The challenge lies in correctly applying the styles, especially when the style ranges overlap, ensuring that the HTML tags are nested and ordered properly according to their positions in the input string.
Test Cases:
1. Render HTML with Non-overlapping Styles
   - Description: Should correctly render HTML with non-overlapping styles.
   - Input: "Hello, world" and styles [[0, 2, "i"], [4, 9, "b"], [7, 10, "u"]].
   - Expected Output: '<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u>'
2. Handle Overlapping Style Ranges Correctly
   - Description: Should handle overlapping style ranges correctly.
   - Input: "Overlap test" and styles [[0, 6, "b"], [3, 9, "u"]].
   - Expected Output: '<b>Ove<u>rlap</u></b><u> tes</u>t'
3. Return Original String When No Styles Provided
   - Description: Should return the original string when no styles are provided.
   - Input: "No styles" and an empty styles array.
   - Expected Output: "No styles"
Constraints:
- Input string length: 0 to 10,000 characters.
- Up to 1,000 style ranges in the style array.
- Style tags include: 'b', 'i', 'u'.
- Style ranges can overlap; proper nesting required.
- Preserve whitespace in the output HTML.
*/