# JavaScript Type Error: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error and its solution.  The `bug.js` file contains code that throws a `TypeError` if the input `x` is `null` or does not have a `length` property. The `bugSolution.js` file provides a corrected version with proper type checking.

## How to reproduce the bug

1. Clone this repository.
2. Run `node bug.js` with null or undefined as argument
3. Observe the `TypeError`. 

## Solution

The solution involves adding a check to ensure that the input is not null before accessing its length property.