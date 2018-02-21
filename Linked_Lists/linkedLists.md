# Linked Lists

Read the first few parts of this first, and listen to our lecture based on it:

* [Conceptual Overview](https://www.geeksforgeeks.org/data-structures/linked-list/)

Okay, quick recap: Linked lists are a type of data structure. They are lists containing nodes. Nodes have to connect to each other to form a line, of sorts - hence, _list_.

But wait, you ask - why would we prefer linked lists to arrays? They seem similar.

Well, sort of. See, arrays are _contiguous_ in memory, whereas linked lists are not. This doesn't mean we can't refer to nodes by their position - more on that later - it just means that they aren't adjacent to each other in memory.

Let's think about what that means. One drawback of being contiguous is that your indexing relies on every index being a very specific point in memory. Problem is, when you add an item to the beginning of an array, you have to shove each element over by one point in memory.

This is _expensive_, and is a problem that linked lists don't have. Because they are separate nodes in memory, each containing a reference to their partners, you can freely add and remove nodes cheaply. You just add references from that node's former partners to each other.

Let's break that down. You have a 3-node list, and you remove item 2. Item 2 is connected to both 1 and 3. In order to remove item 2, you have to add a connection between 1 and 3. Or, visually:

1=2=3

1 = ↓2↓ = 3

1=3

However, there are drawbacks to linked lists. Access time by index is longer than for an array. While arrays' defined space in memory allows easy (_O(1)_) access to each element, linked lists don't have this luxury. In order to access a node at its index, linked lists have to start at the beginning and work their way to the correct node.

One last note: Singly-linked and doubly-linked lists are quite similar, with one exception. Whereas nodes in doubly-linked lists contain references to both of their adjacent nodes, nodes in singly-linked lists only contain references to their "next" node in line. Or, visually:

1 => 2 => 3
(singly-linked)

versus

1 <=> 2 <=> 3
(doubly-linked)

Got all that? Okay, now:

* Implement a singly-linked list using ES6 class notation.
  * Implement the following classes: Node, SinglyLinkedList.
  * Implement the following functions on the SinglyLinkedList class: `add(value)`, `searchNodeAt(position)`, `remove(postion)`, `length()`.
  * **Bonus**: Implement the search function recursively.

Give it a try yourself! If you need help, or if you'd like to refer to an example after you've finished, take a look at this:

* [Practical Implementation](https://code.tutsplus.com/articles/data-structures-with-javascript-singly-linked-list-and-doubly-linked-list--cms-23392)

## Runtime Complexity

* Accessing an element in a linked list: O(n)
* Removing an element from a linked list: O(n) to find + O(1) to remove
* Removing an element from an array (if we don't know the index): O(n) to find + O(n) to remove

## More Exercises (CodeWars)

* [Linked Lists - Push & BuildOneTwoThree](http://www.codewars.com/kata/linked-lists-push-and-buildonetwothree)
* [Convert a linked list to a string](https://www.codewars.com/kata/convert-a-linked-list-to-a-string)
* [Linked List - Get Nth Node](https://www.codewars.com/kata/linked-lists-get-nth-node)
* [Find the K-th last element of a singly linked list](https://www.codewars.com/kata/find-the-k-th-last-element-of-a-singly-linked-list)
* [Linked Lists - Append](https://www.codewars.com/kata/linked-lists-append)

## Even More (Harder) Exercises (CodeWars)

* [Singly Linked List - Swap Nodes](https://www.codewars.com/kata/singly-linked-list-swap-nodes)
* [Doubly Linked List](https://www.codewars.com/kata/doubly-linked-list-1)
