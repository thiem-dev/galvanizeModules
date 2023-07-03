function areValidCredentials(name, password) {
    // your code here
    /* START SOLUTION */
    if(name.length > 3 && password.length > 8){
        return true;
    } else{
        return false;
    }
    /* END SOLUTION */
}


// ******************************************************************************************************************************

function findMinLengthOfThreeWords(word1, word2, word3) {
    // your code here
    /* START SOLUTION */
    let arr = [word1, word2, word3];

    arr = arr.sort(function(a,b){
        // return b.length - a.length; //sorts by longest str length
        return a.length - b.length;
    });

    return arr[0].length;

    /* END SOLUTION */
  }

//   var output = findMinLengthOfThreeWords('500', 'be32423u', 'see7');
// console.log(output); // --> 1


// ******************************************************************************************************************************

function findMaxLengthOfThreeWords(word1, word2, word3) {
    // your code here
    /* START SOLUTION */
    let arr = [word1, word2, word3];

    arr = arr.sort(function(a,b){
        return b.length - a.length; //sorts by longest str length
        // return a.length - b.length; //sorts by shortest str length
    });

    return arr[0].length;
    /* END SOLUTION */
  }