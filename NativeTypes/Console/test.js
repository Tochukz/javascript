/** Performance check with console object */
console.time("cummulativeSum");
let total = 0;
for (let i = 0; i < 100000; i++) {
    total += i;
}
console.info("Total: ", total);
console.timeEnd("cummulativeSum");