let firstVal = prompt("Enter first value: ");
let secondVal = prompt("Enter second value: ");
firstVal = Number(firstVal);
secondVal = Number(secondVal);

let sum = 0;
let message1 = "Number multiple of 3: ";
let message2 = "Number multiple of 5: ";

for(let i = firstVal + 1; i <= secondVal; i++){
    if(i%3 == 0) message1 += i + ", ";
    if (i%5 == 0) message2 += i + ", ";
    if(i%3 == 0 || i%5 == 0) sum += i;
}
console.log(message1);
console.log(message2);
console.log("Total sum is: " + sum);