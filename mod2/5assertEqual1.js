
// FUNCTION DEFINITION(S)
function square(n) {
    return n * n;
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






// ********************************************


/*
function addOne(val) {
    return val + 1;
  }
  
  // ASSERTION FUNCTION(S) TO BE USED
  function assert(condition, testName) {
    if (condition) {
      console.log('passed');
    } else {
      console.log('FAILED [' + testName + ']');
    }
  }

*/