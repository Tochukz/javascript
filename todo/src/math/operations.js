import summation from "./summation";

export function factorial(n){
  var facto = 1;
  while(n>0){
    facto = facto * n;
    n--;
  }
  return facto;
}

export function average(...numbers){
  let total = numbers.reduce((cum, cur, ind, arr) => cum + cur);
  return (total/numbers.length).toFixed(2);
}

export function divide(x, y){
  return x/y;
}

export function subtract(x, y){
  return ( (x-y) > 0)? (x-y) : (y-x);
}

export function asyncAdd(nums){
  setTimeout(()=>{
      let total = summation(nums);
      console.log(`Async Total: ${total}`);
      return total;
  }, 500);
}

export function addWithPromise(nums){
  return new Promise((callback) => {
      setTimeout(()=>{
        let total = summation(nums);
        console.log(`Promise Total: ${total}`);
        callback(total);
      }, 500);      
  });
}
