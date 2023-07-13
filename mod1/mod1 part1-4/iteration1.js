function getIndexOf(char, str) {
    // cannot use indexOf here -- remove this line before submitting to galvanize
    /* START SOLUTION */
    let charCount = str.split(char).length-1;


    for(let i = 0; i < str.length; i++){
        str.match(char)
    }

    if(charCount === 0){
        return -1;
    } else if(charCount > 1){
        // return str.search(char);
        return str.match(char);

    }

    /* END SOLUTION */
}


  var output = getIndexOf('a', 'I abs am a hacker');
console.log(output); // --> 2

var output = getIndexOf('z', 'I am a hacker');
console.log(output); // --> 2
