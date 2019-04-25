/** Defining a symbol */
let firstname = Symbol();
let person = {};
person[firstname] = "Tochukwu";
console.log(person[firstname]); //"Tochukwu"

/** Adding a description to a symbol */
let lastname = Symbol("Dev last name");
person[lastname] = "Nwachukwu";
console.log("Dev last name" in person); //first
console.log(person[lastname]); //Nwachukwu
console.log(lastname); //Symbol(Dev last name)

var description = lastname.toString();
console.info(description); //Symbol(Dev last name)
console.info(typeof firstname); //symbol