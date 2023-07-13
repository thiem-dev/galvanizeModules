//this is just flipped of the oddComparison. if both are even return true;
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
//if both are even return true; 
  if(!boolArray[0] || !boolArray[1]){
      return true
  } 
  else {
      return false;
  }