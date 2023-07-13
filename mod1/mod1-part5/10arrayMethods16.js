function getLongestWordOfMixedElements(arr) {
    // your code here

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return '';
    } else if(arr.length === 0){
        return '';
    }

    // //makes everything a number
    // for(let i = 0; i < arr.length; i++){
    //     if(typeof(arr[i]) === 'number'){
    //         arr[i] = arr[i].toString();
    //     }
    // }


    //skips numbers
    let wordArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'number'){ 
            continue;
        } else if(typeof(arr[i]) === 'string'){
            wordArr.push(arr[i]);
        }
    }

    //if no strings exist
    if(wordArr.length === 0){
        return '';
    }

    //loops through and sorts by ASC abc012 order
    for(let i = 0; i < wordArr.length - 1; i++){ //skips last ele
        for(let j = 0; j < wordArr.length - i - 1; j++){
            if(wordArr[j].length < wordArr[j+1].length){ //word length condition
                let tempSwap = wordArr[j];
                wordArr[j] = wordArr[j+1];
                wordArr[j+1] = tempSwap;
            }
        }
    }

    return wordArr[0];
}


// ******************************************************************************************************************************


function getLargestNumberAmongMixedElements(arr) {
    // your code here

    if(!Array.isArray(arr) || arr === undefined){
        // console.log('object is empty');
        return 0;
    } else if(arr.length === 0){
        return 0;
    }

    //skips strings
    let numArr = []
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) !== 'number'){ 
            continue;
        } else if(typeof(arr[i]) !== 'string'){
            numArr.push(arr[i]);
        }
    }

    if(numArr.length === 0){
        return 0;
    }

    //loops through and sorts by ASC abc012 order
    for(let i = 0; i < numArr.length - 1; i++){ //skips last ele
        for(let j = 0; j < numArr.length - i - 1; j++){
            if(numArr[j] < numArr[j+1]){ // length condition
                let tempSwap = numArr[j];
                numArr[j] = numArr[j+1];
                numArr[j+1] = tempSwap;
            }
        }
    }

    console.log(numArr);
    return numArr[0]
}

