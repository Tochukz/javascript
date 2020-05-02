// Create a web worker
const worker = new Worker('js/worker.js');
// Get messages from the worker
worker.onmessage = function(event) {
    console.log(`Message from worker: ${event}`);
}
//Another way to listen for messages from the worker
worker.addEventListener('message', event => {
    console.log(`Worker event: ${event}`);
});
// Start the worker
worker.postMessage('anything');
