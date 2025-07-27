import logo from '../assets/imagotipo_deitado.png';
import github from '../assets/github-icon.png';
import instagram from '../assets/instagram-icon.png';
import linkedin from '../assets/linkedin-icon.png';

import '../css/cssGeral.css';
import '../css/footer.css';

function Footer() {
    return(
        <footer>
            <div className="footer-content">
                <figure className='logo'>
                    <img alt="Logo lilytorrx" src={logo} />
                </figure>
                <div className="networks-footer">
                    <div className="network-footer">
                        <a href="https://github.com/lilytorrx" target="_blank" rel="noopener noreferrer">
                            <figure><img src={github} alt="GitHub" /></figure>
                        </a>
                    </div>
                    <div className="network-footer">
                        <a href="https://instagram.com/lilytorrx" target="_blank" rel="noopener noreferrer">
                            <figure><img src={instagram} alt="Instagram" /></figure>
                        </a>
                    </div>
                    <div className="network-footer">
                        <a href="https://linkedin.com/in/lilytorrx" target="_blank" rel="noopener noreferrer">
                            <figure><img src={linkedin} alt="LinkedIn" /></figure>
                        </a>
                    </div>
                </div>
            </div>
            <p>Desenvolvido e criado por <span className="purple">Lídia Torres.</span> © 2025</p>
        </footer>
    )
}

export default Footer