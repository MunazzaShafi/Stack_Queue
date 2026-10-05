20. Valid Parentheses

Used a Stack (LIFO) to match opening and closing brackets.

Opening brackets (, {, [ are pushed into the stack.
For a closing bracket, stack.pop() removes and returns the most recent opening bracket.
A map is used to check which opening bracket should match each closing bracket.
If the brackets do not match, return false.
At the end, the stack must be empty for the string to be valid.
Complexity
Time: O(n)
Space: O(n)
Key Concept

stack.pop() → removes the top element and returns its value, allowing us to compare it with the expected opening bracket.