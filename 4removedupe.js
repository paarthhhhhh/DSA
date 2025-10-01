//LC problem 26. Remove duplicates from a sorted array

function removeDupe(arr){
    let x=0;
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x=x+1;
            arr[x]=arr[i];
        }
    }
    return x+1;
}
let arr=[0,1,1,2,4,4,4,7,12,13,13,19];
let result = removeDupe(arr);
console.log(result);