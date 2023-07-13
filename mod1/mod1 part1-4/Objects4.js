function removeNumbersLargerThan(num, obj) {
    // your code here
    /* START SOLUTION */
    for(const key in obj){
        if(obj[`${key}`] > num){
            delete obj[`${key}`];
        }
    }
    return obj;
    /* END SOLUTION */
}


function removeNumbersLessThan(num, obj) {
    // your code here
    /* START SOLUTION */
    for(const key in obj){
        if(obj[`${key}`] < num){
            delete obj[`${key}`];
        }
    }
    return obj;
    /* END SOLUTION */
}

function removeStringValuesLongerThan(num, obj) {
    // your code here
    /* START SOLUTION */
    for(const key in obj){
        if(obj[`${key}`].length > num){
            delete obj[`${key}`];
        }
    }
    return obj;
    /* END SOLUTION */
}