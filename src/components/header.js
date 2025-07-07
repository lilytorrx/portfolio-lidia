import logo from '../assets/imagotipo_deitado.png'
import curriculo from '../archives/curriculo-lidia-copia.pdf'

import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <figure>
                <img alt="Logo lilytorrx" src={logo}></img>
            </figure>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><a href="#about-me">Sobre mim</a></li>
                    <li><Link to='/contact'>Contato</Link></li>
                    <li><a href={curriculo} download="curriculo-lidia" rel="noreferrer noopener">Baixar currículo</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;