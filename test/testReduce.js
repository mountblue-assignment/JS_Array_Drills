const reduceFunc=require('../reduce');

const items = [1, 2, 3, 4, 5, 5];


function sumFunc(accumulator,curElement,index){

    console.log("accumulator Current Value : ",accumulator)
    return accumulator=accumulator+curElement;
}

let sumOfArrayElements=reduceFunc(items,sumFunc);

console.log("Sum of Array's Element: "+sumOfArrayElements);