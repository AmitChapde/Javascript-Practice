//map
//Purpose: Creates a new array by applying a given function to each element of the original array.

// Signature: array.map(callback(currentValue, index, array))
// Key points:
// It doesn't mutate the original array.
// Returns a new array with the results.
// The callback function is called for each element of the array, and it receives the element, the index, and the array itself as arguments.

// let arr=[1,2,3,4,5];

// let k=arr.map((num,index)=>`${index}:${num}`)
// console.log(k)


// reduce
// Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
// Signature: array.filter(callback(currentValue, index, array))
// Key points:
// It returns a new array containing only the elements that satisfy the condition specified in the callback.
// If no elements match the condition, an empty array is returned.
// The original array is not modified

// let arr=[1,2,3];

// let m=arr.filter((num)=>num>2);
// console.log(m)

//suppose the condition evaluates to falsy then the orignal array is returned 

// reduce()
// Purpose: Executes a reducer function (on each element of the array) to reduce the array to a single value (accumulator).
// Signature: array.reduce(callback(accumulator, currentValue, index, array), initialValue)
// Key points:
// The callback is invoked for every element in the array, accumulating the result.
// It can be used to perform calculations (like summing values, multiplying numbers, or concatenating strings).
// You can specify an initialValue for the accumulator, or it will default to the first element of the array.

// let z=new Array(1,2,3)
// let p=z.reduce((acc,num)=>acc+num,20)

// console.log(p)

// How would you use map() and reduce() to flatten a nested array of arrays?

// const nestedArr = [[1, 2], [3, 4], [5, 6]];

// const k=nestedArr.reduce((acc,curr)=>acc.concat(curr),[])
//  console.log(k)


// Slice method

//DOESNT CHANGE THE ARRAY (IMMUTABLE)
//empty arguments to slice methods lets you clone the array
// let u=arr.slice();
//starting index is inclusive and ending index is exclusive
// let u=arr.slice(start,end);
//if slice methods second argument is ommitted then it slices till the end of the array 

//Indexes are considered while using slice method 
    // let u=arr.slice(1,4);
    // console.log(u);
//can alsobe used with negative indexes
    // let i=arr.slice(-4);
    // console.log(i)


//splice method 

// Purpose: Modifies the array by removing, adding, or replacing elements.
// Original Array: Changes the original array (mutable)
// arr.splice(start, deleteCount, ...itemsToAdd); 
// start: Index at which to start changes.
// deleteCount: Number of elements to remove (optional).
// ...itemsToAdd: Elements to insert (optional).

// Can be used to add, remove, or replace elements in an array.
// const arr=[1,2,3,4,5];
// arr.splice(2,2,11,23);
// console.log(arr);

// // Returns an array of removed elements.
// let k=arr.splice(1,2,11,12,13);
// console.log(k);

let arr=[1,2,3,4]
//shift 
//Removes the first element of an array.
// let k=arr.shift();
// console.log(k)


//unshift 
//Adds one or more elements to the beginning of an array.
// let k=arr.unshift(11);
// console.log(arr)
// console.log(k);//returns len of new arr

//flat
//To flatten a given array
const nestedArr = [[1, 2], [3, 4], [5, 6]];

let u=nestedArr.flat();
console.log(u)

//Revise before interview 
// /. Traversing and Transforming
// forEach
// map
// 2. Searching
// find
// findIndex
// includes
// indexOf
// lastIndexOf
// 3. Filtering
// filter
// 4. Reducing
// reduce
// reduceRight
// 5. Adding, Removing, and Modifying
// push
// pop
// shift
// unshift
// splice
// slice
// 6. Sorting and Reversing
// sort
// reverse
// 7. Joining and Splitting
// join
// concat
// 8. Flattening and Mapping
// flat
// flatMap
// 9. Testing
// some
// every
