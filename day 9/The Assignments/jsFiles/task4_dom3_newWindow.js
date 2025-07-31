
//creating Img
let img = document.createElement('img');
img.src = getCookie('src');
img.alt = 'Pic';

//creating p
let pEle = document.createElement('p');
pEle.innerHTML = getCookie('text');

//creating input:submit to close window
let inputSubmit = document.createElement('input');
inputSubmit.type = 'submit';
inputSubmit.value = 'Close Preview';

// put elements in the page
let body = document.querySelector('body');
body.prepend(inputSubmit);
body.prepend(pEle);
body.prepend(img);

// button to close the window
inputSubmit.addEventListener('click', () => {
    close();
});
