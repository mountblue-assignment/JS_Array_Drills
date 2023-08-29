// Do NOT use .filter, to complete this function.
// Similar to `find` but you will return an array of all elements that passed the truth test
// Return an empty array if no elements pass the truth test

function filter(elements, cb) {

    let targetElementsArr=[];

      for(let index=0;index<elements.length;index++){
           if(cb(elements[index])){
            targetElementsArr.push(elements[index]);
           }
      }
      return targetElementsArr;
}

module.exports=filter;