function foo(x) {
  if (x === null || x === undefined || typeof x.length !== 'number') {
    return 0; // Handle null, undefined, and non-string/array cases
  }
  return x.length; 
}
//test cases
console.log(foo(null)); // Output: 0
console.log(foo(undefined)); //Output: 0
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo("hello")); // Output: 5
console.log(foo({})); //Output: 0