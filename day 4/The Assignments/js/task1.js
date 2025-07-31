/*
1.1. Write a script that accepts a string from user through prompt
    and count the number of a specific character that the user will define in another prompt.
    Ask the user whether to consider difference between letter cases or not
    then display the number of letter appearance.
*/
let string = prompt("Enter the string: ");
let specf = prompt("Enter The specific character: ");
let x = confirm("Consider Case difference between letter cases?");
let nums = 0;

if(!x) string = string.toLowerCase();

for(let i = 0; i < string.length; i++) if(string[i] === specf) nums++;


console.log('the number is: ' + nums);