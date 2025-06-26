import logo from '../assets/imagotipo_deitado.png'
import curriculo from '../archives/curriculo-lidia-copia.pdf'

function Header() {
    return (
        <header>
            <figure>
                <img alt="Logo lilytorrx" src={logo}></img>
            </figure>
            <nav>
                <ul>
                    <li><a>Projetos</a></li>
                    <li><a>Sobre mim</a></li>
                    <li><a>Contato</a></li>
                    <li><a href={curriculo} download="curriculo-lidia">Baixar currículo</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;