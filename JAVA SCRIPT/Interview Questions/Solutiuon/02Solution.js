// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

function doubleTrouble(arr) {
  if (!arr || arr.length === 0) return [];

  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    // If current element is same as the previous one → don't double
    if (i > 0 && arr[i] === arr[i - 1]) {
      result.push(arr[i]);
    } else {
      // Otherwise, double it
      result.push(arr[i] * 2);
    }
  }

  return result;
}

console.log(doubleTrouble([2, 2, 3, 4, 4, 4, 5])); // [4, 2, 6, 8, 4, 4, 10]
console.log(doubleTrouble([1, 2, 2, 3]));          // [2, 4, 2, 6]
console.log(doubleTrouble([5, 5, 5, 5]));          // [10, 5, 5, 5]
console.log(doubleTrouble([7]));                   // [14]
console.log(doubleTrouble([]));                    // []
