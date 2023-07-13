function convertObjectToList(obj) {
    // your code here

    let arr = [];
    let bigArr = []


    for(const [key, value] of Object.entries(obj)){
        arr.push(key);
        arr.push(value)
        if(arr.length == 2){
            bigArr.push(arr);
            arr = []
        }
    }

    return bigArr;
  }


  let obj = {
    name: 'Holly',
    age: 35,
    role: 'producer'
  }

  let output = convertObjectToList(obj)
  console.log(output); // [['name', 'Holly'], ['age', 35], ['role', 'producer']]
