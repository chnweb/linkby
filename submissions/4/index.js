function getFibonacci(n) {
    if (n <= 2) return n - 1;
    return getFibonacci(n - 1) + getFibonacci(n - 2);
}

console.log(getFibonacci(5));
console.log(getFibonacci(6));
console.log(getFibonacci(7));
console.log(getFibonacci(8));
console.log(getFibonacci(9));
console.log(getFibonacci(10));