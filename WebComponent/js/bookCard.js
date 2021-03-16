const template = document.createElement('template');
template.innerHTML = `
  <style>
    .book-card {
       background: silver;
       width: 80%;
       height: 250px;
       overflow: hidden;
       display: grid;
       grid-template-columns: 1fr 2fr;
       grid-gap: 10px;
       margin-bottom: 15px;
       border-bottom: orange 5px solid;
    }
    .img-div {
      background: black;
      overflow: hidden;
      text-align: center;
    }
    .img-div img {
      max-height: 300px;
      max-width: 100%;
    }
    .cartBtn {
      cursor: pointer;
      background: green;
      padding: 4px;
      color: silver;
      border-radius: 4px;
      font-size: 1em;
    }
    .cartBtn:hover {
      color: white;
    }
  </style>
  <div class="book-card">
    <div class="img-div"> 
      <img src="" />
    </div>
    <div>
        <p> 
          <strong>Title</strong>
          <span id="title"></span>
        </p>
        <p> 
          <strong>Author</strong>
          <span id="author">author</span>
        </p>
        <p>
         <strong>Price</strong>
         <slot name="price" />        
        </p>
        <p>
          <strong>Publisher</strong>
          <slot name="publisher" />
        </p>
        <p>
          <button class="cartBtn" >Add to Cart</button>
        </p>
    </div>
  </div>
`
class BookCard extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('img').src = this.getAttribute('frontcover');
    this.shadowRoot.getElementById('title').textContent = this.getAttribute('title');
    this.shadowRoot.querySelector('#author').textContent = this.getAttribute('author'); 
    this.shadowRoot.querySelector('.cartBtn').setAttribute('id', this.getAttribute('book-id'));
  }

  connectedCallback() {
    this.shadowRoot.querySelector('.cartBtn').addEventListener('click', this.addToCart);
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('#cartBtn').removeEventListener('click');
  }

  addToCart(event) {
    const id  = event.target.id
    alert(`Book with ID of ${id} was added to the shopping cart`);
  }
}

window.customElements.define('book-card', BookCard);