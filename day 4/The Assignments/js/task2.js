/*
1.2. Write a script to determine whether the entered string is palindrome or not.
    Request the string to be entered via prompt,
    ask the user whether to consider case sensitivity of the entered string or not via confirm,
    handle both cases in your script
    
i.e. RADAR NOON MOOM are palindrome.
    Note: raDaR is not a palindrome if user requested considering case of entered string,
    it will be palindrome if user requested ignoring case sensitivity.
*/

let x = prompt("Please Write a string: ");
let conf = confirm("Consider case of entered string? ");
let isPalindrome = true;
if(!conf) x = x.toLowerCase();

let newString = x.split(' ');

for (let i = 0; i < newString.length; i++) {
    let currentWord = newString[i];
    let length = currentWord.length;

    for (let x = 0; x < Math.floor(length / 2); x++) {
        if(!(currentWord[x] === currentWord[length-1-x])) isPalindrome = false;
    }
}


isPalindrome ? console.log("palindrome") : console.log("Not palindrome");