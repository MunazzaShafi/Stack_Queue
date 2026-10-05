1. [Min Stack](https://leetcode.com/problems/min-stack/submissions/2157924952/)

2. [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/submissions/2163249194/)



                         STACK

Stack is a linear data structure that follows LIFO (Last In First Out) Principle, the last element inserted is the first to be popped out. It means both insertion and deletion operations happen at one end only.

LIFO(Last In First Out) Principle
The LIFO principle means that the last element added to a stack is the first one to be removed.
New elements are always pushed on top.
Removal (pop) also happens only from the top.
This ensures a strict order: last in → first out.

Real-world examples of LIFO:
Stack of plates – The last plate placed on top is the first one you pick up.
Stack of books – Books are added and removed from the top, so the last book placed is the first one taken.
                        Terminologies of Stack
Top: The position of the most recently inserted element. Insertions (push) and deletions (pop) are always performed at the top.
Size: Refers to the current number of elements present in the stack.

                            Types of Stack:
1. Fixed Size Stack
A fixed size stack has a predefined capacity.
Once it becomes full, no more elements can be added (this causes overflow).
If the stack is empty and we try to remove an element, it causes underflow.
Typically implemented using a static array.
Example: Declaring a stack of size 10 using an array.

2. Dynamic Size Stack
A dynamic size stack can grow and shrink automatically as needed.
If the stack is full, its capacity expands to allow more elements.
As elements are removed, memory usage can shrink as well.
Can be implemented using:
-> Linked List → grows/shrinks naturally.
-> Dynamic Array (like vector in C++ or ArrayList in Java) → resizes automatically.
Example: Stack implementation using linked list or resizable array.

Note: We generally use dynamic stacks in practice, as they can grow or shrink as needed without overflow issues.

                         Common Operations on Stack:

In order to make manipulations in a stack, there are certain operations provided to us.

push() to insert an element into the stack.
pop() to remove an element from the stack.
top() Returns the top element of the stack.
isEmpty() returns true if stack is empty else false.
size() returns the size of the stack.
Refer to this article to know more about Operations on Stack.

Stack Operations Visualizer

                       Implementation of Stack

Stack can be implemented in Different Ways :-

Implementation of Stack using Array
Implementation of Stack using Linked List
Implementation of Stack using Deque

                         QUEUE

Queue is a linear data structure that follows FIFO (First In First Out) Principle, so the first element inserted is the first to be popped out.

It is an ordered list in which insertions are done at one end which is known as the rear and deletions are done from the other end known as the front.
A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. 
The difference between stack and queue is in removing an element. In a stack we remove the item that is most recently added while in a queue, we remove the item that is least recently added.
FIFO Principle in Queue:

FIFO Principle states that the first element added to the Queue will be the first one to be removed or processed. So, Queue is like a line of people waiting to purchase tickets, where the first person in line is the first person served. (i.e. First Come First Serve).

Dequeue-Operation-in-Queue-1
Basic Terminologies of Queue
Front: Position of the entry in a queue ready to be served, that is, the first entry that will be removed from the queue, is called the front of the queue. It is also referred as the head of the queue.
Rear: Position of the last entry in the queue, that is, the one most recently added, is called the rear of the queue. It is also referred as the tail of the queue.
Size: Size refers to the current number of elements in the queue.
Capacity: Capacity refers to the maximum number of elements the queue can hold.
Types of Queues
Queue data structure can be classified into 3 types:

Types-of-Queue
1. Simple Queue
A simple queue follows the FIFO (First In, First Out) principle.

Insertion is allowed only at the rear (back).
Deletion is allowed only from the front.
Can be implemented using a linked list or a circular array.
When an array is used, we often prefer a circular queue, which is mainly an efficient array implementation of a simple queue. It efficiently utilizes memory by reusing the empty spaces left after deletion, avoiding wastage that occurs in a normal linear array implementation..

2. Double-Ended Queue (Deque)
In a deque, insertion and deletion can be performed from both ends.

3. Priority Queue
A queue where each element is assigned a priority, and deletion always happens based on priority (not just position).

Queue Operations
Enqueue: Adds an element to the end (rear) of the queue. If the queue is full, an overflow error occurs.
Dequeue: Removes the element from the front of the queue. If the queue is empty, an underflow error occurs.
Peek/Front: Returns the element at the front without removing it.
Size: Returns the number of elements in the queue.
isEmpty: Returns true if the queue is empty, otherwise false.
isFull: Returns true if the queue is full, otherwise false.
For detailed steps and more information on each operation, Read Basic Operations for Queue in Data Structure.

Implementation of Queue
Queue can be implemented using following data structures:

Simple Array implementation of Queue
Efficient Array Implementation of Queue
Implementation of Queue using Linked List                         