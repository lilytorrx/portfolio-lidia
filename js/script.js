document.documentElement.lang = "pt-br"; 


function changeMode() {
    const themeLink = document.getElementById('theme-link');
    const iconTheme = document.getElementById('icon-theme');

    if (themeLink.href.includes('dark-mode.css')) {
        themeLink.href = '../css/light-mode.css';
        iconTheme.src = '../img/dark-mode.png';
        localStorage.setItem('theme', 'light');
    } else {
        themeLink.href = '../css/dark-mode.css';
        iconTheme.src = '../img/light-mode.png';
        localStorage.setItem('theme', 'dark');
    }
}

function changeLanguage() {
    const currentLang = document.documentElement.lang;
    const lang = currentLang === 'pt-br' ? 'en' : 'pt-br';
    document.documentElement.lang = lang;

    if(currentLang === 'pt-br') {
    } else if(currentLang === 'en') {
        let titleLidia = document.getElementById('info-title');
        titleLidia.innerHTML = `Hello, my name is <strong>Lídia Torres!</strong>`;
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const themeLink = document.getElementById('theme-link');
    const iconTheme = document.getElementById('icon-theme');

    if (savedTheme === 'light') {
        themeLink.href = '../css/light-mode.css';
        iconTheme.src = '../img/dark-mode.png';
    } else {
        themeLink.href = '../css/dark-mode.css';
        iconTheme.src = '../img/light-mode.png';
    }
});
