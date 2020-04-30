/* The Set object lets you store unique values of any type.
 * A value in the set may only occur once; it is unique in the Set's collection
 */

/** Set Method */
const mySet = new Set();
mySet.add(1);
mySet.add(2);
console.log(mySet); //{1, 2}
mySet.add(2); 
console.log(mySet); //{1, 2}

const names = new Set();
names.add("Adam");
names.add("John")
names.add("John");
console.log(names); // {"Adam", "John"}

const people = new Set();
people.add({name: 'Adman', city: 'JHB'});
people.add({name: 'John', city: 'CPT'});
people.add({name: 'John', city: 'CPT'});
console.log(people); // {{name: 'Adman', city: 'JHB'}, {name: 'John', city: 'CPT'}, {name: 'John', city: 'CPT'}}
console.log(people.size); //3
console.log(people.has({name: 'John', city: 'CPT'}));  // false

console.log(names.has("Adam")); //true
console.log(names.has("Maxwel")); // false


const cities = new Set();
const cpt = {name: 'Cape Town', code: 'CPT'};
const lag = {name: 'Lagos', code: 'LGS'};
const jhb = cpt;
cities.add(cpt);
cities.add(cpt);
cities.add(lag);
cities.add(jhb);
console.log(cities); // {{name: 'Cape Town', code: 'CPT'}, {name: 'Lagos', code: 'LGS'}}
console.log(cities.size); //2

names.delete("Adam");
console.log(names.has("Adam")); //false

/** Iterating */
for (let x of mySet) {
    console.log(x);
}

const animals = new Set(["Dog", "Cat", "Goat", "Goat"]);
for (animal of animals) {
  console.log(animal);
}

for (let [key, value] of animals.entries()) {
    console.log('Key: ', key);
    console.log('Value: ', value)
} //key and value produces the same thing e.g "Dog" for the first element

animals.forEach(animal => console.log(animal));

const keys = animals.keys(); // returns SetIterator
const values = animals.values(); // returns SetIterator
animals.clear();
console.log(animals.size); // 0 


/* convertion of Set to Array */
console.log(Array.isArray(animals)); // false
const animalArray = [...animals];
const animalArray2 = Array.from(animals);
console.log(Array.isArray(animalArray)); //true
console.log(Array.isArray(animalArray2)); // true

/** Intersection and difference */
const resturantA = new Set(['Rice', 'Bread', 'Chiken', 'Soup']);
const resturantB = new Set(['Custard', 'Bread', 'Tea', 'Rice']);

const Intersection = new Set([...resturantA].filter(food => resturantB.has(food)));
console.log(Intersection); // {"Rice", "Bread"}

const difference = new Set([...resturantA].filter(food => !resturantB.has(food)));
console.log(difference); // {"Chiken", "Soup"}

/** Make array element unique */
const nums = [1, 2, 3, 3, 1, 5];
const uniqueNums = [...new Set(nums)];
console.log(uniqueNums); // 1, 2, 3, 5

