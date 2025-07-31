/*
    1.2. Create a parent a window that opens a scrollable advertising child window.
*/

let childWind;
function openChildWind() {
    childWind = open("task2Child.html", "_blank", "height=300, width=400, scrollbars=yes");
    childWind.moveTo(300, 200);

    let x = 10;
    let n = setInterval(() => {
        childWind.scrollBy(0, x);
        x += 10;
        if (x == 160) {
            clearInterval(n);
            childWind.close();
        }
    }, 500);
}
