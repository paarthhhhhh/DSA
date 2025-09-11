/*wrtte a function that returns number of negative element in array*/

function countNeg(arr){
    let x=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]<0){
            x++;
        }
    }
return x;
}
let arr=[2,-9,17,0,1,-10,-4,8];
let result=countNeg(arr);
console.log(result);