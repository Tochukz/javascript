//ES6 modules syntax
/*
export default function(message) {
    alert(message);
}
*/

//Using CommonJS module syntax
/*
module.exports = function(message) {
    alert(message);
};
*/

//Single non default 
/*
export function notify(message){
    alert(message)
}
*/

//Exporting object with functions as properties 
function notify(message){
    //alert(message);
}

function log(message){
    console.log(message);
}

export default {
    notify: notify,
    log: log
};