function foo(a, b) {
  if (a === null || b === null) {
    console.error('Error: Null values are not allowed.'); //More informative error handling
    return NaN; //Using NaN for better error representation 
  }
  return a + b; 
}

console.log(foo(null, 1)); // Output: Error: Null values are not allowed. NaN
console.log(foo(1, null)); // Output: Error: Null values are not allowed. NaN
console.log(foo(null, null)); // Output: Error: Null values are not allowed. NaN
console.log(foo(1, 2)); // Output: 3