function select(arr, obj) {
    // your code here
    /* START SOLUTION */
    
    let obj2 = {};

    // for(arrValue of arr){ //can't use (x of y) loop because Galvanize is running old JS *facepalm*
    for(let i = 0; i < arr.length; i++){
        for(const [key, value] of Object.entries(obj)){
            // console.log(key, value, 'is an array', Array.isArray(value))

            if(arr[i] === key){
                obj2[key] = obj[key];
                // console.log(obj2);
            }
        }
    }

    return obj2;


    /* END SOLUTION */
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }