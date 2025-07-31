document.getElementById('goStop').addEventListener('click', goStop); // go and stop button
document.getElementById('reset').addEventListener('click', reset); // ;reset button


let imgs = document.images; // get all images 
let spans = document.getElementsByTagName('span'); //get all spans
let x = 0; //counter
let moving = false; // are the elements moving or not?
let interval;

// function that move or stop
function goStop() {
    let down; // is moving up or down?
    if (moving) { // if the elements are moving, stop!
        stop();
    } else { // else move based on position(left for icon1, right for icon2, bottom for top icon)
        interval = setInterval(() => {
            for (let i = 0; i < 3; i++) {
                imgs[i].style[imgs[i].alt] = x + 'px';
                spans[i].innerHTML = x; // set the values in span elements
            }
            if (x == 400) down = true; // if the elements reached the end, move down
            else if (x == 0) down = false; // if the elements are at the begining, move up
            down ? x-- : x++;
        }, 10);
        moving = true;
        this.value = 'stop';
    }
}

function reset() {
    x = 0;
    let n = ['left', 'right', 'bottom'];
    for (let i = 0; i < 3; i++) {
        imgs[i].style[n[i]] = 0 + 'px';
        spans[i].innerHTML = 0;
    }
    stop()
}

function stop() {
    clearInterval(interval);
    moving = false;
    document.getElementById('goStop').value = 'go';
}