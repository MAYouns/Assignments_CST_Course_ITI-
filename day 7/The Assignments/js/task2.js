/*
2.1. Photo gallery with Next, Previous, and Slideshow.
    • The next button goes to the next pic and stops when reaching the last image
    • Previous goes back to the previous image and stops when reaching the first image
    • The slideshow button will circulate,
        i.e. when reaches the last image it should continue displaying starting from the first image
    • The stop button will stop slideshow behavior.
    • Let the delay between every two images last 2 seconds
*/

let srcs = ["images/slide-show/1.jpg",
    "images/slide-show/2.jpg",
    "images/slide-show/3.jpg",
    "images/slide-show/4.jpg",
    "images/slide-show/5.jpg"];

let imgElement = document.getElementById("img");
let imgSrcNum = 0;

let interval;
let isclicked = false;

function next() {
    if (imgSrcNum < 4) {
        imgSrcNum++;
        imgElement.src = srcs[imgSrcNum];
    }
}
function previous() {
    if (imgSrcNum > 0) {
        imgSrcNum--;
        imgElement.src = srcs[imgSrcNum];
    }
}
function slideShow() {
    if (!isclicked) {
        interval = setInterval(() => {
            imgSrcNum++;
            if (imgSrcNum > 4) imgSrcNum = 0;
            imgElement.src = srcs[imgSrcNum];
        }, 2000);
        isclicked = true;
    }
}

function stopfunc() {
    isclicked = false;
    clearInterval(interval);
}