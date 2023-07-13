var customerData = {
    'Joe': {
      visits: 1
    },
    'Carol': {
      visits: 2
    },
    'Howard': {
      visits: 3,
    },
    'Carrie': {
      visits: 4
    },
    'Paul': {

    },
    'James':{
        visits: 'hello'
    },
    'Kenny':{
        visits: undefined
    },
    'Kim':{
        visits: 0
    }
  };
  
function greetCustomer(firstName) {
// your code here

    let nVisits = 0;

    if(customerData === undefined || customerData[firstName] === undefined || typeof(customerData[firstName]['visits']) !== 'number'){
        nVisits = 0;
        return greeting(nVisits, firstName);
    }

    if(customerData.hasOwnProperty(firstName)){
        nVisits = customerData[firstName]['visits'];
        
        if(nVisits === undefined || customerData[firstName] === undefined){
            nVisits = 0;
        }
        
        return greeting(nVisits, firstName);
    } else{
        nVisits = 0;
        return greeting(nVisits, firstName);
    }
}

function greeting(nVisits, firstName){

    switch (true){
        case (nVisits === 0 || nVisits === undefined):
            return 'Welcome! Is this your first time?';
            break;
        case (nVisits === 1):
            return `Welcome back, ${firstName}! We're glad you liked us the first time!`
            break;
        case ((nVisits > 1)):
            return `Welcome back, ${firstName}! So glad to see you again!`
            break;
    }
}


let output = greetCustomer('Howard');
console.log(output);

let output2 = greetCustomer('Jim');
console.log(output2);

let output3 = greetCustomer('Joe');
console.log(output3);

let output4 = greetCustomer('Paul');
console.log(output4, 'Paul');

let output5 = greetCustomer('James');
console.log(output5, 'James');

let output6 = greetCustomer('Paul');
console.log(output6, 'Paul');

let output7 = greetCustomer('Kenny');
console.log(output7, 'Kenny');

let output8 = greetCustomer('Kim');
console.log(output8, 'Kim');