function countWords(str) {
    // your code here
    /* START SOLUTION */
    if(str === ''){
        return {};
    }

    var words = str.split(' ');

    var objectOfCounts = {};

    // we loop over the array of items to count
    for (var i = 0; i < words.length; i++) {
      var currentItem = words[i];
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

    if(Object.keys(objectOfCounts) === [] || Object.keys(objectOfCounts).length === 0){
        objectOfCounts = {}
        return objectOfCounts;
    } else{
        console.log("inside");
        console.log(objectOfCounts);
        return objectOfCounts;
    }
    /* END SOLUTION */
  }

var output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}

output = countWords('');
console.log(output); 