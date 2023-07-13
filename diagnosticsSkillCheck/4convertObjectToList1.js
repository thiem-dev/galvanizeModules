function getAllKeys(obj) {
    // your code here

    let arr = [];

    // for(const [key, value] of Object.entries(obj)){
    //     arr.push(key);
    // }

    //the above code block words too
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            arr.push(key);
        }
    }

    // console.log(arr);

    return arr;

}

let obj = {
    name : 'Sam',
    age : 25,
    hasPets : true
  }
  let output = getAllKeys(obj)
  console.log(output);
