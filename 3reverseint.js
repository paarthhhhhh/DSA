function reverseInt(n){
    let reverse=0;
    let temp=n;
    n=Math.abs(n);
    while(n>0){
        rem=n%10;
        reverse=(reverse*10)+rem;
        n=Math.floor(n/10);
    }
    return (temp<0)?-reverse:reverse;
}
let n=-9121;
let result= reverseInt(n);
console.log(result);