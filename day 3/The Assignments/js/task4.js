let x, y,z;

function check(str) {
    let num;
    do {
        num = prompt("Enter the " + str + " number: ");
        num = Number(num);
        if(isNaN(num)){
            alert("Please Enter valid Number.");
        } else if(num === 0){
            alert("the numbers can't be divided by 0");
        }
    } while (isNaN(num) || num == 0);
    return num;
}

do {
    x = prompt("Enter the first number: ");
    x = Number(x);
    if(isNaN(x)){
        alert("Please Enter valid Number.");
    }
} while (isNaN(x));

y = check("second");
z = check("third");

let XDivisibleByY = !(x%y);
let XDivisibleByZ = !(x%z);

if(XDivisibleByY && XDivisibleByZ) {
    console.log(x + " is divisible by both " + y + " and " + z);
} else if(!XDivisibleByY && XDivisibleByZ) {
    console.log(x + " is divisible by " + z + " only");
} else if(XDivisibleByY && !XDivisibleByZ){
    console.log(x + " is divisible by " + y + " only");
} else {
    console.log(x + " is not divisible by either " + y + " or " + z);
}

 