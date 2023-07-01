function countCharacter(str, char) {
    // your code here
    /* START SOLUTION */
    var objectOfCounts = {};

    // we loop over the array of items to count
    for (var i = 0; i < str.length; i++) {
      var currentItem = str[i];
      // if we have not counted current item
      if (objectOfCounts[currentItem] === undefined) {
        // add it to count object with a value of 1
        objectOfCounts[currentItem] = 1;
      // otherwise (we have counted it at least once)
      } else {
        // increment value in count object by 1
        objectOfCounts[currentItem]++;
      }
    }

    if(objectOfCounts[char] === 0 || objectOfCounts[char] === undefined){
        return 0;
    } else{
        return objectOfCounts[char];
    }

    /* END SOLUTION */
}

var output = countCharacter('I am a hacker', 'z');
console.log(output); // --> 3