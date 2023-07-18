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

    // console.log(classNamesWithAges);
    return classNamesWithAges;


    // returns an array of these objects
}
  
    // ASSERTION FUNCTION(S) TO BE USED

    // TESTS CASES




var classList = ["Joe", "Jack", "John", "Fred", "Frank", "Barry", "Larry", "Mary",
"Harry", "Farrell", "Susan", "Monica", "Keira", "Caroline", "Harriet", "Erica",
"Luann", "Cheryl", "Beth", "Rupa", "Linda", "Allison", "Nancy", "Dora"];

let output = decorateClassListWithAges(classList)
console.log(output)