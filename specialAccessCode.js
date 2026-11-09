
function isSpecialAccessCode(x) {

    // Step 1: Reject negative numbers
    if (x < 0) {
        return false;
    }

    // Step 2: Store the original number
    let original = x;

    // Step 3: Create a variable for the reversed number
    let reversed = 0;

    // Step 4: Reverse the digits
    while (x > 0) {

        // Get the last digit
        let digit = x % 10;

        // Build the reversed number
        reversed = reversed * 10 + digit;

        // Remove the last digit
        x = Math.floor(x / 10);
    }

    // Step 5: Compare both numbers
    return original === reversed;
}
// Test cases
const testCases = [
    121,
    123,
    1221,
    -121,
    0,
    12321,
    10,
    2147447412,
    2147483647,
    -2147483648
];

for (let number of testCases) {
    console.log(
        `Number: ${number} | Result: ${isSpecialAccessCode(number)}`
    );
}

