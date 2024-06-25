/*
company: Google
Title: Hierarchical Checkbox
Difficulty: Hard
Description:
Implement a JavaScript solution to manage checkboxes in a hierarchical structure, ensuring the following functionality:
- When a parent checkbox is checked, all its child checkboxes should also be checked.
- When a parent checkbox is unchecked, all its child checkboxes should be unchecked.
- If some, but not all, child checkboxes are checked, the parent checkbox should be in an indeterminate state.
This problem presents a common scenario in user interfaces where options are nested within categories and subcategories, requiring a coherent and intuitive interaction pattern. The hierarchical structure of checkboxes can represent various real-world scenarios such as selecting features in a product, permissions in a software application, or categories in a content management system.
For example, consider the following HTML structure:
html
<h1>Indeterminate Checkboxes</h1>
<ul>
    <li>
        <input type="checkbox" name="tall" id="tall">
        <label for="tall">Tall Things</label>
        <ul>
            <li>
                <input type="checkbox" name="tall-1" id="tall-1">
                <label for="tall-1">Buildings</label>
            </li>
            <li>
                <input type="checkbox" name="tall-2" id="tall-2">
                <label for="tall-2">Giants</label>
                <ul>
                    <li>
                        <input type="checkbox" name="tall-2-1" id="tall-2-1">
                        <label for="tall-2-1">Andre</label>
                    </li>
                    <li>
                        <input type="checkbox" name="tall-2-2" id="tall-2-2">
                        <label for="tall-2-2">Paul Bunyan</label>
                    </li>
                </ul>
            </li>
            ...
        </ul>
    </li>
    ...
</ul>
In this structure, selecting "Tall Things" should automatically select "Buildings," "Giants," and all nested options under "Giants." Conversely, deselecting any child option should update the parent's state to reflect that not all children are selected, thus showing the parent in an indeterminate state.
This challenge requires a thoughtful approach to event handling and DOM traversal, ensuring that the state of each checkbox is accurately reflected throughout the hierarchy. As you work through this problem, consider the implications of each interaction, aiming for a solution that is both efficient and intuitive for the user.
Test Cases:
1. Uncheck All Child Checkboxes When a Parent is Unchecked
   - Description: Should uncheck all child checkboxes when a parent is unchecked.
   - Setup: A hierarchy of checkboxes is created with a parent and multiple children.
   - Action: The parent checkbox is unchecked.
   - Expected Outcome: All child checkboxes are also unchecked.
Constraints:
- The HTML structure will consist of nested unordered lists (<ul>) with list items (<li>) containing checkboxes (<input type="checkbox">). Each list item can contain another unordered list to represent a hierarchy.
- The depth of the nested lists will not exceed 5 levels to ensure manageability and performance. Each checkbox might be associated with a label for better usability.
- The JavaScript solution must be compatible with modern browsers (latest versions of Chrome, Firefox, Safari, and Edge).
- The solution should handle dynamically added checkboxes and hierarchies without the need for additional initialization.
- Performance: The solution should minimize DOM manipulations and event listeners to ensure responsiveness, especially for large structures.
- The solution must not use any external libraries or frameworks; it should be implemented in vanilla JavaScript.
*/