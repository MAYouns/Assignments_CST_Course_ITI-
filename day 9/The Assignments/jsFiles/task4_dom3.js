let inputElements = document.querySelectorAll('input'); // get all inputElements include input:submit
let imgElements = document.images; // get all images

let src = '';

for (let i = 0; i < inputElements.length - 1; i++) { // (inputElements - 1) exclude input:submit
    inputElements[i].addEventListener('change', () => {
        src = imgElements[i].src; // store the src of selected image in 'src' variable.
    });
}

inputElements[inputElements.length - 1].addEventListener('click', displayWindow);

// send the src and the text as (cookies) to newWindow
function displayWindow() {
    let newWindow = open('task4_dom3_newWindow.html', '_blank', 'width=500, height=500');
    newWindow.document.cookie = setCookie('src', src);
    newWindow.document.cookie = setCookie('text', document.getElementById('txt').value);
}