
let filterFunc=require('../filter');

const items = [1, 2, 3, 4, 5, 5];

 function isEvenNumber(element){
     if(element%2==0){
        return true;
     }
     else {
       return false;
     }
 }

let evenNumbers=filterFunc(items,isEvenNumber);

console.log("Even Numbers :",evenNumbers);