/*
1.1. Math Object Write a script that ask the user to
    • Enter the value of a circle’s radius in order to calculate its area
    • Enter another value to calculate its square root and alert the result
    • Enter an angle to calculate its cos value then display the output in the console.
*/

let radius = prompt("Write the radius of The circle..");
let rootSquar = prompt("Write the number to get root square ");
alert("The area of the circle is: " + (Math.PI * Math.pow(radius, 2)).toFixed(2) + '\nThe root square is: ' + Math.sqrt(rootSquar));

let angle = prompt("Write the angle.");
console.log('The cos value: ' + Math.cos(angle * (Math.PI / 180)).toFixed(2));
