function findSmallestElement(arr) {
// your code here
    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return 0;
    } else if(arr.length === 0){
        return 0;
    }

    //ascending ord
    arr.sort((a, b) => a-b);
    // console.log(arr);
    return arr[0];

    
}

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

// ******************************************************************************************************************************
function findShortestElement(arr) {
    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return '';
    } else if(arr.length === 0){
        return '';
    }
    
    arr.sort((a, b) => a.length-b.length);
    
    return arr[0];
    
}





