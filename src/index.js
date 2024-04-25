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

// Test pop()

// Test contains()

// Test find()

// Test insertAt()

// Test removeAt()

console.log('Reached the end of index.js');
