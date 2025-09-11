//write a function that returns largest number in an array

function largest(arr){
    let x =-Infinity;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            x=arr[i];
        }
    }
    return x;
}
let arr=[5,0,7,10,8,17,1];
let result= largest(arr);
console.log(result);