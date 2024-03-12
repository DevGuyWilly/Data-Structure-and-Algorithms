function factorial(n) {
  var sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
console.log(factorial(6));

// Big-O = O(n)
