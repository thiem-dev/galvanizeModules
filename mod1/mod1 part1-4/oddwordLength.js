function isOddLength(word) {
    // your code here
    /* START SOLUTION */
    let numArray = [word.length];
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
    
      if(boolArray[0]){
          return true
      } else{
          return false;
      }
    /* END SOLUTION */
  }