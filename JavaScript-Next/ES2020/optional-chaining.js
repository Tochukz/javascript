const student = {
    name: 'Max',
    age: 20,
    address: {
        street: {
            number: 45,
            name: 'Oxford'
        }
    }
};

/* checking each node in a chain*/
const streetNumber1 = student && student.address && student.address.street && student.address.street.number; 
console.log('street number1', streetNumber1); //street number1 45

/* Using optional chaining */
const streeNumber2 = student?.address?.street?.number;
console.log('street number2', streeNumber2); // street number2 45

/* Using optional chaining for arrays */
let cities = ["Lagos", "Joburg", "Cape Town"];
console.log(cities?.[1]); // Joburg

cities = null;
console.log(cities?.[1]); // undefined

/* Using optional chaining for functions */
let sum = (x, y) => x + y;
console.log(sum?.(5, 6)); // 11

sum = null;
console.log(sum?.(4, 6)); // undefined
