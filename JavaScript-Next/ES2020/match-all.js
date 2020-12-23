const regex = /[b-d]/g;
const str = "abcdefg";
const iterator = str.matchAll(regex);
console.log(iterator); // Object [RegExp String Iterator] {}
console.log(Array.isArray(iterator)); // false
Array.from(iterator, result => {
  console.log(Array.isArray(result)); // true
  console.log(result); // example: [ 'b', index: 1, input: 'abcdefg', groups: undefined ]
});