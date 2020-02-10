/* showdow DOM with open mode */
const shadowHost1 = document.getElementById('host1');
//On open mode you can access the shadow DOM from  outside. 
const openShadowDOM = shadowHost1.attachShadow({mode: 'open'}); 
const openShadowRoot = shadowHost1.shadowRoot;
console.log('Shadow Root1:', openShadowRoot); // Shadow Root1: #shadow-root (open)

/* shadow DOM with closed mode */
const shadowHost2 = document.getElementById('host2');
//On closed mode you can not access the shadow DOM from the outside.   
const closeShadowDOM = shadowHost2.attachShadow({mode: 'closed'}); 
const closedShadowRoot = shadowHost2.shadowRoot;
console.log('Shadow Root2', closedShadowRoot); // Shadow Root2: null

/* Built in element have closed shadowDom. But there is a work around */
const videoElem= document.getElementById('videoElem');
const videoElemShowdowRoot = videoElem.shadowRoot;
console.log('Video Element Shadow Root:', videoElemShowdowRoot); //Video Element Shadow Root: null

/* Manupulating the open shadow DOM */
const para = document.createElement('p');
para.style.color = "red";
para.style.fontSize = "22px";
para.textContent = "Appedning Paragraph to Shadow DOM";
openShadowDOM.appendChild(para);

/* Using the custom element defined in the PopupInfo class */
customElements.define('popup-info', PopupInfo);

/*
 * An element may act as a shadow host to only 1 shadow DOM, hence can only have one shadow root. 
 * By default built in element have closed shodow DOM. You can see this with the video element.
 * You can carry out the same DOM operation for shadow DOM as the ones applicable in regular DOM.
 */