function getSquaredElementsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let numArray = obj[`${key}`];

    if(!Array.isArray(numArray) || numArray === undefined){
        // console.log('object is empty');
        return [];
    } else if(numArray.length === 0){
        return [];
    }

    let sqrd = []

    for(let i = 0; i < numArray.length; i++){
        sqrd.push(numArray[i]**2);
    }

    return sqrd;
}

// ******************************************************************************************************************************
function getOddElementsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    
        let objArr = obj[`${key}`];
    
        if(!Array.isArray(objArr) || objArr === undefined){
            // console.log('object is empty');
            return [];
        } else if(objArr.length === 0){
            return [];
        }
    
        let oddArray = [];
    
        for(let i = 0; i < objArr.length; i++){
            let res =  Math.abs(objArr[i]%2);
            if (res === 0){
                //do nothing
            } else if(res >= 1){
                
                oddArray.push(objArr[i]);
            } else {
                console.log('should not ever get here');
            }
        }
    
        return oddArray;
    
    
    /* END SOLUTION */
}

// ******************************************************************************************************************************
function getEvenElementsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let objArr = obj[`${key}`];
    
    if(!Array.isArray(objArr) || objArr === undefined){
        // console.log('object is empty');
        return [];
    } else if(objArr.length === 0){
        return [];
    }

    let returnArr = [];

    for(let i = 0; i < objArr.length; i++){
        let res =  Math.abs(objArr[i]%2);
        if (res === 0){
            returnArr.push(objArr[i]);
        } else if(res >= 1){
            //do nothing
        } else {
            console.log('should not ever get here');
        }
    }

    return returnArr;
    /* END SOLUTION */
  }

// ******************************************************************************************************************************


// ******************************************************************************************************************************