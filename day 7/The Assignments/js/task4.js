/* 
    memory game.
*/

let container = document.getElementById('container');

// sources of iamages
let imgSrcs = ["images/memory-game/Moon.gif",
    "images/memory-game/1.gif",
    "images/memory-game/2.gif",
    "images/memory-game/3.gif",
    "images/memory-game/4.gif",
    "images/memory-game/5.gif",
    "images/memory-game/6.gif"];

//shuffle sorting
let imgIds = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
shuffleArr(imgIds);

// creating structure of game
for (let i = 0; i < 12; i++) {
    let imgEle = document.createElement('img');
    container.appendChild(imgEle);
    imgEle.src = imgSrcs[0];
    imgEle.alt = 'moon';
    imgEle.id = imgIds[i];
    imgEle.setAttribute('onclick', "change(this)");
}

let previousEle = '';
let isRepeated = false; // to check if the two images are identical.
let imgWon = 0; // if imgWon = 6, the game is over.

function change(currentElement) {
    if (currentElement.src.includes(imgSrcs[0])) {
        let id = Number(currentElement.id);
        currentElement.src = imgSrcs[id];
        if (!isRepeated) { // the first img
            previousEle = currentElement;
            isRepeated = true;
        } else { // the second img
            if (previousEle.id == id) { // if the second img = the first one
                imgWon++;
                if (imgWon === 6) document.getElementById('win').className = 'visable'; // end the game.
            } else { // if it's not equal
                setTimeout(() => {
                    previousEle.src = imgSrcs[0];
                    currentElement.src = imgSrcs[0];
                    previousEle = '';
                }, 400);
            }
            isRepeated = false;
        }
    }
}

function startGame() {
    document.getElementById("start").className = 'hidden';
}

function playAgain() {
    isRepeated = false;
    imgWon = 0;
    previousEle = '';
    document.getElementById('win').className = 'hidden';
    shuffleArr(imgIds);
    for (let i = 0; i < 12; i++) {
        let ele = document.getElementsByTagName('img')[i + 2];
        ele.src = imgSrcs[0];
        ele.id = imgIds[i];
    }
}

// shuffle sorting function --- Fisher Yates Method
function shuffleArr(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let k = arr[i];
        arr[i] = arr[random];
        arr[random] = k;
    }
}
// another way to shuffle.
//arr.sort(() => Math.random() - 0.5);

document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('playAgain').addEventListener('click', playAgain);

