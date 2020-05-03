const sharedWorker = new SharedWorker('js/shared-worker.js');

sharedWorker.port.onmessageerror = function (err) {
    console.error('Message Error', err);
}

sharedWorker.onerror = function (err) {
    console.error('Generic Error', err);
}

sharedWorker.port.onerror = function (err) {
    console.error('Error on Port', err);
}

// sharedWorker.port.onmessage = function(event) {
//     console.log(event);
//     displayMessage(event.data);
// }

sharedWorker.port.addEventListener('message', function(event) {
    console.log(event);
    displayMessage(event.data);
});

function startWorker() {
    sharedWorker.port.start();
    sharedWorker.port.postMessage({cmd: 'connect'});
    console.log(start);
}






//console.log(sharedWorker);

function displayMessage(message) {
    $('#messageDiv').append(message);
}