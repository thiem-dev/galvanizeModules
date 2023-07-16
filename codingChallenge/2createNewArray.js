function createNewArray(arr, func) {
    //Your pseudocode here

    //always check what params are
    // console.log("array", arr); //array [ 1, 2, 3, 4 ]
    // console.log("function", func(arr[0])); //3, 4, 4 : numbers

    //check if arr is undefined or empty
    //instantiate and declare arr2;
    //loop through arr{
        //func call with each element of arr : func(arr[i]); 
        // check if func() return is undefined or empty. {
            // then assign it to arr2. : arr2.push(result);
        // }
        //log out the results of func calls and typeof : dev notes.
    // }



    //return arr2
  
    //Your code here ******************************************************************************************************

    //check if arr is empty, undefined, or not array
    if(!Array.isArray(arr) || arr === undefined){
        console.log('arr is: not an array or is undefined');
        return "arr is: not an array or is undefined"
    } else if(arr.length === 0){
        console.log('arr is empty');
        return 'arr is empty'
    }

    let arr2 = []; //create arr2 and assign it empty for expectations

    //loop through each element of arr
    for(let i = 0; i < arr.length; i++){
        let res = func(arr[i]); //call func with arr element
        arr2.push(res); //assign arr2 elements with func results
    }

    return arr2; //return arr2
  
}