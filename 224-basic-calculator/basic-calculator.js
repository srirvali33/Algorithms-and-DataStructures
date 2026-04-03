/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {

    let stack = []; // Stack to store previous results and signs
    let result = 0; // Final result
    let num = 0; // Current number being processed
    let sign = 1; // Current sign (+1 or -1)

    for (let c of s) {
        if (c.match(/[0-9]/)) { // Check if the character is a digit
            num = num * 10 + parseInt(c, 10); // Build multi-digit numbers
        } 
        else if (c === ' ') {
            continue; // Ignore spaces
        }
        else if (c === '-' || c === '+') {
            result += sign * num; // Add the last number to the result
            sign = (c === '-') ? -1 : 1; // Update the sign
            num = 0; // Reset number
        } 
        else if (c === '(') {
            stack.push(result); // Store the current result
            stack.push(sign); // Store the current sign
            result = 0; // Reset result for new sub-expression
            sign = 1; // Reset sign inside parentheses
        } 
        else if (c === ')') {
            result += sign * num; // Add the last number before closing parenthesis
            result *= stack.pop(); // Apply the stored sign
            result += stack.pop(); // Add the stored result
            num = 0; // Reset number
        }
    }
    result += sign * num; // Add the last number after the loop
    return result;
};