let name;
console.log(name ?? 'John'); // John

let city = null;
console.log(city ?? 'Cape Town'); // Cape Town

let number = NaN;
console.log(number ?? 4); // NaN
console.log(number || 4); // 4

let x = 0;
console.log(x ?? 5); // 0
console.log(x || 5); // 5

let ans  = false;
console.log(ans ?? 'yes'); // false
console.log(ans || 'yes'); // yes

let role = '';
console.log(role ?? 'Dev'); // 
console.log(role || 'Dev'); // Dev
/* 
 * Logical OR operator (|| ) will always return the right operand if the left operand is 
 *  a falsey value ie. undefined, null, "", 0, false and NaN.
 * Null Coalesce operator will return the righ operand only if the left operand is either undefined or null.
 */