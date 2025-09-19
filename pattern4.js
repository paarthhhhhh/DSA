let n=5;
for(i=0;i<5;i++){
    row="";
    for(j=0;j<n;j++){
        row=row+ (j+1);      //can use i for a diffrent pattern
    }
    n--;
    console.log(row);
}