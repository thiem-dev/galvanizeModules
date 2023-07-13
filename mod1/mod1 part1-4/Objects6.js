function removeArrayValues(obj) {
    // your code here
    /* START SOLUTION */
    for(const [key, value] of Object.entries(obj)){
        // console.log(key, value, 'is an array', Array.isArray(value))
        if(Array.isArray(value)){
            delete obj[`${key}`];
        }
    }
    return obj;
    /* END SOLUTION */
}


// ******************************************************************************************************************************

function removeNumberValues(obj) {
    // your code here
    /* START SOLUTION */
    for(const [key, value] of Object.entries(obj)){
        // console.log(key, value, 'is an array', Array.isArray(value))
        if(typeof(value) === "number"){
            delete obj[`${key}`];
        }
    }
    return obj;
    /* END SOLUTION */
  }


  
// ******************************************************************************************************************************


function removeStringValues(obj) {
    // your code here
    /* START SOLUTION */
    for(const [key, value] of Object.entries(obj)){
        // console.log(key, value, 'is an array', Array.isArray(value))
        if(typeof(value) === "string"){
            delete obj[`${key}`];
        }
    }
    return obj;
    /* END SOLUTION */
  }