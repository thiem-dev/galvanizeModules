// Skeleton

// FUNCTION DEFINITION(S)
function average(numbers) {
    // uses sum function
    return sum(numbers) / numbers.length


    // returns the average of an array of numbers
  }
  
  function sum(numbers) {
    // returns the sum of an array of numbers
    let sum = 0;
    for(const number of numbers){
        sum += number;
    }

    return sum;

  }
  
  // ASSERTION FUNCTION(S) TO BE USED
function assertAverageEquals(actual, expected, testName){

    let condition = false;
    if(actual === expected){
        condition = true
    }
    if(condition){
        // console.log("passed");
        return `passed [ ${testName} ]`
    } else{
        // console.log(`FAILED [ ${testName} ]`);
        return `FAILED [ ${testName} ]`
    }
}
  
  // TESTS CASES

let numbers1 = [2,2,2,2]
let output = assertAverageEquals(average(numbers1), 2, 'assertAverageEqualsPassing')
console.log(output)


let numbers2 = [2,4,6,8,10]
let output2 = assertAverageEquals(average(numbers2), 6, 'assertAverageEqualsPassing')
console.log(output2)


let numbers3 = [1,2,3,4]
let output3 = assertAverageEquals(average(numbers3), 1.1, 'assertAverageEqualsFailing')
console.log(output3)
