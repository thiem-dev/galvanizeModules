
function getSmallestElementAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let shortest = 0;

    let arr = obj[`${key}`];

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return undefined;
    } else if(arr.length === 0){
        return undefined;
    }

    for(let i = 0; i < arr.length; i++){
        if(shortest === 0){
            shortest = arr[i];
            continue;
        }
        if(arr[i] < shortest){
            shortest = arr[i]
        }
    }
    
    return shortest;
    /* END SOLUTION */
}




// ******************************************************************************************************************************
function getLargestElementAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let largest = 0;

    let arr = obj[`${key}`];

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return undefined;
    } else if(arr.length === 0){
        return undefined;
    }

    for(let i = 0; i < arr.length; i++){
        if(largest === 0){
            largest = arr[i];
            continue;
        }
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    
    return largest;
    /* END SOLUTION */
  }

// ******************************************************************************************************************************
function getAllButLastElementOfProperty(obj, key) {
    // your code here
    /* START SOLUTION */

    let arr = obj[`${key}`];

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return [];
    } else if(arr.length === 0){
        return [];
    }

    arr.pop();

    return arr;
    /* END SOLUTION */
  }

// ******************************************************************************************************************************
function getElementOfArrayProperty(obj, key, index) {
    // your code here

    let arr = obj[`${key}`];

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return undefined;
    } else if(arr.length === 0){
        return undefined;
    }

    if(index > arr.length){
        return undefined;
    }

    return arr[index];
  }

// ******************************************************************************************************************************