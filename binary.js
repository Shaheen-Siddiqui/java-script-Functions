binary_number = [1,1,1,1];
sum=0;
count=1;
for(i=binary_number.length-1; i>=0; i--){
    if(i>=0){
        
    value= binary_number[i]*count;
    count=count*2;
    sum=sum+value;
 }
}
console.log(sum);