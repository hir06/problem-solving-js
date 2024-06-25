/*
Title: Filtering Matching JSON
Difficulty: Medium
Description:
You are tasked with developing a function named findMatches that filters a dataset represented as an array of objects, where each object contains attributes of a person, such as name, company, position, and level. Additionally, you are given a match object that specifies criteria to identify matches based on specific attributes. The goal is to return an array containing only the objects that meet all the criteria outlined in the match object.
This challenge tests your ability to manipulate complex data structures and implement effective filtering algorithms, which are essential skills in data handling and software development. It involves traversing arrays, understanding object properties, and applying logical operations to achieve the desired outcome.
Example:
- Input:
  - data:
    
json
    [
      { "name": "John", "company": "Google", "position": "Software Engineer", "level": "Entry" },
      { "name": "Ann", "company": "Waymo", "position": "Product Manager", "level": "Entry" }
    ]
    
  - match: { "position": "Product Manager", "level": "Entry" }
- Output:
  
json
  [
    { "name": "Ann", "company": "Waymo", "position": "Product Manager", "level": "Entry" }
  ]
  
Test Cases:
1. Filter Objects Matching the Criteria
   - Description: Should correctly filter objects matching the criteria.
   - Input: data array with objects and a match object as described above.
   - Expected Output: Array containing objects that match the criteria.
2. Empty Array for No Match
   - Description: Should return an empty array when no objects match the criteria.
   - Input: data array with objects that do not match the match object criteria.
   - Expected Output: []
3. Handling Mixed Data Types in Attributes
   - Description: Should handle mixed data types in attributes.
   - Input: data array with objects having mixed data types for attributes and a match object.
   - Expected Output: Array containing objects that match the criteria, considering the data types.
Constraints:
- Nested objects or arrays within person objects are not considered for matching criteria.
- Attributes in the match object are limited to strings and numbers.
- The data array can contain up to 1000 person objects.
- Each person object can have up to 10 attributes.
- The match object can specify up to 5 attributes for matching criteria.
- The function must handle cases where the match object has attributes not present in the person objects, returning no matches in such scenarios.
- Performance is a consideration: the solution should aim to minimize the time complexity, ideally achieving linear time complexity relative to the size of the data array.
*/