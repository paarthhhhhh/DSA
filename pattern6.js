for(i=0;i<6;i++){
    row=" ";
    let x=1;    //move this outside for diffrent pattern
    for(j=0;j<i+1;j++){
        row=row+x;
        if(x==1){
            x=0;
        }
        else{
            x=1;
        }
    }
    console.log(row);
}