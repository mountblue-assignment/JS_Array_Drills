const flattenFunc=require('../flatten');

let arr=[1,2,[4,[5,6,[8,9,10]]],5,[6,7]];

let flattenArr=flattenFunc(arr,true);

console.log('Flatten Array of depth-1: ',flattenArr);

flattenArr=flattenFunc(arr,2);

console.log('Flatten Array of depth-2: ',flattenArr);