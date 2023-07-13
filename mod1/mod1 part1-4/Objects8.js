function getElementsGreaterThan10AtProperty(obj, key) {
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
        if(arr[i] > 10){
            arr2.push(arr[i]);
        }
    }

    return arr2;
    /* END SOLUTION */
}

// ******************************************************************************************************************************

function getFirstElementOfProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let arr = obj[`${key}`];
    let arr2 = [];
    
    if(!Array.isArray(arr) || arr === undefined){
        return undefined;
    } else if(arr.length === 0){
        return undefined;
    }


    return arr[0];

    /* END SOLUTION */
}

// ******************************************************************************************************************************

function getNthElementOfProperty(obj, key, n) {
// your code here
/* START SOLUTION */
    let arr = obj[`${key}`];
    let arr2 = [];

    if(!Array.isArray(arr) || arr === undefined){
        return undefined;
    } else if(arr.length === 0){
        return undefined;
    }


    return arr[n];
/* END SOLUTION */
}



// ******************************************************************************************************************************


function getLastElementOfProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let arr = obj[`${key}`];
    let arr2 = [];

    if(!Array.isArray(arr) || arr === undefined){
        return undefined;
    } else if(arr.length === 0){
        return undefined;
    }


    return arr[arr.length - 1];
    /* END SOLUTION */
}
