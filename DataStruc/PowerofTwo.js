function PowerOfTwo(n) {
    if (n < 1) {
        return false
    }
    while (n > 1) {
        if (n%2 !== 0) {
            return false;
        }
        // console.log(n);
        n = n / 2
    }
    return true;
}
// Big O =

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false
    }
    return (n & (n-1)) === 0 
}
// Big O = 0(1)


// Rule for Powers of Two:

// Powers of two have a special property in binary (base-2) representation: they have only one "1" bit, and the rest are "0"s.
// For example, the binary representation of 8 (2^3) is 1000, and the binary representation of 16 (2^4) is 10000.
// Using Bitwise AND ( & ) Operation:

// We can use a bitwise trick to check if a number has only one "1" bit.
// If you subtract 1 from a power of two, you get a number with all the bits set to "1" up to the original "1" bit.
// For example, 8 - 1 = 7, and its binary representation is 111.
// The Magic Check:

// Now, if you perform a bitwise AND operation between the original number and (original number - 1), the result is always 0 for a power of two.
// For example, 8 & 7 = 0.
// Putting it in a Simple Function:

// The function checks if the given number is positive and then performs the bitwise AND operation.
// If the result is 0, it means the number is a power of two..

console.log(PowerOfTwo(1));
console.log(PowerOfTwo(2));
console.log(PowerOfTwo(5));
console.log(PowerOfTwo(8));
