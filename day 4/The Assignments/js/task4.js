/*
1.4 Write a script that reads from the user his info;
    validates and displays it with a welcoming message with today’s date
    
    Use coloring format according to user’s choice.
    The user has to choose either red, green or blue color, take his choice via prompt.
*/

let personName = '';
let phoneNumber = '';
let mobileNumber = '';
let email = '';
let color = '';
let style = '';
let date = new Date();

function validate(txt, regex) {
    let check = true;
    let result = '';
    do {
        result = prompt("Write Your "+ txt + " : ");
        if(!regex.test(result)){
            alert("You should write a valid " + txt +".");
        } else check = false;
    } while (check);
    return result;
}

personName = validate('name', /^[A-Za-z\s]+$/); 
phoneNumber = validate('phone number', /^\d{8}$/);
mobileNumber = validate('mobile number', /^(010|011|012)\d{8}$/);
email = validate('email', /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com)$/);
//[a-zA-Z]{2,}

color = prompt('choose a color: (red, green, blue) ....');
switch (color) {
    case "red":
        style = 'color: red;'
        break;
    case "green":
        style = 'color: green;';
        break;
    case "blue":
        style = 'color: blue;';
        break;
}



console.log("%cWelcome " + personName + " ", style + 'font-size: 25px');
console.log("%c" + date, style + 'font-size: 25px');

console.log("%cName: " + personName + ", Phone number: " + phoneNumber + "Mobile Number: " + mobileNumber + "Email: " + email, style);