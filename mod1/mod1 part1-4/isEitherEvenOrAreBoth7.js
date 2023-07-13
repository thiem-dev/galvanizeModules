function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    /* START SOLUTION */
    
    var evenCheck = isEitherEven(num1, num2);


    if(evenCheck){
        return true;
    } else if(num1 === 7 && num2 === 7){
        return true;
    } else{
        return false;
    }
    
    
    /* END SOLUTION */
  }

  //this is flipped of the odd comparison via remainder from mod 2
function isEitherEven(num1, num2){
        
  let numArray = [num1, num2];
  let boolArray = [];
  
  
  for(let i = 0; i < numArray.length; i++){
    let res =  Math.abs(numArray[i]%2);
    if (res === 0){
        boolArray[i] = false;
    } else if(res >= 1){
        boolArray[i] = true;
    } else {
        boolArray[i] = false;
    }
  }
  
    if(!boolArray[0] || !boolArray[1]){
        
        return true;
    } 
    else {
        return false;
    }
}


var output = isEitherEvenOrAreBoth7(3, 7);
console.log(output); // --> false

var output = isEitherEvenOrAreBoth7(2, 3);
console.log(output); // --> true