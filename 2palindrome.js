function checkPalin(n){
    let rev=0;
    let temp=n;
    while(n>0){
        rem=n%10;
        rev=(rev*10)+rem;
        n=Math.floor(n/10);
    }
    if(rev==temp){
        return true;
    }
    else{
        return false;
    }
}
let n=121;
let result=checkPalin(n);
console.log(result);