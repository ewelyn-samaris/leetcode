/** Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
   Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 */

// Modo 1: Faster than 97.76% of TypeScript online submissions 
function reverse1(x) {
    const strNumber = x.toString();
    const signed = isNaN(parseInt(strNumber[0]));
    
    let copy = signed ? strNumber.slice(1) : strNumber;
    let result = signed ? '-' : '';
    
    for(let i=copy.length-1; i>=0; --i){
        result += copy[i];
    }
    const reversed = parseInt(result);
    
    const MIN = Math.pow(-2,31);
    const MAX = Math.pow(2,31)-1;
    
    if(reversed > MAX || reversed < MIN) return 0;
    return reversed;    
};

// Modo 2: Faster than 23.33% of TypeScript online submissions 
function reverse2(x) {
    const strNumber = x.toString();
    const signed = isNaN(parseInt(strNumber[0]));
    
    let copy = signed ? strNumber.slice(1) : strNumber;
    let result = signed ? '-' : '';
    
    const reversed = parseInt(result+copy.split('').reverse().join(''));
    
    const MIN = Math.pow(-2,31);
    const MAX = Math.pow(2,31)-1;
    
    if(reversed > MAX || reversed < MIN) return 0;
    return reversed;    
};

console.log(reverse1(321));
console.log(reverse2(-321));