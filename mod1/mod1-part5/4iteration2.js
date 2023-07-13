function getStringLength(string) {
    // your code here

    // let arr = string.slice();
    let count = 0;

    for(const letter of string){
        count++;
    }

    return count;
}
