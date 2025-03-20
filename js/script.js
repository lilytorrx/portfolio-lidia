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

function changeLanguage() {
    const currentLang = document.documentElement.lang;
    let lang = currentLang == 'en' ? 'pt-br' : 'en';
    
    console.log(lang)
    if(lang === 'pt-br') {
        let titleLidia = document.getElementById('info-title');
        titleLidia.innerHTML = `Olá, meu nome é <strong>Lídia Torres!</strong>`;
    } else if(lang === 'en') {
        let titleLidia = document.getElementById('info-title');
        titleLidia.innerHTML = `Hello, my name is <strong>Lídia Torres!</strong>`;
    }
}