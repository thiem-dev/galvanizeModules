/* START SOLUTION */
function removeEvenValues(obj) {
    var isValEven = false;
    for(const key in obj){
        isValEven = isEven(obj[`${key}`])
        if(isValEven){
            delete obj[`${key}`];
        }
            
    }
    return obj;
}


function isEven(val){
    
    let res =  Math.abs(val%2);
      if (res === 0){
          return true;
      } else if(res >= 1){
          return false;
      } else {
          return false;
      }

}

  
/* END SOLUTION */
// ******************************************************************************************************************************

function countNumberOfKeys(obj) {
    // your code here
    /* START SOLUTION */
      return Object.keys(obj).length;
    /* END SOLUTION */
}

// ******************************************************************************************************************************


function removeOddValues(obj) {
    // your code here
    /* START SOLUTION */
    var isValEven = false;
    for(const key in obj){
        isValEven = isEven(obj[`${key}`])
        if(!isValEven){
            delete obj[`${key}`];
        }
            
    }
    return obj;
    /* END SOLUTION */
}


function isEven(val){
    
    let res =  Math.abs(val%2);
      if (res === 0){
          return true;
      } else if(res >= 1){
          return false;
      } else {
          return false;
      }

}

// ******************************************************************************************************************************