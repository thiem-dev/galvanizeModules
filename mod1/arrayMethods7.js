function joinThreeArrays(arr1, arr2, arr3) {
    // your code here
    /* START SOLUTION */
    let bigArr = arr1.concat(arr2)
    bigArr = bigArr.concat(arr3);
    return bigArr;
    /* END SOLUTION */
  }

// ******************************************************************************************************************************

function addToFrontOfNew(arr, element) {
// your code here
/* START SOLUTION */
    let arr2 = [element];
    return arr2.concat(arr);
/* END SOLUTION */
}

// ******************************************************************************************************************************

function addToBackOfNew(arr, element) {
    // your code here
    /* START SOLUTION */
    let arr2 = [element];
    return arr.concat(arr2);
    /* END SOLUTION */
}

// ******************************************************************************************************************************

function getAllElementsButNth(array, n) {
    // your code here
    /* START SOLUTION */
    array.splice(n,1)

    return array;
    /* END SOLUTION */
  }

  var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']