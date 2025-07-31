/*
    2.2 Create an animation on the page that makes an orange marble move to the next location in the line every second.
        Allow the user to stop the animation by placing the cursor on any marble.
        The animation will restart again once the user removes the cursor from that marble.
        Add your own interesting feature to the script that tinkers with the speed or location of images
*/

let imageContainer = document.getElementById('imagesContainer');
//creating images
for (let i = 0; i < 5; i++) {
    let imgEle = document.createElement('img');
    imageContainer.appendChild(imgEle);
    imgEle.src = "images/marbels/marble1.jpg";
    imgEle.alt = "Marble";
}

let images = document.getElementsByTagName('img');
let previousImg = images[0];
let i = 0;
let interval;

let move = function () {
    interval = setInterval(() => {
        previousImg.src = "images/marbels/marble1.jpg";
        images[i].src = "images/marbels/marble3.jpg";
        previousImg = images[i];
        i == 4 ? i = 0 : i++;
    }, 400);
};
move();

let stop = () => clearInterval(interval);

imageContainer.addEventListener("mouseout", move);
imageContainer.addEventListener("mouseover", stop);