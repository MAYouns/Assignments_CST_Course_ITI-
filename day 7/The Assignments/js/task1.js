/*
1.1. Make your own welcoming page of a registration form to
    • display a greeting message for the user by his name and title, then
    • show a display of his info (address, gender, email, mobile) and
    • display a recommendation to use chrome browser if he is using another browser (Bonus)

    Hints:
    • You should build a registration form to send the entire required info from the user and
        let the action is getting the welcoming page.
        i.e. The welcoming page is the page that should be displayed after registration.
    • The registration form should contain fields for name, email, password, job title, mobile, gender, and address.
    • Read the required info from the query string.
*/

let arrInfo = location.search.replace('?', '').split('&');
let objInfo = {};

for (let i = 0; i < arrInfo.length; i++) {
    let arr = arrInfo[i].split('=');
    objInfo[arr[0]] = arr[1];
}

objInfo["email"] = objInfo["email"].replace("%40", "@");

for (const key in objInfo) {
    let element = document.getElementsByClassName(key)[0];
    if (element != undefined) {
        element.innerHTML = objInfo[key];
    }
}

// bonus
let browserUserAgent = navigator.userAgent;
let isChrome = browserUserAgent.includes("Chrome") && !browserUserAgent.includes("Edg");
if (!isChrome) document.getElementById("messege").className = "visable";