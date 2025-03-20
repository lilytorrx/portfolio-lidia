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

$(document).ready(function() {
    // Esconde os elementos inicialmente
    $('.fade-in').css('opacity', 0);

    $(window).on('scroll', function() {
        $('.fade-in').each(function() {
            var elementOffset = $(this).offset().top; // Posição do elemento
            var windowScroll = $(window).scrollTop() + $(window).height(); // Posição do scroll

            // Se o elemento estiver na tela
            if (windowScroll > elementOffset) {
                $(this).animate({
                    opacity: 1
                }, 800); // Animação para mostrar o elemento
            }
        });
    });
});

