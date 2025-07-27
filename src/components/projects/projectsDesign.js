import '../../css/cssGeral.css';

import firstProject from '../../assets/projeto-confia-figma.jpg';
import secondProject from '../../assets/projeto-faetec-figma.jpg';
import thirdProject from '../../assets/projeto-coca-cola-figma.jpg';
import fourthProject from '../../assets/projeto-vila-real-figma.jpg';

import useScrollReveal from '../../hooks/useScrollReveal';

function ProjectsDesign() {
    const projects = [
        {
            name: "Projeto CONFIA",
            year: 2023,
            description:
                "Projeto de Combate a Fake News utilizando Inteligência Artificial com R. Site institucional feito com Wordpress.",
            img: firstProject,
            link: 'https://www.figma.com/proto/AqkTXsiCrlKmC43n7V49X1?node-id=31-118&t=YcYbaTxHtaeHEyYV-6',
        },
        {
            name: "Site FAETEC",
            year: 2024,
            description:
                "Uma reimaginação do site da FAETEC, respeitando a identidade visual e proposta da empresa.",
            img: secondProject,
            link: 'https://www.figma.com/design/4SRjySgf4McolIUXnqJF9E/Site-FAETEC?m=auto&t=YcYbaTxHtaeHEyYV-6',
        },
        {
            name: "Landing Page Coca-Cola Shoes",
            year: 2024,
            description:
                "Uma landing page do produto da Coca-Cola, o Coca-Cola Shoes, utilizando imagens promocionais, CTAs e slogans.",
            img: thirdProject,
            link: 'https://www.figma.com/design/HVKPCOlImAS1XGW1lqlMT1/Landing-Page-Coca-Cola?m=auto&t=YcYbaTxHtaeHEyYV-6',
        },
        {
            name: "Site Vila Real",
            year: 2024,
            description:
                "Uma landing page/site institucional da empresa de ônibus Vila Real, do Rio de Janeiro.",
            img: fourthProject,
            link: 'https://www.figma.com/design/QfFaXm82HiH8pB4Rpw4s91/Vila-Real?m=auto&t=YcYbaTxHtaeHEyYV-6',
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
                            <p className="project-year">{project.year}</p>
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

export default ProjectsDesign;
