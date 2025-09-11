/*write a function that searches for an element in array and return the index
if no element is found return -1*/



function searchAr(arr,x){
    for(i=0;i<arr.length;i++){
        if(arr[i]==x){
            return i;
        }
    }
return -1;
}

let arr=[1,5,7,12,19];
let result=searchAr(arr, 12)
console.log(result)