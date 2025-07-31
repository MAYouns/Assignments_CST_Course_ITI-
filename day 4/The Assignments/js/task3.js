/*
1.3 Build your own function that takes a single string argument and returns the largest word in the string.
    If there are two or more words that are the same length, return the first word from the string with that length.
    e.g. if Input is: "this is a javascript string demo"
        Output will be: javascript
*/

let x = prompt("Enter The string: ");
let arrOfStr = x.split(" ");
let largestStr = arrOfStr[0];
let isRepeated = false;

for (let i = 1; i < arrOfStr.length; i++) {
    if(arrOfStr[i].length > largestStr.length ){
        largestStr = arrOfStr[i];
        isRepeated = false;
    } else if(arrOfStr[i].length == largestStr.length){
        isRepeated = true;
    }
}

isRepeated ? 
            console.log('The largest word is: ' + largestStr + " and his length " + largestStr.length) 
            : console.log('The largest word is: ' + largestStr);