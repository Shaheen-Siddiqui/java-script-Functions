
function result(min,max,step) {
    range = max+step;
    empaty=[];
    for(i=min;i<=range;i=i+step){
        if(i!=range){
            empaty.push(i)
        }
    }
    console.log(empaty);
    
}result(2,10,2)