function multiplyBetween(num1, num2) {
    // your code here

    let start = num1;
    let end = num2;

    if(start > end){
        [start, end] = [start, end];
        return 0; 
    }

    if(start === end){
        return 0;
    }

    let product = 1;

    for(let i = start; i < end; i++){ //2 3
        product *= i;
    }


    return product;

  }



// ******************************************************************************************************************************


function computeSumBetween(num1, num2) {
    // your code here

    //reorders the min and maximum so that Gauss formula executes properly
    let min = num1;
    let max = num2;

    if(min > max){
        [min, max] = [max, min];
        return 0; 
    }

    let total = sumAll(min, max);

    return total - num2; //because galvanize did the forumla weird.. it excludes the end num in range >.< face
}


    //see Gauss Summation formula: https://letstalkscience.ca/educational-resources/backgrounders/gauss-summation 
function sumAll(min, max) {
    return ((max-min)+1) * (min + max) / 2;
}


var output = computeSumBetween(1, 4);
console.log(output); 

var output = computeSumBetween(2, 5);
console.log(output); // --> 9

var output = computeSumBetween(2, -5);
console.log(output); 

var output = computeSumBetween(-2, -5);
console.log(output); 