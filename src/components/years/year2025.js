import firstFeaturePic from '../../assets/lilytorrx-icon.png';
import secondFeaturePic from '../../assets/java-icon.png';
import useScrollReveal from '../../hooks/useScrollReveal';

function Year2025() {
    useScrollReveal(['.year-info h2', '.year-info .year-feature', '.year-info .year-details li'], {
        origin: 'bottom',
        distance: '30px',
        delay: 100,
        interval: 100,
    });

    return (
        <div className='year-info'>
            <h2 className='title'>2025</h2>
            <div className='year-features'>
                <div className='year-feature'>
                    <img className='year-img' src={firstFeaturePic} alt="logo Lilytorrx"/>
                    <div>
                        <h3 className='feature-title'>Recriação do meu pórtfolio e criação da <span className='purple'>minha identidade visual</span></h3>
                        <p>Com inspiração em outros diversos portfólios, decidi recriar meu portfólio antigo (feito em HTML, CSS e JS) agora em React, com mais interatividade e mais otimizado.</p>
                        <ul className='year-details'>
                            <li>Prototipagem INTEIRA no Figma</li>
                            <li>Componentes e Modularização em React</li>
                            <li>Utilização de bibliotecas para interatividade</li>
                        </ul>
                    </div>
                </div>
                <div className='year-feature'>
                    <img className='year-img' src={secondFeaturePic} alt="Logo Java"/>
                    <div>
                        <h3 className='feature-title'>Comecei a estudar <span className='purple'>Java</span></h3>
                        <p>Estava navegando pela internet quando vi um link para ingressar no Bootcamp da DIO para aprender Java. Como eu já tinha interesse nessa linguagem, ingressei de imediato. Estudei POO e Classes, fazendo mini projetos e testando bastante. </p>
                        <ul className='year-details'>
                            <li><a href='https://github.com/lilytorrx/sudoku-java' rel='noopener noreferrer'>Sudoku em Java com Swing</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Year2025;
