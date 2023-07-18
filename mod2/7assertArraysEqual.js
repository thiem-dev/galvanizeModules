// FUNCTION DEFINITION(S)
function map(array, callbackFunction) {
    var newArray = [];
  
    for (var i = 0; i < array.length; i++) {
      newArray = newArray + callbackFunction(element);
    }
  
    return newArray;
  }
  
  function cubeAll(numbers) {
    return map(numbers, function(n) {
      return n * n;
    });
  }
  
  // ASSERTION FUNCTION(S) TO BE USED

function assertArraysEqual(condition, testName){
    if(condition){
        console.log('passed');
    } else {
        console.log(`FAILED [ ${testName} ]`);
    }
}
  
  // TESTS CASES
  
assertArraysEqual(false, 'is it squared');