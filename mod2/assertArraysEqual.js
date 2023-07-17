function assertArraysEqual(actual, expected, testName) {
    // your code here


    //compares elements of array in a .every anonymous function
    if((actual.length === expected.length) && expected.every(
        function(element, index){
            return element === actual[index];
        })
    ){
        console.log('passed');
    } else{
        console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
    }

}