var fs = require('fs');
var timestamp = new Date().toString();
var contents;

fs.writeFileSync('date.txt', timestamp);
contents = fs.readFileSync('date.txt');
console.log('Checking the content');
console.assert(contents == timestamp); //Will display an error if the twoo values differ

console.log('I  am the last line of the script');