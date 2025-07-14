import foto from '../assets/foto-lidia.jpg';
import github from '../assets/github-icon.png';
import instagram from '../assets/instagram-icon.png';
import linkedin from '../assets/linkedin-icon.png';


function MainContent() {
    return (
        <div className="main-content">
            <div className="info-lidia">
                <div>
                    <figure className='img-lidia'>
                        <img src={foto} alt="Foto de Lídia" />
                    </figure>
                </div>
                <div>
                    <p className='name'>Olá, eu sou <span className="purple">Lídia Torres!</span></p>
                    <p className='occupation'>UX/UI Designer</p>
                    <div className="networks">
                        <div className="network">
                            <a href="https://github.com/lilytorrx" target="_blank" rel="noopener noreferrer">
                            <figure><img src={github} alt="GitHub" /></figure>
                            </a>
                        </div>
                        <div className="network">
                            <a href="https://instagram.com/lilytorrx" target="_blank" rel="noopener noreferrer">
                            <figure><img src={instagram} alt="instagram" /></figure>
                            </a>
                        </div>
                        <div className="network">
                            <a href="https://linkedin.com/in/lilytorrx" target="_blank" rel="noopener noreferrer">
                            <figure><img src={linkedin} alt="linkedin" /></figure>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='about-me' id="about-me">
                <h2 className='title'>
                    Sobre mim
                </h2>
                <p>Sou desenvolvedora Full-Stack com experiência no desenvolvimento de sistemas escaláveis e interfaces consistentes. Trabalho com diversas tecnologias, incluindo <span className='purple'>PHP, JavaScript, React, Laravel, MySQL, HTML, CSS, Java, WordPress e React Native.</span> Também utilizo a <span className="purple">ORM Prisma</span> para integração com bancos de dados e realizo o versionamento de todos os meus projetos por meio do <span className="purple">Git e GitHub.</span></p>

                <p>Tenho experiência no desenvolvimento de sistemas complexos, como um marketplace agrícola construído com PHP e Bootstrap, desenvolvido como <span className="purple">Trabalho de Conclusão de Curso</span> no ensino técnico. Além disso, realizo prototipações de interfaces no Figma, garantindo alinhamento entre design e funcionalidade.</p>

                <p>Durante minha formação técnica, descobri uma grande paixão pela programação. Desde então, venho me dedicando ao <span className="purple">desenvolvimento de projetos individuais</span> para aprimorar minhas habilidades e evoluir profissionalmente na área.</p>
            </div>
        </div>
    )
}

export default MainContent;