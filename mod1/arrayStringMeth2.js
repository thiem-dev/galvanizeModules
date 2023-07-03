// function convertDoubleSpaceToSingle(str) {
//     /* START SOLUTION */

//     if(str.length === 0 || str === ''){
//         return '';
//     }
//     let splitted = str.split(' ');

//     let index = splitted.indexOf(' ');
//         while(index !== -1) {
//             console.log('empty found');
//             splitted.splice(index, 1);
//             index++;
//           }
    
//     console.log(splitted.join(' '));
// }

function convertDoubleSpaceToSingle(str) {
    if(str.length === 0 || str === ''){
        return '';
    }
    let splitted = str.split('  ');
    // console.log(splitted.join(' '));

    return splitted.join(' ');
}


var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"


// ******************************************************************************************************************************