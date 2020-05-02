if (window.Worker) {
  console.log('Worker is available');

  $(document).ready(function() {
    $(document).on('scroll', handleScroll)
  });

  let page = 1;

  const bookWorker = new Worker('js/book-worker.js');
  bookWorker.onmessage = function(event) {
    const books = event.data;
    addBooksToStorage(books);
    addBooksToUI(books);
  };
  bookWorker.onerror = function(err) {
    $('#errorDiv').html(`<p><b>Error</b><br /> ${err.message} <br />  ${err.filename}  <br /> ${err.lineno}</p>`);
    $('#errorDiv').slideDown();
    setTimeout(() => {
      $('#errorDiv').slideUp();
    }, 5000)
    console.error('Error from bookworker:', err);
  }
  bookWorker.postMessage(page);

  function getMoreBooks() {
    console.log('Getting books for page', page);
    page++;
    bookWorker.postMessage(page);
  }

  function addBooksToUI(books) {
    let html = '';
    books.forEach(book => {
      html += `<div class="col-sm-12">
                 <div class="badge badge-success">${book.id}</div>
               </div>
               <div class="col-sm-2">
                <img src="http://ojlinks.tochukwu.xyz/storage/book_img/${book.img}" class="img-thumbnail" alt="front cover image"/>
               </div>
               <div class="col-sm-2">
                <p><b>${book.title}</b></p>
                <p>By <em>${book.author}</em></p>
                <p>${book.edition} Edition</p>
                <p>${book.category}</p>
                <p>${book.subcategory}</p>
               </div>
               <div class="col-sm-8">
                ${book.details}
               </div>
             `
    });
    $('#content').append(html);
  }

  function addBooksToStorage(books) {
    let previousBooks = []
    if(localStorage.books) {
      previousBooks = JSON.parse(localStorage.getItem('books'));
    }
    localStorage.setItem('books', JSON.stringify([...previousBooks, ...books]));
  }

  function handleScroll() {
    const forDivMargin = 590;
    const winBottom = $('#footer').offset().top - forDivMargin;
    const yOffset = window.scrollY;
    console.log(winBottom, yOffset);
    if (yOffset >= winBottom) {
      getMoreBooks();
    }
  }
} 

if (!window.Worker) {
  $('#errorDiv').html(`<p>Sorry, your broswer does not support service worker</p>`);
  $('#errorDiv').slideDown();
}