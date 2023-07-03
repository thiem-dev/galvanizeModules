function areValidCredentials(name, password) {
    // your code here
    /* START SOLUTION */
    if(name.length > 3 && password.length > 8){
        return true;
    } else{
        return false;
    }
    /* END SOLUTION */
  }