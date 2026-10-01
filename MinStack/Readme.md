155. Min Stack

Concept: Stack + Auxiliary Stack

stack stores all values.
minStack stores the current minimum values.
During push(), add to minStack only if the value is smaller than or equal to the current minimum.
During pop(), remove from minStack if the popped value is the current minimum.
top() returns the last element of stack.
getMin() returns the last element of minStack.

Time: O(1) for every operation
Space: O(n)