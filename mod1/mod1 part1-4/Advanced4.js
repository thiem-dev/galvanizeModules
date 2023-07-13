function countAllCharacters(str) {
// your code here
/* START SOLUTION */

var objectOfCounts = {};

if(str.length === 0){
    return {};
}

for(let index = 0; index < str.length; index++){
    let currentItem = str[index];
    if(objectOfCounts[currentItem] === undefined){
        // make it an integer with value of 1
        objectOfCounts[currentItem] = 1;
    } else {
        // increment value in count object by 1
        objectOfCounts[currentItem]++;
      }

    // console.log(objectOfCounts);
}

return objectOfCounts;

/* END SOLUTION */
}


var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}