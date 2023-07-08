function filterEvenElements(arr) {
    // your code here

    let outputArr = [];

    for(let i = 0; i < arr.length; i++){
        let remaind = arr[i]%2;
        if(remaind === 0){
            outputArr.push(arr[i]);
        } else if(remaind >= 1){
           //do nothing
        }
    }

    return outputArr;

  }

// ******************************************************************************************************************************
function getLengthOfShortestElement(arr) {
    // your code here

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return 0;
    } else if(arr.length === 0){
        return 0;
    }

    arr.sort((a, b) => a.length-b.length);

    return arr[0].length;

}
//   var output = getLengthOfShortestElement(['one', 'two', 'three']);
//   console.log(output); // --> 3

// ******************************************************************************************************************************
function getLongestElement(arr) {
    // your code here

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return '';
    } else if(arr.length === 0){
        return '';
    }

    arr.sort((b, a) => a.length-b.length);

    return arr[0];
  }

// ******************************************************************************************************************************

