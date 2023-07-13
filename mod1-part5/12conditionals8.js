function convertScoreToGrade(score) {
    // your code here

    switch(true){
        case (score <= 100 && score >= 90):
            return 'A';
            break;
        case (score <= 89 && score >= 80):
            return 'B';
            break;
        case (score <= 79 && score >= 70):
            return 'C';
            break;
        case (score <= 69 && score >= 60):
            return 'D';
            break;
        case (score <= 59 && score >= 0):
            return 'F';
            break;
        case (score > 100 || score < 0 ):
            return 'INVALID SCORE';
    }
}


// ******************************************************************************************************************************

function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here

    switch(true){
        case (score === 100):
            return 'A+';
            break;
        case (score < 100 && score >= 90):
            return addPlusAndMinus(score, 'A');
            break;
        case (score <= 89 && score >= 80):
            return addPlusAndMinus(score, 'B');
            break;
        case (score <= 79 && score >= 70):
            return addPlusAndMinus(score, 'C');
            break;
        case (score <= 69 && score >= 60):
            return addPlusAndMinus(score, 'D');
            break;
        case (score <= 59 && score >= 0):
            return 'F';
            break;
        case (score > 100 || score < 0 ):
            return 'INVALID SCORE';
    }


}

function addPlusAndMinus(score, letter){
    let digits = (""+score).split("");
    if(digits.length === 2){
        let numArr = digits.map(Number);
        let secondDigit = numArr[1];

        let finalScore = '';

        if(secondDigit >= 0 && secondDigit <= 2){
            finalScore = letter.toString() + "-";
            return finalScore;
        } else if(secondDigit === 8 || secondDigit === 9){
            finalScore = letter.toString() + "+";
            return finalScore;
        }
    }

    return letter;
}

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output, 1); // --> 'A'

var output = convertScoreToGradeWithPlusAndMinus(101);
console.log(output, 2); 

var output = convertScoreToGradeWithPlusAndMinus(-1);
console.log(output, 3); 

var output = convertScoreToGradeWithPlusAndMinus(85);
console.log(output, 4); 

var output = convertScoreToGradeWithPlusAndMinus(79);
console.log(output, 5); 

var output = convertScoreToGradeWithPlusAndMinus(98);
console.log(output, 6); 

var output = convertScoreToGradeWithPlusAndMinus(99);
console.log(output, 7); 

