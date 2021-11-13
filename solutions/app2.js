const setCookie_2 = (name, value, expirationMinutes = 15) => {
    const now = new Date();
    now.setTime(now.getTime() + expirationMinutes * 60 * 1000);
    const expires = now.toUTCString();

    document.cookie = `${name}=${value}; expires=${expires}`;
}


setCookie_2('viewed', 5);
setCookie_2('uid', 354774631237);
setCookie_2('ssid', 'Bx55OWbHJ0Vt_IGIF');

// document.cookie = 'viewed = 5';
// document.cookie = 'uid = 354774631237';
// document.cookie = 'ssid = Bx55OWbHJ0Vt_IGIF';

const cookieHandler = {
    getAll() {
        const objCookie = {};
        document.cookie.split('; ')
            .forEach(item => {
                objCookie[item.split('=')[0]] = item.split('=')[1];
            });
        return objCookie;
    },
    toSessionStorage() {
        document.cookie.split('; ')
            .forEach(item =>
                sessionStorage.setItem(item.split('=')[0], item.split('=')[1])
            );
    },
    flush() {
        document.cookie.split('; ').forEach(x => {
            document.cookie = `${x.split('=')[0]}=; expires = Thu, 01 Jan 1970 00:00:00 UTC;`
        })
    }
}


// export { cookieHandler };
export {
    setCookie_2, cookieHandler
};