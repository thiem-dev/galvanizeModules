function transformEmployeeData(employeeData) {
    // your code here

    // console.log(employeeData[0]);
    // console.log(employeeData[0][0]);

    let empArr = employeeData[0]
    let resultArr = [];



    for(let h = 0; h < employeeData.length; h++){
        let obj = {};
        for(let i = 0; i < employeeData[h].length; i++){
            for(let j = 0; j < employeeData[h][i].length; j++){
                if(j === 0){
                    obj[employeeData[h][i][j]] = employeeData[h][i][j+1];
                }
            }
        }
        resultArr.push(obj);
    }

    // console.log(resultArr);
    return resultArr
    
}

let employeeData = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

let output = transformEmployeeData(employeeData)
console.log(output);
