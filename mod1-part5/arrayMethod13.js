function getLargestElement(arr) {
// your code here

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return 0;
    } else if(arr.length === 0){
        return 0;
    }

    arr.sort((b, a) => a-b);

    return arr[0];

}


// ******************************************************************************************************************************


// ******************************************************************************************************************************

