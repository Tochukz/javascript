let num = 19;
{
    let num = 11;

}
console.log(num); // i9
//const name = 'tochukwu';
console.log(name); //undefined
var name = 'Tochukwu';

console.log(myname()); //Tochukwu
function myname(){
    return 'Tochukwu';
}

var nums = [];
for(var i=0; i<3; i++){
    //Each closure is referencing the same variable i
    nums.push(function(){ return i});

}
console.log(nums[0]()); //3
console.log(nums[1]()); //3
console.log(nums[2]()); //3

var nums2 = [];
for(let i=0; i<3; i++){
    //Each closure has it own independent copy of i
    nums2.push(function(){ return i});

}
console.log(nums2[0]()); //0
console.log(nums2[1]()); //1
console.log(nums2[2]()); //2

var city = 'Joburg';
let state = 'Lagos';
const pie = 22/7;
function person(){
    console.log('person');
}
console.log(window.city); //undefined
console.log(window.state); //undefined
console.log(window.pie); //undefined
console.log(window.person); //undefined

function getContext(){
    console.log(this);
}
getContext();//undefined
console.log(window); 
console.log(this);
