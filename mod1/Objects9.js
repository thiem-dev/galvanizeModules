function getOddLengthWordsAtProperty(obj, key) {
// your code here
/* START SOLUTION */

    let wordArray = obj[`${key}`];

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


var obj = {
    key: ['It', 'has', 'some', 'words']
  };
  var output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']


// var obj2 = {};
// var output = getOddLengthWordsAtProperty(obj2, 'key');
// console.log(output); // --> [undefined]

//   var obj3 = {
//     key: []
//   };
//   var output = getOddLengthWordsAtProperty(obj3, 'key');
//   console.log(output); // --> ['has', 'words']

var obj4 = {
    key: ['It', 'ha', 'some', 'wordes']
  };
  var output = getOddLengthWordsAtProperty(obj4, 'key');
  console.log(output); 


// ******************************************************************************************************************************

function getAverageOfElementsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    let numArray = obj[`${key}`];

    if(!Array.isArray(numArray) || numArray === undefined){
        // console.log('object is empty');
        return 0;
    } else if(numArray.length === 0){
        return 0;
    }

    let avg = 0;
    let total = 0;

    for(let i = 0; i < numArray.length; i++){
        total += numArray[i];
    }

    avg = total/numArray.length;
    return avg;
    /* END SOLUTION */
}



// ******************************************************************************************************************************


function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
    /* START SOLUTION */
    
        let wordArray = obj[`${key}`];
    
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