const sculptureList = require('./data.js'); // import data.js

const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
//for (const key in element){
//    console.log(`${key}: ${element[key].length}`)
//}
const sculptureListLengths = {};
sculptureList.forEach((sculpture, index) => {
  sculptureListLengths[index] = {};
  Object.keys(sculpture).forEach(key => {
    sculptureListLengths[index][key] = sculpture[key].length;
  });

console.log(JSON.stringify(sculptureListLengths[index],null,2));
});