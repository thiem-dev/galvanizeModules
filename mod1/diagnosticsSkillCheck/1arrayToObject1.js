function transformFirstAndLast(array) {
    // your code here
    let obj = {}

    obj[`${array[0]}`] = array[array.length - 1];

    return obj;

}


let array = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
let output = transformFirstAndLast(array)
console.log(output);


//   let obj2 = {};

//   // for(arrValue of arr){ //can't use (x of y) loop because Galvanize is running old JS *facepalm*
//   for(let i = 0; i < arr.length; i++){
//       for(const [key, value] of Object.entries(obj)){
//           // console.log(key, value, 'is an array', Array.isArray(value))

//           if(arr[i] === key){
//               obj2[key] = obj[key];
//               // console.log(obj2);
//           }
//       }
//   }

//   return obj2;