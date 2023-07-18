function addFullNameProp(obj) {
    var firstName = obj.firstName;
    var lastName = obj[lastName];
  
    if (firstName && lastName) {
      obj['fullName'] = firstName + ' ' + lastName;
    }
  
    return obj;
  }

function assertObjectsEqual(condition, testName){
    if(condition){
        console.log("passed");
    } else{
        console.log(`FAILED [ ${testName} ]`);
    }
}


assertObjectsEqual(false, 'is it squared');