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
    let lang = document.documentElement.lang;
    if (lang === 'pt-br') {
        document.documentElement.lang = 'en';
    } else {
        document.documentElement.lang = 'pt-br';
    }
    changeTexts(lang);
}

function changeTexts(lang) {
    let elements = {
        titleLidia: document.getElementById('info-title'),
        careerLidia: document.getElementById('info-career'),
        aboutLidiaText1: document.getElementById('about-me-text'),
        aboutLidiaText2: document.getElementById('about-me-text-2'),
        projectsTitle: document.getElementById('projects'),
        project1Desc: document.getElementById('project1-desc'),
        project2Desc: document.getElementById('project2-desc'),
        project3Desc: document.getElementById('project3-desc'),
        project4Desc: document.getElementById('project4-desc'),
        tecnologiesTitle: document.getElementById("tecnologies-title"),
        visitProject: document.getElementsByClassName("visit-project"),
        logoCountry: document.getElementById("logo-country")
    }

    console.log(lang)
    if(lang === 'pt-br') {
        elements.logoCountry.src = "../img/brasil-logo.png";
        elements.visitProject.innerHTML = `Visitar projeto`;
        console.log(elements.visitProject);

        elements.titleLidia.innerHTML = `Olá, meu nome é <strong>Lídia Torres!</strong>`;
        elements.careerLidia.innerHTML = `Desenvolvedora Full-stack`;

        elements.aboutLidiaText1.innerHTML = `Desenvolvedora Full-Stack, aprimoro minhas habilidades na criação de sistemas completos e funcionais acoplado de interfaces interativas. Tenho trabalhado como freelancer nos últimos 4 anos. Minha especialidade inclui React, React Native, HTML5, CSS3, JS (ES6), Bootstrap, PHP, Laravel, Java e SQL.`;
        elements.aboutLidiaText2.innerHTML = `Durante meu curso técnico, percebi a enorme paixão que eu possuo em relação à área de programação. Eu adorava fazer os projetos e, fazer uns projetos individuais para prática e desenvolvimento profissional.`

        elements.projectsTitle.innerHTML = `Projetos`;
        elements.tecnologiesTitle.innerHTML = `Especialidades/Tecnologias`;

        elements.project1Desc.innerHTML = `Marketplace de produtos agrícolas e de agricultura familiar feito em <strong>PHP.</strong> O site oferece uma interface fácil de usar para pesquisar, comparar, comprar e vender produtos de uma ampla seleção do agronegócio que variam com categorias, tamanho e preço. O site também conta com filtragem de produtos e um painel de controle (dashboard) para os usuários.`
        
        elements.project2Desc.innerHTML = `Um site para hospedagem de eventos feito em <strong>Laravel</strong>, onde os usuários poderão ver, criar e confirmar presença em um evento qualquer. Os usuários também poderão decidir se o evento é privado ou não, podendo incluir os níveis de acesso que os outros usuários terão que ter para poder acessar o evento e confirmar presença.`
        
        elements.project3Desc.innerHTML = `BitCont é um aplicativo desenvolvido com <strong>React Native</strong> para consulta de cotações de Bitcoin, consumindo uma API de preços. O aplicativo oferece uma interface simples para visualizar a cotação do Bitcoin em tempo real, além de gráficos históricos.`

        elements.project4Desc.innerHTML = `Criei uma rede social chamada de NexusSocial, onde utilizo o layout do Facebook como inspiração para fazer o meu próprio. Feito em <strong>HTML, CSS e JavaScript.</strong>`
    } else if(lang === 'en') {
        elements.logoCountry.src = "../img/eua-logo.png";
        elements.visitProject.innerHTML = `Visit project`;

        elements.titleLidia.innerHTML = `Hello, my name is <strong>Lídia Torres!</strong>`;
        elements.careerLidia.innerHTML = `Full-Stack Developer`;

        elements.aboutLidiaText1.innerHTML = `Full-Stack Developer, I improve my skills in creating complete and functional systems coupled with interactive interfaces. I have been working as a freelancer for the past 4 years. My specialty includes React, React Native, HTML5, CSS3, JS (ES6), Bootstrap, PHP, Laravel, Java and SQL.`;
        elements.aboutLidiaText2.innerHTML = `During my technical course, I realized the enormous passion I have for the programming area. I loved doing the projects and, doing individual projects for practice and professional development.`

        elements.projectsTitle.innerHTML = `Projects`;
        elements.tecnologiesTitle.innerHTML = `Specialites/Technologies`;

        elements.project1Desc.innerHTML = `Agricultural products and family farming marketplace made in <strong>PHP.</strong> The site offers an easy-to-use interface to search, compare, buy and sell products from a wide selection of agribusiness that vary with categories, size and price. The site also features product filtering and a control panel (dashboard) for users.`
        
        elements.project2Desc.innerHTML = `An event hosting site made in <strong>Laravel</strong>, where users can view, create and confirm attendance at any event. Users can also decide if the event is private or not, being able to include the access levels that other users will have to have to be able to access the event and confirm attendance.`
        
        elements.project3Desc.innerHTML = `BitCont is an application developed with <strong>React Native</strong> for Bitcoin price queries, consuming a price API. The application offers a simple interface to view the Bitcoin price in real time, as well as historical charts.`

        elements.project4Desc.innerHTML = `I created a social network called NexusSocial, where I use the Facebook layout as inspiration to make my own. Made in <strong>HTML, CSS and JavaScript.</strong>`
    }
}