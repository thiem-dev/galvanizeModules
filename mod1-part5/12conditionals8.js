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


