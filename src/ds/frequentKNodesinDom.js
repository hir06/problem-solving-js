/*
Company: Google
Title: K Most Text Nodes
Difficulty: Easy
Description:
Given a DOM tree representing a webpage and a limit (K), write a function to find the K most frequently appeared text nodes in the webpage. A text node is considered as a string of non-empty characters that are not equal to '↵'. Ignore other node types (e.g., element nodes) while counting the frequency. Return an array containing the K most frequent text nodes in descending order of their frequencies.
Example:
Consider the following webpage HTML:
html
<div id="root">
  <p>This is a paragraph.</p>
  <div>
    <span>This is some text.</span>
    <p>Another paragraph here.</p>
  </div>
  <p>This is another paragraph.</p>
</div>
- Input:
  - tree = DOM tree of the webpage
  - limit = 3
The function findKFrequentWordsInTree(tree, limit) should analyze the text nodes within the given DOM tree and return the K (3 in this example) most frequently occurring text nodes. The expected output for this example, assuming the function correctly identifies and counts the frequency of text nodes, might be an array like ['This', 'is', 'a'], reflecting the most common text nodes within the specified limit.
This task tests your ability to traverse and process DOM trees, count frequency of specific nodes, and return a sorted list of these nodes based on their frequency, which are essential skills for manipulating web page content dynamically.
Test Cases:
1. Correctly Identify the Most Frequent Text Nodes
   - Description: Should correctly identify the most frequent text nodes.
   - Setup: A mock DOM tree is provided.
   - Action: Call findKFrequentWordsInTree(tree, limit).
   - Expected Outcome: The function returns an array of the most frequent text nodes, such as ['This', 'is', 'paragraph.'].
2. Return an Empty Array if Limit is 0
   - Description: Should return an empty array if limit is 0.
   - Setup: A mock DOM tree is provided.
   - Action: Call findKFrequentWordsInTree(tree, 0).
   - Expected Outcome: The function returns an empty array.
3. Handle Cases Where Text Nodes Are Fewer Than Limit
   - Description: Should handle cases where text nodes are fewer than limit.
   - Setup: A mock DOM tree is provided with fewer unique text nodes than the limit.
   - Action: Call findKFrequentWordsInTree(tree, limit) with a high limit.
   - Expected Outcome: The function returns an array containing all unique text nodes, which is fewer than the limit.
Constraints:
- The DOM tree's depth will not exceed 20 levels to prevent excessive recursion or iteration depth, safeguarding against stack overflow or significant performance degradation.
- Text nodes can include any characters except '↵' and will be trimmed to remove whitespace at the beginning and end. This ensures that only meaningful text is considered.
- The input array can contain a vast number of elements, but for practical performance reasons, it's advised to keep the total number of text nodes below 10,000.
- The function will accept two arguments: a DOM tree element (tree) and an integer (limit) representing the number of most frequent text nodes to return.
- The solution should aim for a time complexity of O(n log n) due to the sorting requirement, where n is the total number of text nodes in the DOM tree.
- The use of external libraries for DOM manipulation or array sorting is not allowed, encouraging a fundamental understanding of these operations.
*/
function findKFrequentWordsInTree(root, limit) {
    // Helper function to traverse the DOM and collect text
    function collectTextNodes(node, texts) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== '' && node.textContent.trim() !== '↵') {
        texts.push(...node.textContent.trim().split(/\s+/));
      }
      if (node.childNodes) {
        node.childNodes.forEach(child => collectTextNodes(child, texts));
      }
    }
  
    // Helper function to count word frequencies
    function countWordFrequencies(words) {
      return words.reduce((acc, word) => {
        const cleanedWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
        acc[cleanedWord] = (acc[cleanedWord] || 0) + 1;
        return acc;
      }, {});
    }
  
    // Helper function to get top K frequent words
    function getTopKFrequentWords(frequencies, limit) {
      return Object.entries(frequencies)
        .sort((a, b) => b[1] - a[1])
        .slice(0, limit)
        .map(([word,]) => word);
    }
  
    const texts = [];
    collectTextNodes(root, texts);
    const frequencies = countWordFrequencies(texts);
    return getTopKFrequentWords(frequencies, limit);
  }
  
  // Example usage:
  // Assuming `document.body` is the root of your DOM tree and you want the top 3 most frequent words.
  // Note: This code needs to run in a browser environment where `document.body` is available.
  const result = findKFrequentWordsInTree(document.body, 3);
  console.log(result);