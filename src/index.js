/* eslint-disable no-console */
import LinkedList from './linkedList.js';

// Test: Create a new LinkedList instance
const myList = new LinkedList();

// Test append()
console.log('Appending values (1), (2), and (3)...');
myList.append(1);
myList.append(2);
myList.append(3);
console.log(`${myList.toString()} \n`); // Should print: (1) -> (2) -> (3) -> null

// Test prepend()
console.log('Prepending value (0)...');
myList.prepend(0);
console.log(`${myList.toString()} \n`); // Should print: (0) -> (1) -> (2) -> (3) -> null

// Test getSize()
console.log(`Size of the list: ${myList.getSize()}\n`); // Should print: 4

// Test getHead()
console.log(`Head of the list: ${myList.getHead().value}\n`); // Should print: 0

// Test getTail()
console.log(`Tail of the list: ${myList.getTail().value}\n`); // Should print: 3

// Test at()
console.log(`Node at index 2: ${myList.at(2).value}`); // Should print: 2
console.log(`Node at index 10: ${myList.at(10).value}`); // Should be undefined
console.log(`Node at index -1: ${myList.at(-1).value}\n`); // Should be undefined

// Test pop()
console.log('Popping the last element...');
myList.pop();
console.log(`${myList.toString()}\n`); // Should print (0) -> (1) -> (2) -> null

// Test contains()

// Test find()

// Test insertAt()

// Test removeAt()

console.log('Reached the end of index.js');
