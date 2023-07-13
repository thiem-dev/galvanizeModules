function joinArrayOfArrays(arr) {
    // your code here

    let finalArr = [];

    // console.log(finalArr.concat(arr[0]));
    // console.log(finalArr.concat(arr[1]));

    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i]) || arr[i] === undefined){
            continue;
        } else if(arr[i].length === 0){
            continue;
        }

        finalArr = finalArr.concat(arr[i]);
    }

    // console.log(finalArr);

    return finalArr;
  }

  var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']
