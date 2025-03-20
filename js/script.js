function changeMode() {
    const themeLink = document.getElementById('theme-link');
    themeLink.href = themeLink.href.includes('dark-mode.css') ? '../css/light-mode.css' : '../css/dark-mode.css';
    
    let iconTheme = document.getElementById('icon-theme');
    localStorage.setItem(themeLink, iconTheme)
    
    if (themeLink.href.includes('dark-mode.css')) {
        iconTheme.src = '../img/light-mode.png';
    } else {
        iconTheme.src = '../img/dark-mode.png';
    }

    console.log(themeLink.href, iconTheme.src);
}

document.body.addEventListener("onload", () => {
    console.log(localStorage.getItem(themeLink, iconTheme))
})