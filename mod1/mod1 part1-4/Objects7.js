function getElementsThatEqual10AtProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    let arr = obj[`${key}`];
    let arr2 = [];
    
    if(!Array.isArray(arr)){
        return [];
    } else if(arr.length === 0){
        return [];
    }


    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 10){
            arr2.push(arr[i]);
        }
    }

    return arr2;
    /* END SOLUTION */
  }


//   var obj = {
//     key: [1000, 10, 50, 10]
//   };

//   var obj2 = {
//     key: []
//   };
//   var output = getElementsThatEqual10AtProperty(obj, 'key');
//   console.log(output); // --> [10, 10]

//   var output = getElementsThatEqual10AtProperty(obj2, 'key');
//   console.log(output); // --> []


// ******************************************************************************************************************************

function getElementsLessThan100AtProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    let arr = obj[`${key}`];
    let arr2 = [];
    
    if(!Array.isArray(arr)){
        return [];
    } else if(arr.length === 0){
        return [];
    }


    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 100){
            arr2.push(arr[i]);
        }
    }

    return arr2;
    /* END SOLUTION */
  }

//   var obj = {
//     key: [1000, 20, 50, 500]
//   };
//   var output = getElementsLessThan100AtProperty(obj, 'key');
//   console.log(output); // --> [20, 50]

// ******************************************************************************************************************************

// ******************************************************************************************************************************

