var sum = 0;
var check = true;
let x = 0;

do {
    let value = prompt("Enter a number: ");
    let NewValue = Number(value);
    x = NewValue + sum;

    if(value == '' || isNaN(NewValue)){
        alert("Please re-Enter.");
    } else if(NewValue == 0 || x >= 100 ){
        check = false;
        if(x == 100) sum +=NewValue;
    } else {sum += NewValue; }
} while (check);

console.log(sum);