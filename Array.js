// Initialize an array of strings
const stringsArray = ['a', 'b', 'c', 'd', 'e'];
// Total items: 5

// Access the 3rd item in the array (indexing starts from 0)
const thirdItem = stringsArray[2]; // 'c'

// Push a new item to the end of the array (constant time complexity)
stringsArray.push('f'); 

console.log(stringsArray);
// Output: ['a', 'b', 'c', 'd', 'e', 'f']

// Remove the last item from the array (constant time complexity)
stringsArray.pop(); 

// Add an item to the beginning of the array (linear time complexity)
// because it requires shifting all existing elements to the right to make space for the new element.

stringsArray.unshift('x'); 

// Add an item in the middle of the array
/**
 * Parameters:
 * 1st: Index where you want to add the item.
 * 2nd: Number of items to delete (0 in this case as we're not deleting anything).
 * 3rd: Item to add at the specified index.
 */
stringsArray.splice(2, 0, 'alien');

console.log(stringsArray);
// Output: ['x', 'a', 'alien', 'b', 'c', 'd', 'e']


// Static Vs Dynamic Array

// Static arrays have a fixed length, meaning once their size is defined, it cannot be changed.
// Dynamic arrays can dynamically resize themselves, allocating more memory as needed.

// Static Array Example:
const staticArray = new Array(5); // Creating a static array of length 5
// Attempting to add more elements to a static array beyond its initial length will lead to errors.
// staticArray.push('error'); // This would throw an error

// Dynamic Array Example:
const dynamicArray = ['a', 'b', 'c']; // Creating a dynamic array with initial elements
dynamicArray.push('d'); // Adding an element to the dynamic array
console.log(dynamicArray); // Output: ['a', 'b', 'c', 'd']
