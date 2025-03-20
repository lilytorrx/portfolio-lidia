function changeMode() {
    const themeLink = document.getElementById('theme-link');
    const iconTheme = document.getElementById('icon-theme');
    const iconTheme2 = document.getElementsByClassName(".icon-theme")

    if (themeLink.href.includes('dark-mode.css')) {
        themeLink.href = '../css/light-mode.css';
        iconTheme.src = '../img/dark-mode.png';
        iconTheme2.src = '../img/dark-mode.png';
        localStorage.setItem('theme', 'light');

    } else {
        themeLink.href = '../css/dark-mode.css';
        iconTheme.src = '../img/light-mode.png';
        iconTheme2.src = '../img/light-mode.png';
        localStorage.setItem('theme', 'dark');
    }

    console.log('Theme:', localStorage.getItem('theme'));
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeLink = document.getElementById('theme-link');
    const iconTheme = document.getElementById('icon-theme');
    const iconTheme2 = document.getElementsByClassName(".icon-theme")

    if (savedTheme === 'light') {
        themeLink.href = '../css/light-mode.css';
        iconTheme.src = '../img/dark-mode.png';
        iconTheme2.src = '../img/dark-mode.png';
    } else {
        themeLink.href = '../css/dark-mode.css';
        iconTheme.src = '../img/light-mode.png';
        iconTheme2.src = '../img/light-mode.png';
    }

    console.log(iconTheme2.src)
    console.log('Tema:', savedTheme);
});
