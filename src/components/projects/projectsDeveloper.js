import '../../css/cssGeral.css';

import firstProject from '../../assets/matin-icon-colorido.jpg';
import secondProject from '../../assets/bitcont-icon-colorido.jpg';
import thirdProject from '../../assets/ltevents-colorido.jpg';
import fourthProject from '../../assets/cozinhaconnect-colorido.jpg';

import useScrollReveal from '../../hooks/useScrollReveal';

function ProjectsDeveloper() {
    const projects = [
        {
            name: "Mat-in",
            description:
                "Marketplace de produtos agrícolas e de agricultura familiar feito em PHP. O site oferece uma interface fácil de usar para pesquisar, comprar, comparar e vender produtos do agronegócio. Possui filtragem de produtos e um painel de controle (dashboard) para os usuários.",
            img: firstProject,
            link: 'https://www.github.com/projetomatin',
        },
        {
            name: "BitCont",
            description:
                "Aplicativo desenvolvido com React Native para consulta de cotações do Bitcoin, consumindo uma API de preços em tempo real, além de gráficos e histórico de cotações.",
            img: secondProject,
            link: 'https://www.github.com/lilytorrx/bitcont',
        },
        {
            name: "LTEvents",
            description:
                "Site para hospedagem de eventos feito em Laravel, onde os usuários podem criar e confirmar presença em eventos, além de definir se o evento é privado e gerenciar níveis de acesso.",
            img: thirdProject,
            link: 'https://www.github.com/lilytorrx/ltevents',
        },
        {
            name: "Cozinha Connect",
            description:
                "Plataforma de gastronomia para publicar e avaliar receitas, com perfis personalizados para cada usuário. Foco em experiência do usuário e interação entre perfis.",
            img: fourthProject,
            link: 'https://www.github.com/lilytorrx/projeto-culinaria',
        },
    ];

    useScrollReveal(['.project-item'], { origin: 'bottom', distance: '50px', delay: 200 });

    return (
        <section className="projects-box">
            <div className="projects-list">
                {projects.map((project, index) => (
                    <article key={index} className="project-item">
                        <img src={project.img} alt={project.name} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-name">{project.name}</h3>
                            <p className="project-description">{project.description}</p>
                            <a className="btn project-link" href={project.link} target="_blank" rel="noopener noreferrer">
                                Visitar projeto
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ProjectsDeveloper;
