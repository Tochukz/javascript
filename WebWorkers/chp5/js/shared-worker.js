debugger;
const connectionCount = 0;
// self.addEventListener('connect', function(event){
//     setTimeout(() => {
//         throw new Error(`Just Error`);
//     });
//     connectionCount++;
//     const firstPort = event.ports[0];
//     firstPort.addEventListener('message', function(event){
//         firstPort.postMessage(`Connection count = ${connectionCount}`);
//         firstPort.postMessage(event.posts);
//     }, false);
//     firstPort.start();
// }, false);

self.onconnect = function (event) {
    const firstPort = event.ports[0];
    connectionCount++;
    firstPort.postMessage(`Connection count = ${connectionCount}`);
    // firstPort.postMessage(event.posts);
    // firstPort.start();
    firstPort.onmessage = function(event) {
        firstPort.postMessage(event.posts);
        setTimeout(() => {
            throw new Error(`Just Error`);
          });
    }
    event.ports.forEach(port => {
        port.postMessage('Hello up there');
    })
}

// self.onmessage = function(event) {
//     postMessage('Terminated and closed!');
//     this.setTimeout(() => {
//         throw new Error(`Just Error`);
//     });
    
// }
postMessage('Anything!');

