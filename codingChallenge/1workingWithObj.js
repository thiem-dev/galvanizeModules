function addPropertiesToObject(obj1, obj2) {
    // Your psuedocode here
    
    //first check what params are being passed in
    // console.log(obj1, obj2);

    //loop through obj1 and see if key and value are accessible
    //check if obj2 has key/value of what was accessed in obj1 loop
    //if not then add to obj2. 

    //write tests based on obj1 & obj2 params locally for easier chrome debug step through. 

    
    // Your code here ************************************************************


        //loop through key value pairs of obj1
        for(const [key1, value1] of Object.entries(obj1)){
            //do conditional so nothing is over written
            if(!obj2.hasOwnProperty(key1)){
                obj2[key1] = value1; //assign key value properties of obj1 to obj2
            }
        }
            return obj2;
}


//tests based on what is logged in: for local
let obj1 = { dog: 'bark', cat: 'meow' }
let obj2 = { cow: 'moo', sheep: 'baa' }
let result = addPropertiesToObject(obj1, obj2);
console.log(result); // 1) should return a single object



// { dog: 'bark', cat: 'meow' } { cow: 'moo', sheep: 'baa' }
//     2) should return the second parameter
// { dog: 'bark', cat: 'meow' } { cow: 'moo', sheep: 'baa' }
//     3) should return the second parameter with values from the first
// { puppy: 'woof', kitten: 'purr' } { calf: 'moooo', ewe: 'baaa' }
//     4) the return value should depend on the parameters and not be hard coded