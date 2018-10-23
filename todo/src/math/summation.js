export default function(numArry){
    return numArry.reduce((cum, curr, inde, arry)=>{
         return cum + curr;
    }, 0);
}
