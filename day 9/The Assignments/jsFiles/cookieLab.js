
// get_All_cookies function, get the cookie values then convert the info to obj
function allCookieList() {
    let obj = {};
    let arr = document.cookie.split(';');
    for (let i = 0; i < arr.length; i++) {
        let n = arr[i].trim().split('='); // (trim) to remove any spaces before.
        obj[n[0]] = n[1];
    }
    return obj;
}

//getCookie
function getCookie(cookieName) {
    let obj = allCookieList();
    return obj[cookieName];
}

// setCookie
function setCookie(cookieName, value, expireDays) {
    if (expireDays) {
        let date = new Date();
        date.setTime(date.getTime() + (expireDays * 86400000));
        document.cookie = cookieName + "=" + value + ';expires=' + date.toUTCString();
    } else {
        document.cookie = cookieName + "=" + value + ';';
    }
}

// delete cookie
function deleteCookie(coookieName) {
    let date = new Date();
    date.setTime(date.getTime() - 86400000);
    document.cookie = coookieName + '=;expires=' + date.toUTCString();
}

// has cookie
function hasCookie(cookieName) {
    let obj = allCookieList();
    if (obj[cookieName] == '' || obj[cookieName] === undefined) return false;
    else return true;
}