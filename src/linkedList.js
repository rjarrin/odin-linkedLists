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
}

export default LinkedList;
