//ES2015 syntax
//import notify from './js/notification';

//Using CommonJS syntax
//var notify = require('./js/notification');


//Single non default function
//import {notify} from './js/notification';

//notify('This is my another message');

//Object as default

import notification from './js/notification';
import Person from './js/person';

//Doing CSS
require('./css/main.css');

//Doing SCSS
require('./scss/style.scss');

const message = "This is the message";
notification.notify(message);
notification.log(message);



const person = new Person('Tochukwu');
console.log(`${person.getName()} will make an excellent Java developer`);

