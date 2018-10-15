/* Chapter 3: Functional Programming with JavaScript */

/*Inserting functions into array */
let funcArry = [
    'They can be inserted into arrays', 
    message => console.log(message),
    'like variables',
    message => console.log(message)
];
funcArry[1](funcArry[0]);
funcArry[3](funcArry[2]);

/*function as argument */
let displayMessage = display => display();
displayMessage(()=>console.log("function as argument"));

/*function returned from function */
let messageToShow = function(message){
return function(){
console.log(message);
};
};
let messageFunc = messageToShow('function returned from function');
messageFunc();

/*function as argument and return statment */
var createScream = function(logger){
return function(message){
logger(`${message.toUpperCase()} !!!`);
};
};
var scream = createScream( message => console.log(message));
scream('function as argument and return statement');

/*function as argument and return statment  using double => */
var createScream2 = logger => message => logger(`${message} !!!`);
var scream2 = createScream2( message => console.log(message));
scream('Alternate syntax');

/*:::::::::::::::Functional Concepts::::::::::::::: */

/*1.):::::::::Immutability:::::*/
const person1 = {
name: 'Chichi',
city: 'Lagos',
color: 'Green'
};
function changeColor1(person, color){
person.color = color;
return person;
}
var changedPerson1 = changeColor1(person1, 'Yellow');
console.log(person1.color); //Yellow
console.log(changedPerson1.color); //Yellow
/*Javascript arguments are references to the actual data */

const person2 = {
name: 'Chucks',
city: 'Cape Town',
color: 'Blue'
};
function changeColor2(person, color){
return Object.assign({}, person, {color:color});
}
var changedPerson2 = changeColor2(person2, 'Green');
console.log(person2.color); //Blue
console.log(changedPerson2.color); //Green

/*Alternative syntax using ES6 and ES7 */
//Notworking, perhaps the object spread operator is an ES7 syntax
//var changeColor3 = (person, color) => ({...person, color});

/*Use Array.concat instead of Array.push for immutability*/
var people = [
{name: 'Chucks'},
{name: 'Chichi'},
{name: 'Emeka'}
];
var addPerson = (people, person) => people.concat(person);
var student = {name: 'Briam'};
var people1 = addPerson(people, student);
console.log(people.length); //3
console.log(people1.length); //4
/*Array.push mutates the original array, Array.concat returns a copy of the combined arrays */

/*Using ES6 */
var addPerson2 = (people, person) => [...people, person];
var people2 = addPerson2(people, student);
console.log(people.length); //3
console.log(people2.length); //4


/*2.) :::::::::::::: Pure Functions:::::::::::::::::::::::::::::::
A pure function is a function that returns a value that is computed based on its arguments.  
Pure  functions  take  at  least  one  argument  and  always  return  a  value  or
another function. They do not cause side effects, set global variables, or change any‐
thing about application state. They treat their arguments as immutable data
*/

const learner1 = {
name: 'Soliso',
canRead: false,
canWrite: false
};
var teach = function(learner) {
return Object.assign({}, learner, {canRead:true, canWrite: true});
};
const learnt = teach(learner1);
console.log(learner1); //{name: "Soliso", canRead: false, canWrite: false}
console.log(learnt); //{name: "Soliso", canRead: true, canWrite: true}

/*using ES6 arror functionand ES7 object spread operator*/
//var teach2 = learner => ({...learner, canRead:true, canWrite:true}); //Not working for ES6
/*
When writing functions, try to follow these three rules:
1.The function should take in at least one argument.
2.The function should return a value or another function.
3.The function should not change or mutate any of its arguments.
*/

/*3.) :::::::::::::Data Transformation::::::::::::::::::::::::::::::::::*/
/**
There are two core functions that you must master in order to be proficient with functional JavaScript: 
Array.map and Array.reduce
When  it  is  time  to  remove  an  item  from  an  array  we  should  use  Array.filter
over Array.pop or Array.splice because Array.filter is immutable.  
*/
let schools = ['Wit', 'Uniben', 'Unilag', 'Amadu bello', 'UNISA'];
let uni = schools.filter(school => school[0] === 'U');
console.log(schools.length); //5
console.log(uni.length); //3

//Transforming Object to array.
let scores = {
orlando: 5,
wits: 7,
pirates:3
};
let scoreArry = Object.keys(scores).map(key => ({name:key, score:scores[key]}));
console.log(scoreArry[1]); //{name: "wits", score: 7}

