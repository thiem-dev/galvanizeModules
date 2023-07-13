function removeElement(array, discarder) {
// your code here
/* START SOLUTION */

    if(array.length === 0){
        return [];
    }

    let arr2 = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] !== discarder){
            arr2.push(array[i]);
        }
    }

    return arr2;
/* END SOLUTION */
}

// ******************************************************************************************************************************
function keep(array, keeper) {
    // your code here
    /* START SOLUTION */
    if(array.length === 0){
        return [];
    }

    let arr2 = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] === keeper){
            arr2.push(array[i]);
        }
    }

    return arr2;
    /* END SOLUTION */
  }


// ******************************************************************************************************************************

function computeAverageOfNumbers(nums) {
// your code here
/* START SOLUTION */
    if(nums.length === 0){
        return 0;
    }

    let avg = 0;
    let total = 0;

    for(let i = 0; i< nums.length; i++){
        total += nums[i];
    }

    avg = total/nums.length;

    return avg;
/* END SOLUTION */
}

// ******************************************************************************************************************************
