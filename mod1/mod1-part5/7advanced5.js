function sumDigits(num) {
    // your code here

    // console.log(num, typeof(num));

    let strNum = num.toString();
    let total = 0;
    let neg = 1;

    // console.log(strNum);
    // for(const char of strNum){
    //     let digit = Number(char);
    //     console.log(char, typeof(char));
    //     console.log(digit, typeof(digit));
    // }

    for(const digit of strNum){
        if(digit === '-'){
            neg = -1;
        } else{
            total += neg*Number(digit);
            neg = 1;
        }
        
    }

    return total;

  }

let test1 = 2002;
let test2 = -2002;

let output = sumDigits(test1)
console.log(output);

let output2 = sumDigits(test2)
console.log(output2);