//Tranforming array to primitive: Array.reduce
let numbers = [10, 25, 27, 14, 30, 65, 29, 45];
let max = numbers.reduce((accum, val, index, arry) => {
console.log(`${accum} > ${val} = ${accum > val}`);
accum = (accum > val)? accum : val;
return accum;
});
console.log(max); //65
//using shorthand
let max2 = numbers.reduce((accum, val) => (accum > val)? accum : val);
console.log(max2);
//Array.reduceRight is similar to Array.reduce but it starts from the end of the array.

//Reducing an array to an object
let classmates = [
{name: 'Briam', school: 'Wits', city: 'Joburg'},
{name: 'Johnson', school: 'Uniben', city: 'Benin'},
{name: 'Wasiu', school: 'Newland', city: 'Lagos'}
];
var mastesObj = classmates.reduce((mates, {name, school}) => {
mates[name] = {name, school};
return mates;
}, {});
console.log(mastesObj); //{Briam:{name: "Briam", school: "Wits"}, Johnson: {…}, Wasiu: {…}}

let food = ['rice', 'rice', 'fish', 'fish', 'soup'];
let distinctFood = food.reduce( (food, currentFood)  => {
return (food.indexOf(currentFood) === -1)? [...food, currentFood] : food;
}, []);
let distinctFood2 = [...new Set(food)];
console.log(food);
console.log(distinctFood);
console.log(distinctFood2);

/*4.) ::::::::::::::::::::Higher order function ::::::::::::::::::::::::::::::::::::: 
Higher-order  functions  are  functions  that  can  manipulate  other  functions.  They  can
take functions in as arguments, or return functions, or both.
*/
var invokeIf = (condition, trueFunc, falseFunc) => (condition)? trueFunc() : falseFunc();
var showWelcome = () => console.log("Welcome!!!");
var unAuthorized = () => console.log("UnAthorized!!!");
invokeIf(true, showWelcome, unAuthorized); //Welcome!!!
invokeIf(false, showWelcome, unAuthorized); //UnAthorized!!!

/*
Currying is  a  functional  technique  that  involves  the  use  of  higher-order  functions.
Currying  is  the  practice  of  holding  on  to  some  of  the  values  needed  to  complete  an
operation  until  the  rest  can  be  supplied  at  a  later  point  in  time. 
*/
let userLog = user => message => console.log(`${user} -> ${message}`);
let user = userLog('chucks');
user('signed in');
user('worked all day');
user('signed out');
/*userLog is the height order function*/

/*5.) ::::::::::Recursioon :::::::::::::::::::::::::::::::::::::::::::*/
let countDown = function(value, fn){
fn(value);
return (value > 0)? countDown(value-1, fn) : value; 
};
countDown(10, value => console.log(value));
/*
Recursion should be used over loops wherever possible, but not all
JavaScript  engines  are  optimized  for  a  large  amount  of  recursion.
Too  much  recursion  can  cause  JavaScript  errors.  These  errors  can
be  avoided  by  implementing  advanced  techniques  to  clear  the  call
stack and flatten out recursive calls.
*/

/*Using recursion to iterate deeply into an object to retrieve a nested value */
var dan =  {
       type: "person",
       data: {
           gender: "male",
           info: {
               id: 22,
               fullname: {
                   first: "Dan",
                   last: "Deacon"
               }
           }
       }
   };
const deepPick = function(fields, obj){
let [first, ...remaining] = fields.split('.');
return (remaining.length)? deepPick(remaining.join('.'), obj[first]) : obj[first]; 
}; 
let type = deepPick('type', dan);
let firstname = deepPick('data.info.fullname.first', dan);
console.log(type); //Person
console.log(firstname); //Dan

/*6.) ::::::::::::::::::::::Composition:::::::::::::::::::::::::::::::::::::*/
/*
Chaining is one composition technique, but there are others. The goal of composition
is to “generate a higher order function by combining simpler functions.
*/



/*
Follow these three rules for functional programming:
1. Keep data immutable.
2. Keep functions pure—accept at least one argument, return data or another func‐tion.
3. Use recursion over looping (wherever possible).

In functional programs, we should use functions over values wherever possible.
const oneSecond = () => 1000;
const getCurrentTime = () => new Date()

*/