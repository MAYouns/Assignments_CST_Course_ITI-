let form = document.forms[0];
let inputElements = document.getElementsByTagName('input');

//display information.
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let check = confirm("Do you want to submit?");
    if (check) {
        for (let i = 0; i < inputElements.length - 1; i++) {
            if (inputElements[i].value.trim() != '') { // get all the values except the empty one
                console.log(inputElements[i].name + ": " + inputElements[i].value);
            }
        }
    }
});

// custom event
let cstEvnt = new CustomEvent("showMessege", {
    detail: {
        alertMessege: "Please, write the fields."
    }
});

form.addEventListener('showMessege', () => {
    let isUserPutValues = false;
    for (let i = 0; i < inputElements.length - 1; i++) {
        if (inputElements[i].value.trim() != '') isUserPutValues = true;
    }
    if (!isUserPutValues) alert('Please Enter Data');
})

setTimeout(() => { form.dispatchEvent(cstEvnt); }, 30000);