/*
    1.3. Write a script that shows a “typing message” appearing in a new child window.
        The new window should close after few seconds of displaying your message.
*/

let chidWindow;
function openChildWin() {
  chidWindow = open("task3Child.html", "_blank", "height=300, width=300");
  chidWindow.moveTo(200, 100);

  let txt = "Typing message.....";
  let i = 0;
  let interval = setInterval(() => {
    chidWindow.document.write(
      '<span style="font: 30px cursive;">' + txt[i] + "</span>"
    );
    i++;
    if (i === txt.length) clearInterval(interval);
  }, 300);

  setTimeout(function () {
    chidWindow.close();
  }, 6000);
}
