
function filterOddLengthWords(words) {
// your code here
/* START SOLUTION */

    let wordArray = words;
        
    if(!Array.isArray(wordArray) || wordArray === undefined){
        // console.log('object is empty');
        return [];
    } else if(wordArray.length === 0){
        return [];
    }

    let oddArray = [];

    for(let i = 0; i < wordArray.length; i++){
        let res =  Math.abs(wordArray[i].length%2);
        if (res === 0){
            //do nothing
        } else if(res >= 1){
            oddArray.push(wordArray[i]);
        } else {
            console.log('should not ever get here');
        }
    }

    return oddArray;


/* END SOLUTION */
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

// ******************************************************************************************************************************


function filterEvenLengthWords(words) {
    // your code here
    /* START SOLUTION */
    
        let wordArray = words;
            
        if(!Array.isArray(wordArray) || wordArray === undefined){
            // console.log('object is empty');
            return [];
        } else if(wordArray.length === 0){
            return [];
        }
    
        let evenArray = [];
    
        for(let i = 0; i < wordArray.length; i++){
            let res =  Math.abs(wordArray[i].length%2);
            if (res === 0){
                evenArray.push(wordArray[i]);
            } else if(res >= 1){
                //do nothing
            } else {
                console.log('should not ever get here');
            }
        }
    
        return evenArray;
    
    
    /* END SOLUTION */
}
// ******************************************************************************************************************************

function getLengthOfLongestElement(arr) {
    // your code here
    /* START SOLUTION */
  
    let longest = 0;

    for(let i = 0; i < arr.length; i++){
        if(longest === 0){
            longest = arr[i].length;
            continue;
        }
        if(arr[i].length > longest){
            longest = arr[i].length
        }
    }

    return longest;


    /* END SOLUTION */
  }

// ******************************************************************************************************************************


// ******************************************************************************************************************************
