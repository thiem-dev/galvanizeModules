function extend(obj1, obj2) {
    // your code here
    /* START SOLUTION */
    console.log('obj1',obj1);
    console.log('obj2',obj2);

    for(var key2 in obj2){

      // if(Object.hasOwn(obj1, key2)){ //does not exist in Galvanize modules
      if(obj1.hasOwnProperty(key2)){ //has it do nothing
        // console.log('obj1', obj1, 'has key', key2); 
      } else{
        // console.log('obj1', obj1, 'does not have key', key2, 'adding into obj1');
          // see https://stackoverflow.com/questions/33194138/template-string-as-object-property-name for the [key2] has to be used as a dynamic key
          
          obj1[`${key2}`] = obj2[`${key2}`]; //galvanize doesn't recognize Object parent class 

          // Object.defineProperties(obj1, {
          //     [key2] : {
          //         value: obj2[key2],
          //         writable: true
          //     }, 
          //   });
      }
    }

    console.log('obj1',obj1);
    console.log('obj2',obj2);
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