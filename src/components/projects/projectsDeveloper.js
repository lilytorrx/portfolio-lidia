import '../../css/cssGeral.css'
import '../../css/projectDeveloper.css'

import firstProject from '../../assets/matin-icon-colorido.jpg'
import secondProject from '../../assets/bitcont-icon-colorido.jpg'
import thirdProject from '../../assets/ltevents-colorido.jpg'
import fourthProject from '../../assets/cozinhaconnect-colorido.jpg'

function ProjectsDeveloper() {
    const projects = [
        { name: "Mat-in", description: "Marketplace de produtos agrícolas e de agricultura familiar feito em PHP. O site oferece uma interface fácil de usar para pesquisar, comprar, comparar e vender produtos de uma ampla seleção do agronegócio que variam com categorias, tamanho e preço. O site também conta com filtragem de produtos e um painel e controle (dashboard) para os usuários.", img: firstProject, link: 'https://www.github.com/projetomatin'},
        { name: "BitCont", description: "BitCont é um aplicativo desenvolvido com React Native para consulta de cotações do valor do Bitcoin, consumindo uma API de preços. O aplicativo oferece uma interface simples para visualizar as cotações em tempo real, além de gráficos e histórico de cotação.", img: secondProject, link: 'https://www.github.com/lilytorrx/bitcont'},
        { name: "LTEvents", description: "Um site para hospedagem de eventos feito em Laravel, onde os usuários poderão ver, criar e confirmar presença em um evento qualquer. Os usuários também poderão decidir se o evento é privado ou não, podendo incluir os níveis de acesso que os outros usuários necessitarão para poder acessar o evento e confirmar presença.", img: thirdProject, link: 'https://www.github.com/lilytorrx/ltevents'},
        { name: "Cozinha Connect", description: "O Cozinha Connect é uma plataforma de gastronomia. Nele, os usuários podem publicar receitas, avaliá-las e explorar uma variedade de posts compartilhados pela comunidade. Cada usuário possui um perfil próprio, onde é possível postar conteúdos relacionados a culinária. O site foi desenvolvido com foco na experiência do usuário, permitindo uma navegação fluida e interação entre perfis.", img: fourthProject, link: 'https://www.github.com/lilytorrx/projeto-culinaria'}
    ]

    return (
        <div className="projects-box">        
            <div className='projects-list'>
                {projects.map((project, index) => (
                    <div key={index} className='project-item'>
                        <img src={project.img} alt={project.name} className='project-image' />
                        <h3 className="project-name">{project.name}</h3>
                        <p className='project-description'>{project.description}</p>
                        <a className='btn project-link' href={project.link} target="_blank" rel="noopener noreferrer">Visitar projeto</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProjectsDeveloper