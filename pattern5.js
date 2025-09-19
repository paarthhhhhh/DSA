let n=5;
for(i=0;i<n;i++){
    row=" ";
    for(j=0;j<n-(i+1);j++){     //adding empty spaces
        row=row+" ";
    }
    for(k=0;k<i+1;k++){         //adding stars
        row=row+"*";
    }
    console.log(row);
}