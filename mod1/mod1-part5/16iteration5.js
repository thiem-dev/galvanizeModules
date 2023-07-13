function multiply(num1, num2) {
    // your code here

    if(num1 === 0 || num2 === 0){
        return 0;
    } else if(num1 < 0 && num2 < 0){
        num1 = Math.abs(num1);
        num2 = Math.abs(num2);
    }

    let adder = num2;

    for(let i = 1; i < num1; i++){
        num2 += adder;
    }

    return num2;
  }

  var output = multiply(4, 7);
console.log(output); // --> 28

var output = multiply(-4, -7);
console.log(output); // --> 28