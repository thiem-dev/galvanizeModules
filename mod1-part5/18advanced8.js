function isEvenWithoutModulo(num) {
    // your code here

    return !isOddWithoutModulo(num);
}


function isOddWithoutModulo(num) {
    // your code here

    if(num === 0){
        return false;
    }

    if(typeof(num) !== 'number'){
        return 'Invalid Number';
    }

    if((num/2) === Math.floor(num/2)){
        return false;
    } else{
        return true;
    }

}