const setCookie = (str) => {
    const now = new Date();
    now.setTime(now.getTime() + 15 * 60 * 1000);
    const expires =now.toUTCString;
       
    document.cookie = `token=${str}; expires=${expires}`;
}


// export default setCookie;
export default setCookie;