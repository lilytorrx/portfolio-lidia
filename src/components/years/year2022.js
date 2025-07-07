import firstFeaturePic from '../../assets/karnak-icon.png'
import secondFeaturePic from '../../assets/javascript-icon.png'

function Year2022() {
    return (
        <div class='year-info'>
            <h2 className='title'>2022</h2>
            <div class='year-features'>
                <div className='year-feature'>
                    <img className='first-year-picture' src={firstFeaturePic} alt="Logo KARNAK"/>
                    <h3 className='feature-title'>Primeiro trabalho como Freelancer - KARNAK</h3>
                    <p>Construí uma loja virtual estática completa (visualização de produto, cadastro/login, media queries) como Trabalho de Conclusão de Curso de um amigo, enfrentei muitos desafios, tais como:</p>
                    <ul>
                        <li>Estruturação de código</li>
                        <li>Briefing mal estruturado</li>
                        <li>Estilização (GAMBIARRAS)</li>
                        <li>Código redundante</li>
                    </ul>
                </div>
                <div className='year-feature'>
                    <img className='first-year-picture' src={secondFeaturePic} alt="Logo JavaScript"/>
                    <h3 className='feature-title'>Interesse extremo no JavaScript</h3>
                    <p>Construí uma loja virtual estática completa (visualização de produto, cadastro/login, media queries) como Trabalho de Conclusão de Curso de um amigo, enfrentei muitos desafios, tais como:</p>
                    <ul>
                        <li><a href='#'>NexusSocial</a></li>
                        <li><a href='#'>Calculadora de IMC</a></li>
                        <li><a href='#'>Relógio digital</a></li>
                        <li><a href='#'>Jogo da Velha</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Year2022;