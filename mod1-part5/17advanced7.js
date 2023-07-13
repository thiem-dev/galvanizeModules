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


var output = isOddWithoutModulo(3);
console.log(output); // --> true


var output = isOddWithoutModulo(1024);
console.log(output); // --> true