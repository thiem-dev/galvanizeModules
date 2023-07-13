function listAllValues(obj) {
    // your code here

    let arr = [];

    for(const [key, value] of Object.entries(obj)){
        arr.push(value);
    }

    return arr;

  }

