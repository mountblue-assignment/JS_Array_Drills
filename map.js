// Do NOT use .map, to complete this function.
/* 
How map works: Map calls a provided callback function once
for each element in an array,  in order, and function constructs a new array from the res .
Produces a new array of values by mapping each value in list 
through a transformation function (iteratee).
 Return the new array.
*/

function map(elements, cb) {
  
     let resultArr=[];

    for(let index=0;index<elements.length;index++){

    /*we will pass array's element, index in cb function so it will return some value 
     then we will store that value to new array (resultArr)
     */ 
         let newValue=cb(elements[index],index);
         resultArr.push(newValue);
    }
    
    /*after Iterating over a list of elements and storing in new Array we will
    return that new Array ; 
    */
     
    return resultArr;
}

module.exports=map;