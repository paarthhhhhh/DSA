function checkPalin(n){
    let rev=0;
    let temp=n;
    while(n>0){
        rem=n%10;
        rev=(rev*10)+rem;
        n=Math.floor(n/10);
    }
    return rev===temp;
}
let n=121;
let result=checkPalin(n);

console.log(result);
