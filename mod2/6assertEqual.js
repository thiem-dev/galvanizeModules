// Note: This is a simple, albeit temporarily incorrect implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

// FUNCTION DEFINITION(S)
function every(array, callbackFunction) {
    var doesEveryElementMatch = true;
  
    for (var i = 0; i < array.length; i++) {
      doesEveryElementMatch = callbackFunction(array[i]);
    }
  
    return doesEveryElementMatch;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
function assertEqual(condition, testName){
    if(condition){
        console.log('passed');
    } else {
        console.log(`FAILED [ ${testName} ]`);
    }
}
  
  // TESTS CASES
  
assertEqual(false, 'is it squared');