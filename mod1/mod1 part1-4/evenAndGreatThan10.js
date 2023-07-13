function isEvenAndGreaterThanTen(num) {
    // your code here
    /* START SOLUTION */
      let numArray = [num];
        let boolArray = [];
        
        //computes whether param given is even or odd via % operator
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
        
        //function returns if param was even and greater than 10
          if(!boolArray[0] && num > 10){
              return true
          } else{
              return false;
          }
          
          
    /* END SOLUTION */
  }