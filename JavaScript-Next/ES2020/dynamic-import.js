const args = process.argv;
const name = args.length > 2? args[2] : undefined;
async function getName(name) {
    if (name) {
        const data = await import('./data.js');
        const person = data.default.find(p => p.name.toLowerCase() == name.toLowerCase());
        console.log(person.city);
    }
}
getName(name);

/** 
 * Enter a person's name to see their city, for example:
 * > node ./dynamic-import.js Tochi
 */