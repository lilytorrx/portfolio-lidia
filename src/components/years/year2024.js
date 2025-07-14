import firstFeaturePic from '../../assets/matin-icon.png'
import secondFeaturePic from '../../assets/chatgpt.png'

function Year2024() {
    return (
        <div className='year-info'>
            <h2 className='title'>2024</h2>
            <div class='year-features'>
                <div className='year-feature'>
                    <img className='year-img' src={firstFeaturePic} alt="Logo projeto Matin"/>
                    <h3 className='feature-title'>Conclusão do Trabalho de Conclusão de Curso - Mat-in</h3>
                    <p>Responsável pelo front-end do sistema, fiz grande parte das páginas, tais quais visualização de produto, login/cadastro, dashboard e manutenção parcial do banco de dados.</p>
                    <ul className='year-details'>
                        <li>Criação de CRUDS</li>
                        <li>Utilização de APIs como a ViaCEP</li>
                        <li>Estilização com Bootstrap</li>
                        <li>Trabalho em equipe</li>
                    </ul>
                </div>
                <div className='year-feature'>
                    <img className='year-img' src={secondFeaturePic} alt="logo chatGPT"/>
                    <h3 className='feature-title'>Diversos testes com as tecnologias emergentes</h3>
                    <p>Comecei a estudar IA e implementar soluções com ela, pelo ChatGPT, DeepSeek e afins. Ajustei meu LinkedIn para melhor visiblidade para os recrutadores e estava focada em aprender as matérias do curso técnico.</p>
                </div>
            </div>
        </div>
    )
}

export default Year2024;