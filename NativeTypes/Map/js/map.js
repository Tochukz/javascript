/** The Map object holds key-value pairs and remembers the original insertion order of the keys. */
const person = new Map();
person.set('name', 'Chucks');
person.set('city', 'Cape Town');
person.set('title', 'Dev Architect');
const city = person.get('city');

console.log(city); // Cape Town
console.log(person.size); // 2
console.log(person.has('name')); //true 

/** Iterating */
for (let [key, val] of person) {
    console.log('%s = %s', key, val);
}

for (let [key, val] of person.entries()) { // Same result as above
    console.log('%s = %s', key, val);
}

person.forEach((key, val) => {
    console.log('%s = %s', key, val);
});

for(let key of person.keys()) {
    console.log('Key =', key);
}

for(let val of person.values()) {
    console.log('Value =', val);
}

/** Interaction with array */
const dev = [['name', 'Tochukz'], ['city', 'Amsterdam'], ['experience', 'Intermediate']];
const devMap = new Map(dev);
const devCity = devMap.get('city');

console.log(devCity); // Amsterdam
console.log(devMap.size); // 2
console.log(typeof devMap); // objec

const devArray = Array.from(devMap);
const devArray2 = [...devMap];
console.log(devArray); //[['name', 'Tochukz'], ['city', 'Amsterdam']];
console.log(devArray2); //[['name', 'Tochukz'], ['city', 'Amsterdam']];

const arrayIterator = devMap.keys(); // returns   MapIterator  
const arrayIterator2 = devMap.values(); // returns  MapIterator

const keyArray = Array.from(devMap.keys());
const valueArray = Array.from(devMap.values());
console.log(keyArray); // ["name", "city"];
console.log(valueArray); // ["Tochukz", "Amsterdam"] 

/** Clone a Map */
const newPerson = new Map(devMap);
console.log(newPerson.get('experience')); // Intermediate
newPerson.delete('experience')
console.log(newPerson.get('experience')); // undefined
newPerson.set('experience', 'Advanced');
console.log(devMap.get('experience')); // Intermediate  

/** Merging Maps */
const firstLangs = new Map([ 
    [1, 'JavaScript'],
     [2, 'PHP'] 
]);
const secondLangs = new Map([ 
    [3, 'PHP'],
    [2, 'C#'] 
]);
const mergeLangs = new Map([...firstLangs, ...secondLangs]); 
console.log(mergeLangs); //Map(3) {1 => "JavaScript", 2 => "C#", 3 => "PHP"}

const mergeWithArray = new Map([...secondLangs, [1, 'JavaScript']]);
console.log(mergeWithArray); // Map(3) {3 => "PHP", 2 => "C#", 1 => "JavaScript"}

/**
 * Warning: Setting Map property using array notation me give unexpected results
 */
const user = new Map();
user['username'] = 'James';
console.log(user.get('username')); //undefined
console.log(user.has('username')); // false
console.log(user); // Map(0) {username: "James"}
/** So you must always use the set method */
user.set('username', 'James');
console.log(user.get('username')); // James