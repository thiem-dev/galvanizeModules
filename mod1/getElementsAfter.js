function getElementsUpTo(array, n) {
    // your code here
    /* START SOLUTION */
      let res = array.slice(0, n);
      
        if(array.length === 0){
            return [];
        } else if(array.length === 1){
            return [];
        } else if(n > array.length){
            return array;
        } else{
            return res;
        }
    /* END SOLUTION */
  }

var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']

var empty = getElementsUpTo([], 2);


var one = getElementsUpTo(['e'], 2);
var two = getElementsUpTo([4], 2);


function getElementsUpToP(array, n) {
    // your code here
    /* START SOLUTION */
      let res = array.slice(0, n);
      
        if(array.length === 0){
            return [];
        } else if(n > array.length){
            return array;
        } else if(array.length === 1){
            return [];
        } else{
            return res;
        }
    /* END SOLUTION */
  }

var output = getElementsUpToP(['a', 'b', 'c', 'd', 'e'], 2);
console.log(output); // --> ['d', 'e']

var empty = getElementsUpToP([], 2);


var one = getElementsUpToP(['e'], 2);
var two = getElementsUpToP([4], 2);