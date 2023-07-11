function calculateBillTotal(preTaxAndTipAmount) {
    // your code here

    let salesTax = preTaxAndTipAmount * .095;
    let tip = preTaxAndTipAmount * .15;
    let total = salesTax + tip + preTaxAndTipAmount;
    console.log(total);

    return total;
  }


  var output = calculateBillTotal(20);
console.log(output); // --> 24.9
