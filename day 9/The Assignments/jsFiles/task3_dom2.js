// creating submit button
let changeBtn = document.createElement('input');
changeBtn.type = 'submit';
changeBtn.value = 'Change Theme';

document.getElementById('navigation').append(changeBtn);
changeBtn.addEventListener('click', changeTheme);

let isThemeChanged = false;
function changeTheme() {
    if (!isThemeChanged) {
        let createImg = document.getElementById('header').cloneNode(true);
        document.querySelector('.center').append(createImg);

        let imgs = document.images;
        imgs[0].style = 'position: relative; left: 39%';
        imgs[1].style = 'position: relative; left: -39%';

        isThemeChanged = true;
    }

}