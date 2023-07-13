
function computeFactorialOfN(n) {
    // your code here

    let total = 1;

    for(let i = 2; i <= n; i++){
        total *= i;
    }
    
    return total;
}

// ******************************************************************************************************************************


function repeatString(string, num) {
    // your code here

    if(num === 0){
        return '';
    }

    let str = string

    for(let i = 1; i < num; i++){
        string += str;
    }

    return string;
}

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'

var output = repeatString('code', 0);
console.log(output); // --> 'codecodecode'