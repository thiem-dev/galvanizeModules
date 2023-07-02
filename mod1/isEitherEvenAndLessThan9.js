function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    /* START SOLUTION */
      // your code here
      /* START SOLUTION */
      
      var evenCheck = isEitherOdd(num1, num2);
      var isNum1E = !evenCheck[0];
      var isNum2E = !evenCheck[1];
  
      if((isNum1E || isNum2E) && num1 < 9 && num2 < 9){
          return true;
      } else if(!isNum1E && !isNum2E){
        return false;
      } else if(num1 < 9 || num2 < 9){
          return false
      } else{
          return false;
      }
      
      
      /* END SOLUTION */
    }
  
    //this is flipped of the odd comparison via remainder from mod 2 
  function isEitherOdd(num1, num2){
          
    let numArray = [num1, num2];
    let isEvenArray = [];
    
    
    for(let i = 0; i < numArray.length; i++){
      let res =  Math.abs(numArray[i]%2);
      if (res === 0){
        isEvenArray[i] = false;
      } else if(res >= 1){
        isEvenArray[i] = true;
      } else {
        isEvenArray[i] = false;
      }
    }

    return isEvenArray;

    /* END SOLUTION */
}

// var output = isEitherEvenAndLessThan9(2, 4);
// console.log(output); // --> true

// var output = isEitherEvenAndLessThan9(72, 2);
// console.log(output); // --> false

var output = isEitherEvenAndLessThan9(13, 15);
console.log(output); // --> false