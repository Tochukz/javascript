if (window.Worker) {
  console.log('Worker is available');

  $(window).scroll(function() {
   
    const margin  = 28;
    console.log($(window).scrollTop() + $(window).height() + margin, $(document).height())
    if($(window).scrollTop() + $(window).height() + margin > $(document).height()) {
        getMoreBooks();
        console.log('button reached');
    }
  });

  let page = 1;

  const bookWorker = new Worker('js/book-worker.js');
  bookWorker.onmessage = function(event) {
    const books = event.data;
    addBooksToStorage(books);
    addBooksToUI(books);
  };

  bookWorker.onerror = function(err) {
    $('#errorDiv').html(`<p><b>Error!</b><br /> ${err.message}  at  ${err.filename}  on line ${err.lineno}</p>`);
    $('#errorDiv').slideDown();
    console.error('Error from bookWorker:', err);
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
    let bookStore = {}
    if(localStorage.bookStore) {
      bookStore = JSON.parse(localStorage.getItem('bookStore'));
    }
    books.forEach(book => {
      bookStore[book.id] = book;
    });
    localStorage.setItem('bookStore', JSON.stringify(bookStore));
  }
} 

if (!window.Worker) {
  $('#errorDiv').html(`<p>Sorry, your broswer does not support service worker</p>`);
  $('#errorDiv').slideDown();
}