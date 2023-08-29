const mapFunc=require('../map');

const items = [1, 2, 3, 4, 5, 5];

 function squareFunc(element){
     return element*element;
 }

let squares=mapFunc(items,squareFunc);

console.log(`square of ${items} : ${squares}`);