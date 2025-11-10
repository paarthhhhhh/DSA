function countDigits(n){
    let count = 0
    if(n==0){
        return 1;
    }
    n=Math.abs(n);            //Math.absolute changes negative no. to positive
    while(n>0){
        n=Math.floor(n/10);   //rounds down the value
        count++;
    }
    return count;             //function hamesha return karega ni toh result undefined hoga 
}
let n=-12;
let result=countDigits(n);

console.log(result);



