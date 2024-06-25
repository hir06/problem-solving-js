/*
Title: Gym Sessions
Difficulty: Medium
Description:
You are tasked with developing a function capable of selecting and filtering gym session data based on specific options. Each session is detailed within an array of objects, highlighting the user, duration of the exercise, and the equipment utilized. A crucial feature of this function is its ability to consolidate sessions by the same user, thereby amalgamating their total exercise duration and equipment used.
Input:
- sessions: An array of session objects, each containing user, duration, and equipment properties.
- options: An object hosting filtering and merging preferences.
Output:
An array of session objects tailored according to the specified options, inclusive of user-merged data if indicated.
Example:
javascript
const input = [
  { user: 'User1', duration: 30, equipment: ['treadmill'] },
  { user: 'User2', duration: 45, equipment: ['bike', 'dumbbell'] },
  // additional session objects
];
const options = { merge: true, equipment: ['bike'] };
const selectedSessions = selectData(input, options);
console.log(selectedSessions);
// Output might resemble:
// [
//   { user: 'User2', duration: 45, equipment: ['bike', 'dumbbell'] }
// ]
This function demands adeptness in data filtering based on criteria and challenges you to thoughtfully combine data from multiple entries pertaining to the same individual, ensuring a seamless and informative summary of gym sessions.
Test Cases:
1. Merge Sessions for the Same User
   - Description: Should merge sessions for the same user when merge option is true.
   - Input: sessions array with multiple entries for User1 and options with merge: true.
   - Expected Output: Array with merged session data for User1.
2. Filter Sessions Based on Equipment
   - Description: Should filter sessions based on equipment.
   - Input: sessions array and options with equipment: ['bike'].
   - Expected Output: Array containing only sessions that used a bike.
3. Handle Empty Sessions Array
   - Description: Should handle empty sessions array.
   - Input: An empty sessions array and any options.
   - Expected Output: []
Constraints:
- Each session object includes user, duration, and equipment properties.
- The user property is a unique identifier for the user.
- The duration property is a number representing the session length in minutes.
- The equipment property is an array of strings, each representing a piece of equipment used.
- If merge is true, sessions for the same user should have their durations added together, and their equipment lists merged.
- The function should return a new array of session objects based on the provided options, without modifying the original sessions array.
- Aim for efficiency in processing large arrays of session data.
*/