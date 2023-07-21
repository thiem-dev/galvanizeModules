// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
function decorateClassListWithAges(classList) {
    // creates an object for each string in the input array, with an age of 10 or 11
    
    let classNamesWithAges = {};

    for(const name of classList){
        classNamesWithAges[name] = getRandomIntInclusive(10, 11);
    }


    
    // returns an array of these objects

    // console.log(classNamesWithAges);
    return classNamesWithAges;


}
  
    // ASSERTION FUNCTION(S) TO BE USED //expected not used
function assertClassListAges(classList, testName){ 

    let objActual = decorateClassListWithAges(classList);
    let condition = false;

    for(const [key, value] of Object.entries(objActual)){
        if(value === 11 || value === 10){
            condition = true;
        }
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




var classList1 = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

let output = decorateClassListWithAges(classList1)
console.log(output)

let output2 = assertClassListAges(classList1, 'assertClassListAgesPassing')
console.log(output2);

// let output3 = assertClassListAges(testActual, 'assertClassListAgesActual');
// console.log(output3);