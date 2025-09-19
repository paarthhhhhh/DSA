let n=1;
for(i=0;i<5;i++){
    row="";
    for(j=0;j<n;j++){
        row=row+ (i+1);      //can use j for a diffrent pattern
    }
    n++
    console.log(row);
}