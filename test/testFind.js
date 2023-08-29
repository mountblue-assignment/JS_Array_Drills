const findFunc=require('../find');

const items = [1, 2, 3, 4, 5, 5];

 function isEvenNumber(element){
     if(element%2==0){
        return true;
     }
 }

const evenNumber=findFunc(items,isEvenNumber);

console.log("Even Number :",evenNumber);