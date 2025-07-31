/*
1.2. Array Object Fill an array (n numerical values) from the user, the n is determined by the user.
     Use sort method to sort the array’s values in descending
     and ascending orders Display the output in the console.
     Make sure that the user enters only numerical values.
*/

let numOfArr = 0;
let arr = [];

function numberValidation(txt) {
    let check = true;
    let x = '';
    do {
        x = prompt("Enter " + txt + " : ");
        x = Number(x);
        if(isNaN(x)) alert("Enter a valid Number: ");
        else check = false;
    } while (check);
    return x;
}
numOfArr = numberValidation(" The number of inputs");

for (let i = 0; i < numOfArr; i++) arr[i] = numberValidation("The number " + (i + 1));

console.log(arr.sort(function(a,b){return a - b})); x// ascending تصاعدي
console.log(arr.sort(function(a,b){return b - a})); // descending تنازلي

