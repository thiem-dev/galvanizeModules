function assertObjectsEqual(actual, expected, testName) {
    // your code here
    expectedStr = expected.JSON.stringify(expected);
    actualStr = expected.JSON.stringify(actual);

    console.log()
}

var person = {
    firstName: 'Cassidy',
    lastName: 'Jacobs'
  };
  updateObject(person, 'firstName', 'Jack');
  
  var expected = {
    firstName: 'Jack',
    lastName: 'Jacobs'
  };
  
  assertObjectsEqual(person, expected, "updates person's existing first name field");