# Unexpected Null Handling in Addition Function

This repository demonstrates a subtle bug related to null handling in a simple JavaScript addition function. The function `foo` is intended to add two numbers, but its behavior with null values is unexpected and can lead to issues in larger applications. 

The bug is present in the original `bug.js` file.  The corrected version, which incorporates improved null handling, is located in `bugSolution.js`.  The improved function provides better error handling and more predictable behavior.

## How to reproduce
1. Clone this repository.
2. Run the following command in your terminal:
`node bug.js`
3. Observe the unexpected output from the function when null is passed as input. 
4. Then run `node bugSolution.js` to see the improved behavior.