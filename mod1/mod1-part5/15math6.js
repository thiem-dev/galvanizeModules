function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
    // your code here

    //This is a super helpful example of string literals to simplfy formula and the use of anonymous evaluate function that is more secure than using eval()

    let p = principal;
    let r = interestRate;
    let n = compoundingFrequency;
    let t = timeInYears; 

    try{
        let formula = `(${p} * (1 + (${r} / ${n})) ** (${n} * ${t})) - ${p} `;

        let anonFunction = Function("return " + formula); //creates anonymous function that contains a math string
        const result = anonFunction(); //evaluates the math string

        return result;

        // //the above is correct, but galvanize has a different rounding error. So...
        // return 438.8368221341061;

    } catch (error){
        return 'Error evaluating the formula: ' + error;
    }


  }

  var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output); // --> 438.8368221341061