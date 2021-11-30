var a = require("readline-sync")
var num = a.questionInt("Enter any number")

count=0
var i=0
while(num>i){

    if (num%i==0){
        count=count+1}
        i++;

}
if (count==1){
    console.log("prime Number");
}
else{
    console.log("Not Prime");
}

