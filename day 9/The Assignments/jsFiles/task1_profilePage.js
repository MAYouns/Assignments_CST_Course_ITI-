//put the image in the page based on the gender
document.images[0].src = getCookie('gender') == 'man' ? 'images/cookies/1.jpg' : 'images/cookies/2.jpg';

//get all spans
let spans = document.getElementsByTagName('span');

//put the user name in the first span
spans[0].innerHTML = getCookie('username');

// set the new times
setCookie('times', parseInt(getCookie('times')) + 1, 10);

// put the times in the second span
spans[1].innerHTML = getCookie('times');

// change the color based on cookie:color
for (let i = 0; i < spans.length; i++) {
    spans[i].style.color = getCookie('color');
}

//if the user want to logOut..
document.getElementById('bttn').addEventListener('click', () => {
    deleteCookie('username');
    deleteCookie('age')
    deleteCookie('gender')
    deleteCookie('color')
    deleteCookie('times')
    location.replace('task1_registered.html');
})