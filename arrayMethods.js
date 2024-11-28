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
// const flat=nestedArr.reduce((acc,curr)=>acc.concat(curr),[]);

// console.log(flat)
