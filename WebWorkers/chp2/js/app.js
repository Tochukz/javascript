// Check if browser supports WebWorker 
if (window.Worker) {
   console.log('WebWorker is supported');
} 

// Use Modernizr to detect WebWorker
if (Modernizr.webworkers) {
  console.log('Modernizr: Web worker is available');


  // This will render broswer unreposive and so is best suited for a worker
  //findHighestPrime(Infinity);

  // Create a worker to find the prime numbers
  const primeNumberWorker = new Worker('js/prime-numbers.js');
  primeNumberWorker.onmessage = function(event) {
    document.getElementById('output').textContent = event.data;
  }
   
  // A worker that import scripts
  const worker = new Worker('js/worker.js');
  worker.addEventListener('message', handleMessage)
  function handleMessage(event) {
      console.log(event.data);
  }
}


/** 
 * Find Highest prime number. A computationaly intensive function
 * This function is meant to make the browser unresponsive for very high values of $max
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
        document.getElementById('output').textContent = n;
        console.log(n);

    }
}
