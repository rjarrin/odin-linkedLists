import Node from './node.js';

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Adds a new node containing 'value' to the end of the list
    append(value) {
        const newNode = new Node(value);
        // If this is the first node (i.e., head doesn't exist yet), insert to the head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // Otherwise, insert the new node in the list as the tail
        else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        // Increment list size
        this.size += 1;
    }

    // Adds a new node containing 'value' to the start of the list
    prepend(value) {
        const newNode = new Node(value);
        // If this is the first node (i.e., head doesn't exist yet), insert to the head and tail
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        // Otherwise, insert the new node in the list as the head
        else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        // Increment the list size
        this.size += 1;
    }

    // Convert list elements to string for viewing/testing
    toString() {
        let currentNode = this.head;
        let result = '';
        // Iteratte through the list
        while (currentNode) {
            result += `${currentNode.value} -> `;
            currentNode = currentNode.nextNode;
        }
        return `${result}null`;
    }

    // Returns the total number of nodes in the list
    getSize() {
        return this.size;
    }

    // Returns the first node in the list
    getHead() {
        return this.head;
    }

    // Returns the last node in the list
    getTail() {
        return this.tail;
    }

    // Returns the node at the given 'index'
    at(index) {
        // Return null for invalid indices or empty lists
        if (index < 0 || index >= this.size) return 'null';
        let currentNode = this.head;
        // Iterate through list until index is reached
        for (let i = 0; i < index; i += 1) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    // Removes the last element from the list
    pop() {
        // If the list is empty, return null
        if (!this.head) return;
        // Case: Only one element in the list
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let currentNode = this.head;
            // Iterate to second last element
            while (currentNode.nextNode !== this.tail) {
                currentNode = currentNode.nextNode;
            }
            // Set the tail to the current node
            this.tail = currentNode;
            this.tail.nextNode = null;
        }
        // Decrement the size
        this.size -= 1;
    }

    // Returns true if the passed in value is in the list, else returns false
    contains(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) return true;
            currentNode = currentNode.nextNode;
        }
        return false;
    }

    // Returns the index of the node containing the value, or null if not found
    find(value) {
        let currentNode = this.head;
        let index = 0;
        while (currentNode) {
            if (currentNode.value === value) return index;
            currentNode = currentNode.nextNode;
            index += 1;
        }
        return null;
    }
}

export default LinkedList;
