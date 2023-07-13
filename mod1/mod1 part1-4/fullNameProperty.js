var person = {
    firstName: 'Jade',
    lastName: 'Smith'
  };
  
  function addFullNameProperty(obj) {
    // your code here
    /* START SOLUTION */
    obj["fullName"] = obj["firstName"] + " " + obj["lastName"];
    return obj;
    /* END SOLUTION */
  }
  
  addFullNameProperty(person);
  console.log(person.fullName);