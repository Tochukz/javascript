let maxSafe = Number.MAX_SAFE_INTEGER;
console.log(maxSafe); // 9007199254740991

maxSafe++;
console.log(maxSafe); // 9007199254740992
maxSafe++;
console.log(maxSafe); // 9007199254740992

/** Defining integer of type BigInt */
const bigNum = 9007199254740993n;
console.log(bigNum); // 9007199254740993n

/** Convert  Number to BigInt*/
const maxPlusFive = BigInt(maxSafe) + 5n;
console.log(maxPlusFive); // 9007199254740997n