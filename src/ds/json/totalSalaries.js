/*
Title: Calculate Total Salaries in a Nested Company Structure
Description:
You are tasked with implementing a function named calculateTotalSalaries that navigates through a company's hierarchical structure to calculate the cumulative sum of salaries for all employees. The company's structure is depicted as a nested object, where each node can either be a department containing further sub-departments or an array of employees. Each employee is represented by an object containing their name and salary.
The main challenge lies in efficiently traversing this nested structure, which may vary in depth and complexity across different companies, to aggregate all the salary values. This problem tests your ability to work with nested data structures and assesses your recursive thinking and problem-solving skills.
Input: A nested object representing the company's structure, where each department can contain sub-departments or an array of employees with their respective salaries.
Output: A single integer value representing the total sum of salaries of all employees across the entire company.
Example:
javascript
const company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 1600 }
  ],
  development: {
    sites: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 }
    ],
    internals: [
      { name: "Jack", salary: 1300 }
    ]
  }
};

const totalSalaries = calculateTotalSalaries(company);
console.log(totalSalaries); // Output: 7700
In this example, the function calculateTotalSalaries navigates through each department and sub-department, summing up the salaries of "John", "Alice", "Peter", "Alex", and "Jack", resulting in a total of 7700.
*/
function calculateTotalSalaries(data) {
    // Write your code here
  if(Array.isArray(data)) {
    return data.reduce((total, d) => total+ d.salary, 0)
  }
  let totalSalaries = 0;
    for(const subDept of Object.values(data)) {
      totalSalaries += calculateTotalSalaries(subDept)
    }
  
  return totalSalaries
}

// Do not edit below this line
export default calculateTotalSalaries;