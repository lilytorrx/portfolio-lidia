import firstFeaturePic from '../../assets/confia-icon.png';
import secondFeaturePic from '../../assets/laravel-icon.png';

function Year2023() {
    return (
        <div className='year-info'>
            <h2 className='title'>2023</h2>
            <div class='year-features'>
                <div className='year-feature'>
                    <img className='year-img' src={firstFeaturePic} alt="Logo projeto CONFIA"/>
                    <h3 className='feature-title'>Primeiro site institucional - <span className='purple'>Projeto CONFIA</span></h3>
                    <p>Construí um site inteiro contendo informações sobre o projeto <span className="purple">Comabte à Fake News utilizando Inteligência Articial</span> em <span className='purple'>Wordpress</span>.</p>
                    <ul className='year-details'>
                        <li>Hospedagem de sites</li>
                        <li>Estilização com Elementor</li>
                        <li>Estruturação e aprendizado do WordPress</li>
                        <li>Trabalho em equipe</li>
                    </ul>
                </div>
                <div className='year-feature'>
                    <img className='year-img' src={secondFeaturePic} alt="logo Laravel"/>
                    <h3 className='feature-title'>Interesse em <span className='purple'>Laravel e React</span></h3>
                    <p>Essa época, descobri os frameworks. Fiquei fascinada em como o React funcionava em relação a modularização e componentes. No 2° ano do curso técnico, aprendi PHP, que me fez estudar Laravel, a estrutura de MVC e routes. Alguns projetos nestas tecnologias são: </p>
                    <ul className='year-details'>
                        <li><a href='#'>Este portfólio (React)</a></li>
                        <li><a href='#'>Calculadora de IMC</a></li>
                        <li><a href='#'>LTEvents</a></li>
                        <li><a href='#'>BitCont</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Year2023;