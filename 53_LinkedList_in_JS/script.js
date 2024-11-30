class Node { // Define a class 'Node' to represent a single node in a linked list
    constructor(data) { // The constructor takes 'data' as input when a new Node is created
        this.data = data; // Assign the 'data' passed to the 'data' property of the Node
        this.next = null; // Initially, the 'next' property is set to null (meaning no next node)
    }
}

class LinkedList { // Define a class 'LinkedList' to represent the linked list itself
    constructor(head = null) { // The constructor takes 'head' as input, defaulting to null if no head node is provided
        this.head = head; // Assign the 'head' (the first node) to the 'head' property of the linked list
    }
}

let node1 = new Node(1); // Create a new node with data 1, now 'node1' holds this node
let node2 = new Node(2); // Create another new node with data 2, now 'node2' holds this node

console.log(node1); // Print the details of 'node1' (will show data: 1 and next: null)
console.log(node2); // Print the details of 'node2' (will show data: 2 and next: null)

node1.next = node2; // Link 'node1' to 'node2', making 'node2' the next node of 'node1'

const linkedList = new LinkedList(node1); // Create a new linked list with 'node1' as the head (start of the list)

console.log(linkedList); // Print the entire linked list, starting from 'node1' and showing the link to 'node2'

// Summary of the code:

// A Node class represents a single node in a linked list, with two properties: data (the value of the node) and next (a pointer to the next node).

// A LinkedList class represents the linked list itself. It has one property, head, which is a reference to the first node in the list.

// Two nodes are created, node1 and node2, and they are linked by setting node1.next = node2, creating a small linked list.

// The linked list starts with node1 as the head node, and when printed, it shows the connection between the two nodes.
