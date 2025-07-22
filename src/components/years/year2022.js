import firstFeaturePic from '../../assets/karnak-icon.png';
import secondFeaturePic from '../../assets/javascript-icon.png';
import useScrollReveal from '../../hooks/useScrollReveal';

function Year2022() {
    useScrollReveal(['.year-info h2', '.year-info .year-feature', '.year-info .year-details li'], {
        origin: 'bottom',
        distance: '30px',
        delay: 100,
        interval: 100,
    });

    return (
        <div className='year-info'>
            <h2 className='title'>2022</h2>
            <div className='year-features'>
                <div className='year-feature'>
                    <img className='year-img' src={firstFeaturePic} alt="Logo KARNAK"/>
                    <div>
                        <h3 className='feature-title'>Primeiro trabalho como Freelancer - KARNAK</h3>
                        <p>Construí uma loja virtual estática completa (visualização de produto, cadastro/login, media queries) como Trabalho de Conclusão de Curso de um amigo, enfrentei muitos desafios, tais como:</p>
                        <ul className='year-details'>
                            <li>Estruturação de código</li>
                            <li>Briefing mal estruturado</li>
                            <li>Estilização (GAMBIARRAS)</li>
                            <li>Código redundante</li>
                        </ul>
                    </div>
                </div>
                <div className='year-feature'>
                    <img className='year-img' src={secondFeaturePic} alt="Logo JavaScript"/>
                    <div>
                        <h3 className='feature-title'>Interesse extremo no JavaScript</h3>
                        <p>Construí uma loja virtual estática completa (visualização de produto, cadastro/login, media queries) como Trabalho de Conclusão de Curso de um amigo, enfrentei muitos desafios, tais como:</p>
                        <ul className='year-details'>
                            <li><a href='https://www.github.com/lilytorrx/nexusSocial' rel='noopener noreferrer'>NexusSocial</a></li>
                            <li><a href='https://www.github.com/lilytorrx/project-calculadora-imc' rel='noopener noreferrer'>Calculadora de IMC</a></li>
                            <li><a href='https://github.com/lilytorrx/projeto-relogio-digital' rel='noopener noreferrer'>Relógio digital</a></li>
                            <li><a href='https://github.com/lilytorrx/projeto-jogo-da-velha' rel='noopener noreferrer'>Jogo da Velha</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Year2022;
