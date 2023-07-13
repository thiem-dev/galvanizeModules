function squareElements(arr) {
    // your code here

    let sqrd = [];

    if(arr.length === 0){
        //
    }

    for(let i = 0; i < arr.length; i++){
        sqrd[i] = arr[i]**2;
    }

    return sqrd;
  }


// ******************************************************************************************************************************

function filterOddElements(arr) {
    // your code here

    let outputArr = [];

    for(let i = 0; i < arr.length; i++){
        let remaind = arr[i]%2;
        if(remaind === 0){
            //do nothing
        } else if(remaind >= 1){
            outputArr.push(arr[i]);
        }
    }

    return outputArr;
  }


// ******************************************************************************************************************************
function computeProductOfAllElements(arr) {
    // your code here

    if(arr.length === 0){
        return 0;
    }

    let total = 0;

    for(let i = 0; i < arr.length; i++){
        if(total === 0){
            total = arr[i];
        } else {
            total *= arr[i];
        }
    }

    return total;
  }

// ******************************************************************************************************************************

