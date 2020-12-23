/** Function statement */
console.assert(sum(5, 7) === 12);

function sum(n1, n2) {
    return n1 + n2;
}

console.assert(typeof sum === 'function');
console.assert(sum.name === 'sum');
console.assert(sum.length === 2); // number of arguments

/** Function expression */
// console.assert(product(3, 5) === 15); // ReferenceError: Cannot access 'product' before initialization

const product = function(x, y) {
    return x * y;
};
console.assert(typeof product === 'function');
console.assert(product.name === 'product');
console.assert(product.length === 2);

/**
 * The difference between function statement and expression is that function statements are loaded before any code is executed. 
 * Consequently, you can invoke a function before defining it, if it is defined as a function statement later on.
 * 
 * On the other hand, function expression are subject to hoisting rules. Therefor using the variable before 
 * it is assigned to a function expression will result in an error
 */