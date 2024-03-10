function PowerOfTwo(n) {
    for (let i = 0; i < n; i++) {
        if (n === Math.pow(2, i)) {
            return true
        } else {
            return false;
        }
    }
}

console.log(PowerOfTwo(1));
console.log(PowerOfTwo(2));
console.log(PowerOfTwo(5));
console.log(PowerOfTwo(5));
