//write a function that returns second largest number in an array

function largest(arr){
    let x =-Infinity;
    let y =-Infinity;                  //for 2nd largest
    for(let i=0;i<arr.length;i++){
        if(arr[i]>x){
            y=x;
            x=arr[i];
        }
        else if(arr[i]>y){
            y=a[i];
        }
    }
    return y;
}
let arr=[5,0,7,16,8,17,1];
let result= largest(arr);
console.log(result);