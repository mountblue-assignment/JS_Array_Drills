// Flattens a nested array (the nesting can be to any depth).
// Hint: You can solve this using recursion.
// Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];



function flatten(elements,level) {
 

    let flattenArr=[];
    let depth=level;

     if(level===true){
        depth=1;
     }

  /*approach:-
  we will iterate over array and will check if any element of array is array or not 
  if we get any element that is array so we will again call flatten function and pass that element
   when it will return array as result so we will store into flatternArr using spread operator
 */ 
    
    for(let index=0;index<elements.length;index++){

        //for checking if any element is array or not , we will use isArray method

        if(Array.isArray(elements[index]) && depth>0){
            // console.log('Arr: ',elements[index]);
          flattenArr.push(...flatten(elements[index],depth-1));
        }
        else{
            // console.log('element:',elements[index]);
            flattenArr.push(elements[index]);
        }
    }
 return flattenArr;
}


module.exports=flatten;

