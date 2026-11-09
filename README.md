# Special Access Code Validator

## Problem Description
The program checks whether an integer reads the same from left to right and right to left.

## Function Name
`isSpecialAccessCode(x)`

## Approach
The mathematical approach is used without converting the integer into a string.

1. Reject negative numbers.
2. Store the original number.
3. Extract digits using the modulo operator (`% 10`).
4. Construct the reversed number.
5. Compare the original and reversed numbers.

## Complexity Analysis
- **Time Complexity:** O(n), where n is the number of digits.
- **Space Complexity:** O(1), because only a fixed number of variables are used.

## Technology
- JavaScript
- Node.js
- IntelliJ IDEA

## How to Run
Execute the following command in the terminal:

`node specialAccessCode.js`

## Conclusion
The solution successfully checks palindrome integers within the signed 32-bit range without converting them into strings.