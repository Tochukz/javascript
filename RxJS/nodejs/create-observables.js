const Event = require('events');
const { of, from, fromEvent, interval, timer, range, defer } = require('rxjs');
const { ajax } = require('rxjs/ajax');
const { fromFetch } = require('rxjs/fetch');

console.log(':::::: of() ::::::::');
const number$ = of(1, 2, 3, 4, 5);
const animal$ = of('Dog', 'Cat', 'Sheep', 'Lion');
const fullname$ = of(['Chucks', 'Nwachukwu'], ['John', 'Smith'], ['Kalvin', 'Klean']);
const people$ = of({name: 'John', city: 'Cape Town'}, {name: 'Maxwell', city: 'Joburg'});

number$.subscribe(numbers => console.log(numbers));
animal$.subscribe(animals => console.log(animals));
fullname$.subscribe(console.log);
people$.subscribe(people => console.log(people));

console.log(':::::: from() ::::::::');
const electronic$ = from(['Television', 'Radio', 'Fridge', 'Computer']);
const capital$ = from (new Map([
    ['Abuja', 'Nigeria'],
    ['Cape Town', 'South Africa'],
    ['Washington', 'U.S.A']
  ])
);
const result$ = from(Promise.resolve('Chucks to be Architech'));

electronic$.subscribe(console.log);
capital$.subscribe(capital => console.log(capital));
result$.subscribe(result => console.log(result));

console.log(':::::::::: fromEvent() :::::::::::::');
const eventEmitter = new Event();
const message$ = fromEvent(eventEmitter, 'newMessage');
message$.subscribe(data => console.log(data));
// See also browser implementation

eventEmitter.emit('newMessage', {message: 'Getting my AWS Certification pretty soon!'});

console.log('::::::::::: interval() ::::::::::::::::');
const intSeries$ = interval(1000); // emits i+1 at 1000ms interval i.e 1 second
// intSeries$.subscribe(x => console.log(`x = ${x}`));

console.log('::::::::::::::: timer() ::::::::::::::::::::');
const intProgression$ = timer(5000, 1000); // Delay for 5000ms then start emitting int i+1 at 1000ms interval
// intProgression$.subscribe(i => console.log(`i = ${i}`));

console.log('::::::::::::::: range() :::::::::::::::::');
const clock$ = range(1, 12); // starting at 1 emits  i+1 for events of length 12
clock$.subscribe(t => console.log(`t = ${t}`));


console.log('::::::::::::::: defer() ::::::::::::::::::::');
const randAnimal = function() {
  const animals = ['Tiger', 'Dog', 'Cat', 'Sheep', 'Lion', 'Fish'];
  const rand = Math.floor(Math.random() * 5);
  return animals[rand];
}
// All three subscription will return the same animal. This is because the randAnimal() function is called only once and that is then the observable is created
const randAnimal$ = of(randAnimal());
randAnimal$.subscribe(animal => console.log(`sub1: ${animal}`));
randAnimal$.subscribe(animal => console.log(`Sub2: ${animal}`));
randAnimal$.subscribe(animal => console.log(`sub3: ${animal}`));

// All three subscription will return random animal. This is because the callback function passed to defer is called everytime we subscribe to realRandAnimal$
const realRandAnimal$ = defer(() => of(randAnimal()));
realRandAnimal$.subscribe(animal => console.log(`randSub1: ${animal}`));
realRandAnimal$.subscribe(animal => console.log(`randSub2: ${animal}`));
realRandAnimal$.subscribe(animal => console.log(`randSub3: ${animal}`));

console.log(':::::::::::::: ajax() :::::::::::::::::::::::::');
// See browser implementation

console.log(':::::::::::::: fromFetch() ::::::::::::::::::::::');
const category$ = fromFetch('http://ojlinks-api.test:8084/api/categories/1');
// See browser implementation
