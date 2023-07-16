/* Complete the logger function that takes in a function and a string and returns the result of calling the function on each letter in the string
*/

function logger(func, str) {
    //Your psuedocode here

    //only one type of way str can work therefore, no need to check for params 
    //run code and see what expected test results are for logger function's return datatype
        //just checked. expected data return is a string


    //check if str is empty or undefined always
    //

    //loop through elements of string via: for (letter of string) or use .slice
        //log out the results of calling the function //will I have to assign multiple results into an array or obj for return?
        //assign results to str2 with the += (addition assignment) //will there be a delimiter? 

    //return str2



    //Your code here ******************************************************************************************************

    // str was empty string, false, 0, null, undefined
    if(!str) { 
        return "string is empty, null, or undefined";
    }

    let str2 = "" //create str2 assign it empty string for expectations

    for(const letter of str){
        str2 += func(letter);
    }

    return str2; //return str2
  
  }