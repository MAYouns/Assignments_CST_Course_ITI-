/*
1.1. Create a parent window that opens a flying child window.
    Hint: Start by creating a parent window that opens a child window.
    Child window should always be on top view and moves up and down within boundaries of user screen.
    Parent window should contain a button that stops child window movement.
*/

function wait5sec() {
  const start = Date.now();
  let end = 0;
  while (end - start < 5000) {
    end = Date.now();
  }
}
wait5sec();

let childWin;
function openChildWin() {
  childWin = open(
    "task1Child.html",
    "_blank",
    "height=100, width=200, top=0, left=0"
  );
  childWin.focus();
}

let intervalMethode;
function move() {
  childWin.focus();
  let x = 20;
  let y = 10;
  let down = true;

  intervalMethode = setInterval(() => {
    if (childWin.screenX == 0 && childWin.screenY == 0) down = true;
    else if (childWin.screenX + childWin.outerWidth == screen.width)
      down = false;
    down ? childWin.moveBy(x, y) : childWin.moveBy(-x, -y);
  }, 100);
}

function stopMoving() {
  childWin.focus();
  clearInterval(intervalMethode);
}
