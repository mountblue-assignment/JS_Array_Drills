const eachFunc=require('../each');


const items = [1, 2, 3, 4, 5, 5];


  function showData(element,index){
     console.log(`Index: ${index} - Element: ${element}`);
  }

eachFunc(items,showData);