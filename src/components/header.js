import logo from '../assets/imagotipo_deitado.png';
import curriculo from '../archives/curriculo-lidia-copia.pdf';

import { Link } from 'react-router-dom';

import '../css/header.css';
import useScrollReveal from '../hooks/useScrollReveal';

function Header() {
    // Corrigido para usar a classe `.logo` e `nav` diretamente
    useScrollReveal(['.logo', 'nav'], { origin: 'top', delay: 100 });

    return (
        <header>
            <figure className='logo'>
                <img alt="Logo lilytorrx" src={logo} />
            </figure>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projetos</Link></li>
                    <li><Link to='/contact'>Contato</Link></li>
                    <li>
                        <a
                            className='resume'
                            href={curriculo}
                            download="curriculo-lidia"
                            rel="noreferrer noopener"
                        >
                            Baixar currículo
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
