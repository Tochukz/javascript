import Vue from 'vue';
import App from './App.vue';

import sum from './math/summation';
import {factorial, average} from './math/operations';
import {divide, subtract as diff, asyncAdd, addWithPromise} from './math/operations';
import * as stats from './math/stats';

import * as dict from './diction';

Vue.config.productionTip = false;

import "bootstrap/dist/css/bootstrap.min.css";


new Vue({
  render: h => h(App)
}).$mount('#app');

//math module
console.log(`Sum: ${sum([1,2,3,4,5])}`);
console.log(`Factorial 4: ${factorial(4)}`);
console.log(`Average: ${average(1,2,3,4,5)}`);
console.log(`Divide ${divide(120/4)}`);
console.log(`Subtract ${diff(5,2)}`);
console.log(`Substract: ${diff(2,5)}`);
console.log(`Mode: ${stats.mode(2,1,3,3,4,2,5,2,7,4,3,2)}`);
console.log(`Median: ${stats.median(1,2,3,4,5)}`);
console.log(`Median: ${stats.median(1,2,3,4,5,6,7,8,9,10)}`);

//diction module
// console.log(`Dev: ${dict.dev('dev')}`); //Not working
//console.log(`A dev ${dict.techJob()} `); //Not working
console.log(`Fish: ${dict.seaAnimals('fish')}`);
console.log(`Lion: ${dict.landAnimals('lion')}`);

//Asynchronous JS
let total = asyncAdd([10, 20, 30, 40, 50]);
console.log(`Main Total: ${total}`);

//Promise
//addWithPromise([10,20,30,40,50]).then( total=> console.log(`Main Promise Total: ${total}`));

//'async' and 'await': alternative syntax to using 'then' in promises
async function doAdd(){
    let total = await addWithPromise([10,20,30,40,50]);
    console.log(`Await Total: ${total}`);
};
doAdd();
