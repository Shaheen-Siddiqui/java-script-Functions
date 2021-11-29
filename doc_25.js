

function positive(list){
    count=0;
    count1=0;
    for(i=0;i<list.length;i++){
     if(list[i]<0){
         count=count+1
        
     } 
     else if(list[i]>0){
         count1=count1+1
        
     } 
    }
console.log("negetive numbers",count);
console.log("positive numbers",count1);

}positive ([2, -7, 5, -64, -14,-3,-4,-5,-6,])