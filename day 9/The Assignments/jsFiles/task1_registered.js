
if (getCookie('times')) {
    // if the user logged before, then remove all content and display error_messege and a button to enter the page
    document.body.innerHTML = "<div id='erorr'></p>You logged before!!</p><button>enter your page..</button></div>";
    document.querySelector('button').addEventListener('click', () => {
        location.assign('task1_profilePage.html');
    })
} else {
    // else set All cookies(username, age, gender ....)
    document.getElementById('submit').addEventListener('click', sendInfo);
    function sendInfo() {
        // 1- checking if any data is missed
        let inputs = document.getElementsByTagName('input');
        let isEmpty = false;
        for (let i = 0; i < inputs.length - 1; i++) { // (inputs.length - 1) to exclude the input:submit
            if (inputs[i].value.trim() == '') isEmpty = true;
        }
        if (!inputs[2].checked && !inputs[3].checked) isEmpty = true;

        if (isEmpty) { // if the user didn't enter any data, show alert messege.
            alert('Please write the empty fields');
        } else { // else set All cookies
            location.assign('task1_profilePage.html');
            setCookie('username', document.getElementById('username').value);
            setCookie('age', document.getElementById('age').value);

            let genderValue = document.getElementById('man').checked ? "man" : "woman";
            setCookie('gender', genderValue);
            setCookie('color', document.getElementById('color').value);
            setCookie('times', 0, 10);
        }
    }
}