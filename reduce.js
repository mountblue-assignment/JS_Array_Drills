/*
 Do NOT use .reduce to complete this function.

How reduce works: A reduce function combines all elements into a single value going from left to right.
Elements will be passed one by one into `cb` along with the `startingValue`.
`startingValue` should be the first argument passed to `cb` 
  the array element should be the second argument.
`startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.

*/


function reduce(elements, cb, startingValue) {
     
     let index=0;
      
     /* we will check if startingValue is undefined so we will start our 
     loop from index=1 and will use first element of array as starting value
      
     if startingValue is not undefined our loop will start from index=0;
     */
     if(startingValue===undefined){

        index=1;
        startingValue=elements[0];
       }
     
     let accumulator=startingValue;

     for(;index<elements.length;index++){

        accumulator=cb(accumulator,elements[index],index);
     }

     return accumulator;
}

module.exports=reduce;