/**
 * A custom element to deomonstrate the shadow DOM in action
 */

 class PopupInfo extends HTMLElement {
     shadow = null;
     wrapper = null;
     icon = null;
     style = null;
 
     constructor() {
         super();
         this.createShadow();
         this.createShadowDOMStructure();
         this.styleShadowDOM();
         this.attachShadowDOM();
     }

     createShadow() {
       this.shadow = this.attachShadow({mode: 'open'});
     }

     createShadowDOMStructure() {
         // Create spans
         const wrapper = document.createElement('span');
         wrapper.setAttribute('class', 'wrapper');
         this.wrapper = wrapper;

         const icon = document.createElement('span');
         icon.setAttribute('class', 'icon');
         

         const info = document.createElement('span');
         info.setAttribute('class', 'info');

         // Take text attribute content and put it insie the info span
         const text = this.getAttribute('text');
         info.textContent = text;
         this.info = info;

         // Insert icon
         let imgUrl; 
         if (this.hasAttribute('img')) {
             imgUrl = this.getAttribute('img');
         } else {
             imgUrl = 'img/default.png';
         }

         const img = document.createElement('img');
         img.src = imgUrl;
         icon.appendChild(img);
         this.icon = icon;

     }

     styleShadowDOM() {
         const style = document.createElement('style');
         style.textContent = `
             .wrapper {
                 position: relative;
             }
             .info {
                 font-size: 0.8rem;
                 width: 200px;
                 display: inline-block;
                 border: 1px solid black;
                 padding: 10px;
                 background: white;
                 border-radius: 10px;
                 opacity: 0;
                 transition: 0.6s all;
                 position: absolute;
                 bottom: 20px;
                 left: 10px; 
                 z-inde: 3;
             }
             img {
                 width: 12rem;
             }
             .icon:hover + .info, .icon:focus + .info {
                 opacity: 1;
             }
         `;
          this.style = style;
     }

     attachShadowDOM() {
         const shadow = this.shadow;
         shadow.appendChild(this.style)
         shadow.appendChild(this.wrapper);
         shadow.appendChild(this.icon);
         shadow.appendChild(this.info);
     }
 }