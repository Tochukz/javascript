let primeWorker = {};
function startPrimeWorker() {
    $('#errorDiv').slideUp();
    primeWorker = new Worker('js/prime-worker.js');
    
    primeWorker.onmessage = function(event) {
        $('#output').val(event.data);
    }
    
    primeWorker.onerror = function(err) {
        $('#errorDiv').slideDown();
        $('#errorDiv').html(`<p><b>Error:</b> ${err.message} </p> <p><b>Stack:</b> at ${err.filename} on line ${err.lineno}, column ${err.colno}</p> 
        <p><b>Please make sure to enter a max number greater than 1 in the box below</b></p>`);
        console.error(event);
    }
    
    const max = $('#max').val();
    primeWorker.postMessage({cmd: 'start', max});
}

function stopPrimeWorker() {
    if ('terminate' in primeWorker) {
        primeWorker.terminate();
        primeWorker = null;
    }
}