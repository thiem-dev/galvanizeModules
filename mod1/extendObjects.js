function extend(obj1, obj2) {
    // your code here
    /* START SOLUTION */
    for(var key in obj1){
        // console.log(key, obj1[key])
        for(var key2 in obj2){
            // console.log(key2, obj2[key2])
            // console.log(key, key2);
            //TODO use hasOwnProperty() here in conditional
            if(key !== key2){
                // see https://stackoverflow.com/questions/33194138/template-string-as-object-property-name for the [key2] has to be used as a dynamic key
                Object.defineProperties(obj1, {
                    [key2] : {
                        value: obj2[key2],
                        writable: true
                    }, 
                })
            }

        }
    }

    console.log(obj1);
    console.log(obj2);
    return obj1;
    /* END SOLUTION */
  }



  var obj1 = {
    a: 1,
    b: 2
  };
  var obj2 = {
    b: 4,
    c: 3
  };
  
  extend(obj1, obj2);

/*Write a function called "extend".

Given two objects, "extend" adds properties from the 2nd object to the 1st object.

Notes:

Add any keys that are not in the 1st object.
If the 1st object already has a given key, ignore it (do not overwrite the property value).
Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}
*/