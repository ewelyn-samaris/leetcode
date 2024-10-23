
/*Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

    Whitespace: Ignore any leading whitespace (" ").
    Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity is neither present.
    Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
    Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.

Return the integer as the final result.
*/

function myAtoi(s) {
    const str = s.trim();
    const i = 0;
    const signal = str[i] === '-' ? -1 : 1;
    let result = '';

    while(i < str.length && /\d/.test(str[i])) {
        result += str[i];
        ++i;
    }
    
    const resultNumber = parseInt(result) * signal;
    
    const MAX = Math.pow(2,31)-1;
    const MIN = Math.pow(-2,31);
    
    if(isNaN(resultNumber)) return 0;
    if(resultNumber > MAX) return MAX;
    if(resultNumber < MIN) return MIN;
    return resultNumber;
};