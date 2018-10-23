export function mode(...numbers){
    let freq = {};
    numbers.forEach((el, index, arry) => {
        if(freq[el] === undefined){
            freq[el] = 1;
        }else{
            freq[el] = freq[el] + 1;
        } 
    });
    let max = 0;
    let mode = 0;
    for(let x in freq){
       if(freq[x] > max){
           max = freq[x];
           mode = x;
       }
    }
    return mode;
}
export function median(...numbers){
    if(numbers.length%2 == 1){
        //It is odd
        return numbers[Math.ceil(numbers.length/2)-1];
    }else{
        //Is even
        let sumMidians =   numbers[(numbers.length / 2) -1] + numbers[(numbers.length) / 2] ;
        return sumMidians/2; 
    }
}
