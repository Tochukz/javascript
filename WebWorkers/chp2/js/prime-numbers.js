
findHighestPrime(Infinity);
//findHighestPrime(100000);

/*
 * Search for all prime numbers
 */
function findHighestPrime(max) {
    let n = 1;
    search: while(n < max) {
        n++;
        for(let i = 2; i <= n ; i++) {
            if (n !== i && n % i === 0) {
              continue search;
            }
        }
        postMessage(n);
    }
}
