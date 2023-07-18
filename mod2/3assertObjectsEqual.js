function assertObjectsEqual(actual, expected, testName) {
    // your code here
    let expectedStr = JSON.stringify(expected);
    let actualStr = JSON.stringify(actual);

    console.log(expectedStr);
    console.log(actualStr);

    let compared = false;

    if((actual.length === expected.length) && (expectedStr === actualStr)){
      compared = true;
    }

    if(compared){
        console.log('passed');
    } else{
        console.log(`FAILED [${testName}] Expected ${expectedStr}, but got ${actualStr}`);
    }

    // console.log(`Does ${actual} equal ${expected}? :`, compared);
}
