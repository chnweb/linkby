function add(x, y) {
    return x && y ? x + y : z => x + z;
}

console.log(add(4,6));
console.log(add(4)(6));