/*Chapter 2: 2. Emerging JavaScript. */

/*::::::::Destructuring::::::::::::::::*/
const dev = {
    devname: 'Tochukwu',
    job: 'Software Dev',
    city: 'Cape Town',
    salary: 60000
};

let {devname, job} = dev;
console.log(devname);
console.log(job);

devname = 'Chucks';
job = 'Software Archetect';
console.log(devname);
console.log(job);

//Function with regular parameter
var lordify = regularPerson => {
    console.log(`${regularPerson.name} of Canterbury`);
};
//Function with destrutured parameter
var lordify2 = ({name}) => {
    console.log(`${name} of Canterbury`);
};
var regularPerson = {
    name: 'Tochukwu',
    city: 'Cape Town'
};
lordify(regularPerson); //Tochukwu of Canterbury
lordify2(regularPerson); //Tochukwu of Canterbury

var [firstResort] = ['Kirkwoord', 'Squaw', 'Alpine'];
var [,,thirdResort] = ['Kirkwoord', 'Squaw', 'Alpine'];
console.log(firstResort); //Kirkwood
console.log(thirdResort); //Alpiie

/*:::::::::::::::::::Object Literal Enhancement (Restructing)::::::::::::::::::*/
let fruit = 'Apple';
let street = 'Marcus Garvey';
let fruitObj = {fruit, street};
console.log(fruitObj);// {fruit: "Apple", street: "Marcus Garvey"}

let machine = 'Cell Phone';
let type = 'Electronic';
let statement = function(){
    console.log(`${this.machine} is an ${this.type} device`);
}
let machineObj = {machine, type, statement}
machineObj.statement(); //Cell Phone is an Electronic device


/*::::::::::::::Spread Operator:::::::::::::::::::::*/
let fruits = ['Apple', 'Orange' ];
let moreFruits = ['Pineapple', 'Strawberry'];
let allFruits = [...fruits, ...moreFruits];
console.log(allFruits); // ["Apple", "Orange", "Pineapple", "Strawberry"]

let [lastFruit] = [...allFruits].reverse(); //reverse() function mutates the array it is applied to. Hence the copy we made
console.log(lastFruit); //Strawberry

let [first, ...theRest] = allFruits;
console.log(first); //Apple 
console.log(theRest.join(', ')); // Orange, Pineapple, Strawberry

function showCities(...cities){
    let [firstCity] = cities;
    let [lastCity] = cities.reverse();
    console.log(`First City: ${firstCity}`);
    console.log(`Last City: ${lastCity}`);
    console.log(`Total Cities: ${cities.length}`);
}
showCities('Lagos', 'Cape Town', 'Abuja', 'Joburg');

//using spread operators for objects
var myThings = {
    music: 'Piano',
    lang: 'C#',    
    study:'Physics'
};
var math = true;
/*Does not work
var allOfMe = {
    ...myThings,
    math
};
console.log(allOfMe);
*/

/*::::::::::::::Promise::::::::::::::::::::*/
function countToFive(){
    return new Promise((callback)=> {
        setTimeout(()=>{
            for(let x=1; x<=5; x++){
                console.log(x);
            }
            callback(6);
       }, 1000);
    });
}
countToFive().then( arg => console.log(arg));

let getFakeMembers = (n) => new Promise((resolves, rejects) => {
        const url = `https://api.randomuser.me/?nat=US&results=${n}`;
        const ajax = new XMLHttpRequest();
        ajax.open('GET', url);
        ajax.onload = () => {
             return (ajax.status == 200)? resolves(JSON.parse(ajax.response).results) : rejects(Error(ajax.statusText));
        };
        
        ajax.onerror = (err) => rejects(err);
        ajax.send();
    }
);
getFakeMembers(2).then(members => console.log(members), err => console.error(new Error('Can not load members from radomuser.me')));

class Person
{
    constructor(name, profession)
    {
        this.name = name;
        this.profession = profession;
        
    }
    printDetails()
    {
        console.log(`${this.name} is a ${this.profession}`);
    }
}

var individual = new Person('Emeka', 'Techer');
individual.printDetails();

class Dev extends Person
{
    constructor (name, profession, tools)
    {
        super(name, profession);
        this.tools = tools;
    }
    printDetails()
    {
        console.log(`${this.name} is a ${this.profession} he works with, ${this.tools}`);
    }
}
let tochucks = new Dev('chucks', 'software dev', 'C#, PHP, JavaScript');
tochucks.printDetails();
