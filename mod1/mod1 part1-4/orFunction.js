function or(expression1, expression2) {
    // your code here
    /* START SOLUTION */
    if(expression1 && expression2){
      return true;
    } else if(expression1){
        return true;
    } else if(expression2){
        return true;
    } else if(!expression1 && !expression2)
      return false;
    /* END SOLUTION */
  }


// Write a function called "or".

// Given 2 boolean expressions, "or" returns true or false, corresponding to the '||' operator. Notes:

// Do not use the || operator.
// Use ! and && operators instead.
// var output = or(true, false);
// console.log(output); // --> true;