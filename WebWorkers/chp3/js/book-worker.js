function getBooks(page) {
    const url = `http://localhost:9000/books?page=${page}`;
    fetch(url).then(response => response.json())
              .then(data => {
                postMessage(data);
              })
              .catch(err => { 
                console.error(err)
                throw err;
              });
}

self.onmessage = function (event) {
    getBooks(event.data);
}