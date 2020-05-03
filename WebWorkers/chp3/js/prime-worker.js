self.onmessage = function(event) {
    if(!event.data.cmd || !event.data.max || event.data.max < 2) {
      setTimeout(() => {
        throw new Error(`No 'cmd' and/or 'max' argument found. Argument given is ${JSON.stringify(event.data)   }`);
      });
    }
    //postMessage(`Prime Search has begun with cmd: ${event.data.cmd}, max: ${event.data.max}`);
    switch(event.data.cmd) {
        case 'start': 
          startPrimeSearch(event.data.max)
          break;
        case 'stop':
          postMessage('Terminated and closed!')
          self.close();
          break;
        default: 
          postMessage(`Invalid command ${event.data.cmd}`)
    }
}

/** Search for all prime numbers between 1 and max  */
function startPrimeSearch(max) {
  let n = 1;
  search: while(n < max) {
    n++;
    for(let i = 2; i <= n; i++) {
        if (n !== i && n % i === 0 ) {
          continue search;
        }
    }
    // Prime number found!
    postMessage(n);
  }
}
